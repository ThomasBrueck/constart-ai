# Constart AI — Backend API

Backend REST API para **Constart AI**, una plataforma SaaS que conecta startups con empresas inversoras (VCs, aceleradoras, corporaciones) mediante **búsqueda semántica con IA**.

El frontend está desplegado en [constartai.vercel.app](https://constartai.vercel.app) (repositorio separado).

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Runtime | Bun v1.2.21 |
| Lenguaje | TypeScript 5.9 (strict mode, ESM) |
| Framework | Express 5 |
| Base de datos | PostgreSQL 15 (Neon serverless en producción) |
| ORM | Prisma v7 con PrismaPg driver adapter |
| Vector DB | pgvector (extension de PostgreSQL) |
| IA / Embeddings | Voyage AI (`voyage-3.5-lite`, vectores de 1024 dimensiones) |
| Pagos | Stripe (subscriptions, checkout sessions, webhooks) |
| Storage | Cloudinary (logos e imágenes de perfil) |
| Auth | JWT (bcrypt + jsonwebtoken) |
| Email | Resend (preparado, no implementado aún) |
| DevOps | Docker Compose (PostgreSQL local) |

---

## Arquitectura

Arquitectura en capas **Routes → Controllers → Services** con un patrón de singletons en cada capa:

```
src/
├── index.ts                    # Entry point, middleware, route mounting
├── config/                     # Configuración de Prisma y Cloudinary
├── controller/                 # Request handlers (8 controllers)
├── services/                   # Business logic (10 services)
├── routes/                     # Express routers (8 route groups)
├── middleware/                 # Auth JWT, role guards, error handler, multer
├── interfaces/                 # TypeScript interfaces
└── utils/                      # Custom error classes (AppError)
```

---

## Features Principales

### Autenticación y Autorización
- Registro con hashing bcrypt (12 rounds) y generación de JWT (12h expiry)
- Middleware de JWT verification + role-based access control (`STARTUP` / `COMPANY`)
- Endpoints protegidos por rol: las startups gestionan su perfil, las empresas buscan y gestionan su suscripción

### Perfiles de Startup
- CRUD completo: industria, tecnologías (150+ tipos), pitch deck, demo video, métricas (MRR, usuarios, team size), redes sociales
- Gestión de miembros del equipo (nombre, posición, universidad, foto)
- Visibilidad controlada por el propio startup

### Sistema de Pagos (Stripe)
- 3 planes: **FREE** (3 búsquedas/mes), **BASIC** ($29.99, 50 búsquedas), **PRO** ($99.99, ilimitado)
- Checkout sessions para suscripciones recurrentes
- Webhooks con manejo de 5 eventos: `checkout.session.completed`, `subscription.updated/deleted`, `invoice.payment_succeeded/failed`
- Deduplicación de webhook events para evitar procesamiento duplicado
- Reset mensual automático del quota de búsqueda

### Búsqueda Semántica con IA
- Al actualizar un perfil de startup, se genera un texto descriptivo con toda la info del perfil
- Se convierte en un **vector de 1024 dimensiones** usando **Voyage AI** (`voyage-3.5-lite`)
- Los vectores se almacenan en PostgreSQL con **pgvector**
- Las empresas realizan búsquedas semánticas por similitud de coseno (threshold > 0.6)
- Consumo de quota por búsqueda según el plan contratado

### Upload de Archivos
- Logos de usuario e imágenes de perfil de miembros vía Cloudinary
- Multer con buffer en memoria, límite de 5MB, solo imágenes

---

## API Endpoints (`/api/v1`)

| Método | Ruta | Auth | Rol | Descripción |
|---|---|---|---|---|
| POST | `/auth/register` | No | — | Registro de usuario |
| POST | `/auth/login` | No | — | Login, devuelve JWT |
| GET | `/user/me` | JWT | Any | Perfil del usuario |
| PUT | `/user/me` | JWT | Any | Actualizar perfil |
| PUT | `/user/me/password` | JWT | Any | Cambiar contraseña |
| DELETE | `/user/me` | JWT | Any | Eliminar cuenta |
| GET | `/startup/` | No | — | Listar startups públicas |
| GET | `/startup/:id` | No | — | Startup pública por ID |
| PUT | `/startup/profile` | JWT | STARTUP | Actualizar perfil startup |
| GET | `/startup/profile/me` | JWT | STARTUP | Mi perfil startup |
| GET | `/startup/:id/members` | No | — | Miembros de una startup |
| PUT | `/company/me` | JWT | COMPANY | Actualizar perfil empresa |
| GET | `/company/me` | JWT | COMPANY | Info de plan y suscripción |
| POST | `/member/create` | JWT | STARTUP | Agregar miembro al equipo |
| DELETE | `/member/:memberId` | JWT | STARTUP | Eliminar miembro |
| POST | `/files/logo` | JWT | Any | Subir logo |
| POST | `/files/profile_image/:id` | JWT | Any | Subir foto de perfil |
| POST | `/stripe/create-checkout` | JWT | COMPANY | Crear sesión de pago |
| GET | `/stripe/subscription` | JWT | COMPANY | Estado de suscripción |
| POST | `/stripe/cancel-subscription` | JWT | COMPANY | Cancelar suscripción |
| POST | `/stripe/webhook` | No | — | Webhook de Stripe |
| POST | `/search/` | JWT | COMPANY | Búsqueda semántica de startups |

---

## Base de Datos (Prisma)

5 modelos y 6 enums en PostgreSQL:

- **User** — email, password, role, name, description, logo, website
- **StartupInfo** — industria, tecnologías, pitch deck, demo video, métricas, embedding vectorial (vector 1024)
- **Member** — nombre, edad, posición, universidad, foto (relacionado con StartupInfo)
- **CompanyInfo** — industria, tamaño, tipo, plan, estado de suscripción, Stripe IDs, quota de búsqueda
- **StripeWebhookEvent** — deduplicación de eventos procesados

15 migraciones de base de datos (Nov–Dic 2025).

---

## Ejecución Local

### Requisitos
- [Bun](https://bun.com) v1.2+
- Docker (para PostgreSQL local)

### Pasos

```bash
# 1. Instalar dependencias
bun install

# 2. Levantar PostgreSQL
docker compose up -d

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales

# 4. Ejecutar migraciones
bunx prisma migrate dev

# 5. Generar cliente Prisma
bunx prisma generate

# 6. Arrancar en desarrollo
bun --watch src/index.ts
```

### Variables de entorno requeridas

```
DATABASE_URL          # PostgreSQL connection string
JWT_SECRET            # Secret para firmar JWTs
STRIPE_SECRET_KEY     # Stripe secret key
STRIPE_WEBHOOK_SECRET # Stripe webhook signing secret
VOYAGE_API_KEY        # Voyage AI API key para embeddings
CLOUDINARY_CLOUD_NAME # Cloudinary cloud name
CLOUDINARY_API_KEY    # Cloudinary API key
CLOUDINARY_API_SECRET # Cloudinary API secret
FRONTEND_URL          # URL del frontend (CORS)
```
