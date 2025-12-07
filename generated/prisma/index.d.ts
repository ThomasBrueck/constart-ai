
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StartupInfo
 * 
 */
export type StartupInfo = $Result.DefaultSelection<Prisma.$StartupInfoPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model CompanyInfo
 * 
 */
export type CompanyInfo = $Result.DefaultSelection<Prisma.$CompanyInfoPayload>
/**
 * Model StripeWebhookEvent
 * 
 */
export type StripeWebhookEvent = $Result.DefaultSelection<Prisma.$StripeWebhookEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STARTUP: 'STARTUP',
  COMPANY: 'COMPANY'
};

export type Role = (typeof Role)[keyof typeof Role]


export const IndustryType: {
  FINTECH: 'FINTECH',
  HEALTHTECH: 'HEALTHTECH',
  EDTECH: 'EDTECH',
  ECOMMERCE: 'ECOMMERCE',
  SAAS: 'SAAS',
  MARKETPLACE: 'MARKETPLACE',
  SOCIAL_MEDIA: 'SOCIAL_MEDIA',
  GAMING: 'GAMING',
  AI_ML: 'AI_ML',
  BLOCKCHAIN: 'BLOCKCHAIN',
  CYBERSECURITY: 'CYBERSECURITY',
  PROPTECH: 'PROPTECH',
  FOODTECH: 'FOODTECH',
  TRAVELTECH: 'TRAVELTECH',
  CLEANTECH: 'CLEANTECH',
  LOGISTICS: 'LOGISTICS',
  HR_TECH: 'HR_TECH',
  MARKETING_TECH: 'MARKETING_TECH',
  LEGAL_TECH: 'LEGAL_TECH',
  INSURTECH: 'INSURTECH',
  AGRITECH: 'AGRITECH',
  BIOTECH: 'BIOTECH',
  MOBILITY: 'MOBILITY',
  ENTERTAINMENT: 'ENTERTAINMENT',
  FASHION_TECH: 'FASHION_TECH',
  SPORTS_TECH: 'SPORTS_TECH',
  REAL_ESTATE: 'REAL_ESTATE',
  CONSULTING: 'CONSULTING',
  NONPROFIT: 'NONPROFIT',
  OTHER: 'OTHER'
};

export type IndustryType = (typeof IndustryType)[keyof typeof IndustryType]


export const TechnologyType: {
  REACT: 'REACT',
  VUE: 'VUE',
  ANGULAR: 'ANGULAR',
  SVELTE: 'SVELTE',
  NEXT: 'NEXT',
  NUXT: 'NUXT',
  GATSBY: 'GATSBY',
  ASTRO: 'ASTRO',
  REMIX: 'REMIX',
  SOLID: 'SOLID',
  PREACT: 'PREACT',
  QWIK: 'QWIK',
  REACT_NATIVE: 'REACT_NATIVE',
  FLUTTER: 'FLUTTER',
  KOTLIN: 'KOTLIN',
  SWIFT: 'SWIFT',
  IONIC: 'IONIC',
  XAMARIN: 'XAMARIN',
  CORDOVA: 'CORDOVA',
  CAPACITOR: 'CAPACITOR',
  NODE: 'NODE',
  EXPRESS: 'EXPRESS',
  NEST: 'NEST',
  FASTIFY: 'FASTIFY',
  KOA: 'KOA',
  DJANGO: 'DJANGO',
  FLASK: 'FLASK',
  FASTAPI: 'FASTAPI',
  SPRING_BOOT: 'SPRING_BOOT',
  LARAVEL: 'LARAVEL',
  SYMFONY: 'SYMFONY',
  RAILS: 'RAILS',
  PHOENIX: 'PHOENIX',
  ACTIX: 'ACTIX',
  ROCKET: 'ROCKET',
  JAVASCRIPT: 'JAVASCRIPT',
  TYPESCRIPT: 'TYPESCRIPT',
  PYTHON: 'PYTHON',
  JAVA: 'JAVA',
  GO: 'GO',
  RUST: 'RUST',
  CPP: 'CPP',
  CSHARP: 'CSHARP',
  PHP: 'PHP',
  RUBY: 'RUBY',
  ELIXIR: 'ELIXIR',
  SCALA: 'SCALA',
  KOTLIN_JVM: 'KOTLIN_JVM',
  DART: 'DART',
  R: 'R',
  JULIA: 'JULIA',
  POSTGRESQL: 'POSTGRESQL',
  MYSQL: 'MYSQL',
  MONGODB: 'MONGODB',
  REDIS: 'REDIS',
  CASSANDRA: 'CASSANDRA',
  DYNAMODB: 'DYNAMODB',
  FIREBASE: 'FIREBASE',
  SUPABASE: 'SUPABASE',
  PLANETSCALE: 'PLANETSCALE',
  COCKROACHDB: 'COCKROACHDB',
  ELASTICSEARCH: 'ELASTICSEARCH',
  NEO4J: 'NEO4J',
  INFLUXDB: 'INFLUXDB',
  TIMESCALEDB: 'TIMESCALEDB',
  AWS: 'AWS',
  AZURE: 'AZURE',
  GCP: 'GCP',
  VERCEL: 'VERCEL',
  NETLIFY: 'NETLIFY',
  RAILWAY: 'RAILWAY',
  RENDER: 'RENDER',
  FLY_IO: 'FLY_IO',
  DIGITAL_OCEAN: 'DIGITAL_OCEAN',
  HEROKU: 'HEROKU',
  CLOUDFLARE: 'CLOUDFLARE',
  DOCKER: 'DOCKER',
  KUBERNETES: 'KUBERNETES',
  TERRAFORM: 'TERRAFORM',
  ANSIBLE: 'ANSIBLE',
  JENKINS: 'JENKINS',
  GITHUB_ACTIONS: 'GITHUB_ACTIONS',
  GITLAB_CI: 'GITLAB_CI',
  CIRCLECI: 'CIRCLECI',
  TRAVIS_CI: 'TRAVIS_CI',
  TENSORFLOW: 'TENSORFLOW',
  PYTORCH: 'PYTORCH',
  SCIKIT_LEARN: 'SCIKIT_LEARN',
  KERAS: 'KERAS',
  HUGGING_FACE: 'HUGGING_FACE',
  LANGCHAIN: 'LANGCHAIN',
  OPENAI: 'OPENAI',
  ANTHROPIC: 'ANTHROPIC',
  STABLE_DIFFUSION: 'STABLE_DIFFUSION',
  ETHEREUM: 'ETHEREUM',
  SOLIDITY: 'SOLIDITY',
  WEB3_JS: 'WEB3_JS',
  ETHERS: 'ETHERS',
  HARDHAT: 'HARDHAT',
  TRUFFLE: 'TRUFFLE',
  POLYGON: 'POLYGON',
  SOLANA: 'SOLANA',
  JEST: 'JEST',
  VITEST: 'VITEST',
  CYPRESS: 'CYPRESS',
  PLAYWRIGHT: 'PLAYWRIGHT',
  SELENIUM: 'SELENIUM',
  PYTEST: 'PYTEST',
  JUNIT: 'JUNIT',
  TAILWIND: 'TAILWIND',
  MATERIAL_UI: 'MATERIAL_UI',
  CHAKRA_UI: 'CHAKRA_UI',
  SHADCN: 'SHADCN',
  STYLED_COMPONENTS: 'STYLED_COMPONENTS',
  EMOTION: 'EMOTION',
  SASS: 'SASS',
  REDUX: 'REDUX',
  ZUSTAND: 'ZUSTAND',
  MOBX: 'MOBX',
  RECOIL: 'RECOIL',
  JOTAI: 'JOTAI',
  PINIA: 'PINIA',
  VITE: 'VITE',
  WEBPACK: 'WEBPACK',
  TURBOPACK: 'TURBOPACK',
  ESBUILD: 'ESBUILD',
  ROLLUP: 'ROLLUP',
  PARCEL: 'PARCEL',
  GRAPHQL: 'GRAPHQL',
  REST_API: 'REST_API',
  GRPC: 'GRPC',
  WEBSOCKETS: 'WEBSOCKETS',
  SOCKET_IO: 'SOCKET_IO',
  STRIPE: 'STRIPE',
  TWILIO: 'TWILIO',
  SENDGRID: 'SENDGRID',
  PRISMA: 'PRISMA',
  DRIZZLE: 'DRIZZLE',
  TYPEORM: 'TYPEORM'
};

export type TechnologyType = (typeof TechnologyType)[keyof typeof TechnologyType]


export const Plan: {
  FREE: 'FREE',
  BASIC: 'BASIC',
  PRO: 'PRO'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const PlanStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  CANCELLED: 'CANCELLED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]


export const CompanyType: {
  VENTURE_CAPITAL: 'VENTURE_CAPITAL',
  ANGEL_INVESTOR: 'ANGEL_INVESTOR',
  ACCELERATOR: 'ACCELERATOR',
  CORPORATION: 'CORPORATION',
  STARTUP: 'STARTUP',
  GOVERNMENT: 'GOVERNMENT',
  OTHER: 'OTHER'
};

export type CompanyType = (typeof CompanyType)[keyof typeof CompanyType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type IndustryType = $Enums.IndustryType

export const IndustryType: typeof $Enums.IndustryType

export type TechnologyType = $Enums.TechnologyType

export const TechnologyType: typeof $Enums.TechnologyType

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

export type CompanyType = $Enums.CompanyType

export const CompanyType: typeof $Enums.CompanyType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.startupInfo`: Exposes CRUD operations for the **StartupInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StartupInfos
    * const startupInfos = await prisma.startupInfo.findMany()
    * ```
    */
  get startupInfo(): Prisma.StartupInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyInfo`: Exposes CRUD operations for the **CompanyInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyInfos
    * const companyInfos = await prisma.companyInfo.findMany()
    * ```
    */
  get companyInfo(): Prisma.CompanyInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stripeWebhookEvent`: Exposes CRUD operations for the **StripeWebhookEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StripeWebhookEvents
    * const stripeWebhookEvents = await prisma.stripeWebhookEvent.findMany()
    * ```
    */
  get stripeWebhookEvent(): Prisma.StripeWebhookEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StartupInfo: 'StartupInfo',
    Member: 'Member',
    CompanyInfo: 'CompanyInfo',
    StripeWebhookEvent: 'StripeWebhookEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "startupInfo" | "member" | "companyInfo" | "stripeWebhookEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StartupInfo: {
        payload: Prisma.$StartupInfoPayload<ExtArgs>
        fields: Prisma.StartupInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StartupInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StartupInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>
          }
          findFirst: {
            args: Prisma.StartupInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StartupInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>
          }
          findMany: {
            args: Prisma.StartupInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>[]
          }
          create: {
            args: Prisma.StartupInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>
          }
          createMany: {
            args: Prisma.StartupInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StartupInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>[]
          }
          delete: {
            args: Prisma.StartupInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>
          }
          update: {
            args: Prisma.StartupInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>
          }
          deleteMany: {
            args: Prisma.StartupInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StartupInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StartupInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>[]
          }
          upsert: {
            args: Prisma.StartupInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StartupInfoPayload>
          }
          aggregate: {
            args: Prisma.StartupInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStartupInfo>
          }
          groupBy: {
            args: Prisma.StartupInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<StartupInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.StartupInfoCountArgs<ExtArgs>
            result: $Utils.Optional<StartupInfoCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      CompanyInfo: {
        payload: Prisma.$CompanyInfoPayload<ExtArgs>
        fields: Prisma.CompanyInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          findFirst: {
            args: Prisma.CompanyInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          findMany: {
            args: Prisma.CompanyInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          create: {
            args: Prisma.CompanyInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          createMany: {
            args: Prisma.CompanyInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          delete: {
            args: Prisma.CompanyInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          update: {
            args: Prisma.CompanyInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          deleteMany: {
            args: Prisma.CompanyInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>[]
          }
          upsert: {
            args: Prisma.CompanyInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyInfoPayload>
          }
          aggregate: {
            args: Prisma.CompanyInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyInfo>
          }
          groupBy: {
            args: Prisma.CompanyInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyInfoCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyInfoCountAggregateOutputType> | number
          }
        }
      }
      StripeWebhookEvent: {
        payload: Prisma.$StripeWebhookEventPayload<ExtArgs>
        fields: Prisma.StripeWebhookEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StripeWebhookEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StripeWebhookEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          findFirst: {
            args: Prisma.StripeWebhookEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StripeWebhookEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          findMany: {
            args: Prisma.StripeWebhookEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>[]
          }
          create: {
            args: Prisma.StripeWebhookEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          createMany: {
            args: Prisma.StripeWebhookEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StripeWebhookEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>[]
          }
          delete: {
            args: Prisma.StripeWebhookEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          update: {
            args: Prisma.StripeWebhookEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          deleteMany: {
            args: Prisma.StripeWebhookEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StripeWebhookEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StripeWebhookEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>[]
          }
          upsert: {
            args: Prisma.StripeWebhookEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StripeWebhookEventPayload>
          }
          aggregate: {
            args: Prisma.StripeWebhookEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStripeWebhookEvent>
          }
          groupBy: {
            args: Prisma.StripeWebhookEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<StripeWebhookEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.StripeWebhookEventCountArgs<ExtArgs>
            result: $Utils.Optional<StripeWebhookEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    startupInfo?: StartupInfoOmit
    member?: MemberOmit
    companyInfo?: CompanyInfoOmit
    stripeWebhookEvent?: StripeWebhookEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StartupInfoCountOutputType
   */

  export type StartupInfoCountOutputType = {
    members: number
  }

  export type StartupInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | StartupInfoCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * StartupInfoCountOutputType without action
   */
  export type StartupInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfoCountOutputType
     */
    select?: StartupInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StartupInfoCountOutputType without action
   */
  export type StartupInfoCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    name: string | null
    description: string | null
    logo: string | null
    website: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    name: string | null
    description: string | null
    logo: string | null
    website: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    description: number
    logo: number
    website: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    description?: true
    logo?: true
    website?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    description?: true
    logo?: true
    website?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    description?: true
    logo?: true
    website?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    role: $Enums.Role
    name: string | null
    description: string | null
    logo: string | null
    website: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
    startupInfo?: boolean | User$startupInfoArgs<ExtArgs>
    companyInfo?: boolean | User$companyInfoArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
    description?: boolean
    logo?: boolean
    website?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "name" | "description" | "logo" | "website", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startupInfo?: boolean | User$startupInfoArgs<ExtArgs>
    companyInfo?: boolean | User$companyInfoArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      startupInfo: Prisma.$StartupInfoPayload<ExtArgs> | null
      companyInfo: Prisma.$CompanyInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: $Enums.Role
      name: string | null
      description: string | null
      logo: string | null
      website: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startupInfo<T extends User$startupInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$startupInfoArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    companyInfo<T extends User$companyInfoArgs<ExtArgs> = {}>(args?: Subset<T, User$companyInfoArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly name: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly logo: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.startupInfo
   */
  export type User$startupInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    where?: StartupInfoWhereInput
  }

  /**
   * User.companyInfo
   */
  export type User$companyInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    where?: CompanyInfoWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StartupInfo
   */

  export type AggregateStartupInfo = {
    _count: StartupInfoCountAggregateOutputType | null
    _avg: StartupInfoAvgAggregateOutputType | null
    _sum: StartupInfoSumAggregateOutputType | null
    _min: StartupInfoMinAggregateOutputType | null
    _max: StartupInfoMaxAggregateOutputType | null
  }

  export type StartupInfoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foundedYear: number | null
    monthlyUsersAverage: number | null
    teamSize: number | null
  }

  export type StartupInfoSumAggregateOutputType = {
    id: number | null
    userId: number | null
    foundedYear: number | null
    monthlyUsersAverage: number | null
    teamSize: number | null
  }

  export type StartupInfoMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foundedYear: number | null
    industry: $Enums.IndustryType | null
    pitchDeck: string | null
    demoVideo: string | null
    monthlyUsersAverage: number | null
    revenue: string | null
    teamSize: number | null
    visible: boolean | null
    github: string | null
    instagram: string | null
    linkedin: string | null
    facebook: string | null
    contactEmail: string | null
  }

  export type StartupInfoMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foundedYear: number | null
    industry: $Enums.IndustryType | null
    pitchDeck: string | null
    demoVideo: string | null
    monthlyUsersAverage: number | null
    revenue: string | null
    teamSize: number | null
    visible: boolean | null
    github: string | null
    instagram: string | null
    linkedin: string | null
    facebook: string | null
    contactEmail: string | null
  }

  export type StartupInfoCountAggregateOutputType = {
    id: number
    userId: number
    foundedYear: number
    industry: number
    technologies: number
    pitchDeck: number
    demoVideo: number
    monthlyUsersAverage: number
    revenue: number
    teamSize: number
    visible: number
    github: number
    instagram: number
    linkedin: number
    facebook: number
    contactEmail: number
    _all: number
  }


  export type StartupInfoAvgAggregateInputType = {
    id?: true
    userId?: true
    foundedYear?: true
    monthlyUsersAverage?: true
    teamSize?: true
  }

  export type StartupInfoSumAggregateInputType = {
    id?: true
    userId?: true
    foundedYear?: true
    monthlyUsersAverage?: true
    teamSize?: true
  }

  export type StartupInfoMinAggregateInputType = {
    id?: true
    userId?: true
    foundedYear?: true
    industry?: true
    pitchDeck?: true
    demoVideo?: true
    monthlyUsersAverage?: true
    revenue?: true
    teamSize?: true
    visible?: true
    github?: true
    instagram?: true
    linkedin?: true
    facebook?: true
    contactEmail?: true
  }

  export type StartupInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    foundedYear?: true
    industry?: true
    pitchDeck?: true
    demoVideo?: true
    monthlyUsersAverage?: true
    revenue?: true
    teamSize?: true
    visible?: true
    github?: true
    instagram?: true
    linkedin?: true
    facebook?: true
    contactEmail?: true
  }

  export type StartupInfoCountAggregateInputType = {
    id?: true
    userId?: true
    foundedYear?: true
    industry?: true
    technologies?: true
    pitchDeck?: true
    demoVideo?: true
    monthlyUsersAverage?: true
    revenue?: true
    teamSize?: true
    visible?: true
    github?: true
    instagram?: true
    linkedin?: true
    facebook?: true
    contactEmail?: true
    _all?: true
  }

  export type StartupInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StartupInfo to aggregate.
     */
    where?: StartupInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StartupInfos to fetch.
     */
    orderBy?: StartupInfoOrderByWithRelationInput | StartupInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StartupInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StartupInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StartupInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StartupInfos
    **/
    _count?: true | StartupInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StartupInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StartupInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StartupInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StartupInfoMaxAggregateInputType
  }

  export type GetStartupInfoAggregateType<T extends StartupInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateStartupInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStartupInfo[P]>
      : GetScalarType<T[P], AggregateStartupInfo[P]>
  }




  export type StartupInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StartupInfoWhereInput
    orderBy?: StartupInfoOrderByWithAggregationInput | StartupInfoOrderByWithAggregationInput[]
    by: StartupInfoScalarFieldEnum[] | StartupInfoScalarFieldEnum
    having?: StartupInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StartupInfoCountAggregateInputType | true
    _avg?: StartupInfoAvgAggregateInputType
    _sum?: StartupInfoSumAggregateInputType
    _min?: StartupInfoMinAggregateInputType
    _max?: StartupInfoMaxAggregateInputType
  }

  export type StartupInfoGroupByOutputType = {
    id: number
    userId: number
    foundedYear: number | null
    industry: $Enums.IndustryType | null
    technologies: $Enums.TechnologyType[]
    pitchDeck: string | null
    demoVideo: string | null
    monthlyUsersAverage: number | null
    revenue: string | null
    teamSize: number | null
    visible: boolean
    github: string | null
    instagram: string | null
    linkedin: string | null
    facebook: string | null
    contactEmail: string | null
    _count: StartupInfoCountAggregateOutputType | null
    _avg: StartupInfoAvgAggregateOutputType | null
    _sum: StartupInfoSumAggregateOutputType | null
    _min: StartupInfoMinAggregateOutputType | null
    _max: StartupInfoMaxAggregateOutputType | null
  }

  type GetStartupInfoGroupByPayload<T extends StartupInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StartupInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StartupInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StartupInfoGroupByOutputType[P]>
            : GetScalarType<T[P], StartupInfoGroupByOutputType[P]>
        }
      >
    >


  export type StartupInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foundedYear?: boolean
    industry?: boolean
    technologies?: boolean
    pitchDeck?: boolean
    demoVideo?: boolean
    monthlyUsersAverage?: boolean
    revenue?: boolean
    teamSize?: boolean
    visible?: boolean
    github?: boolean
    instagram?: boolean
    linkedin?: boolean
    facebook?: boolean
    contactEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | StartupInfo$membersArgs<ExtArgs>
    _count?: boolean | StartupInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startupInfo"]>

  export type StartupInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foundedYear?: boolean
    industry?: boolean
    technologies?: boolean
    pitchDeck?: boolean
    demoVideo?: boolean
    monthlyUsersAverage?: boolean
    revenue?: boolean
    teamSize?: boolean
    visible?: boolean
    github?: boolean
    instagram?: boolean
    linkedin?: boolean
    facebook?: boolean
    contactEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startupInfo"]>

  export type StartupInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foundedYear?: boolean
    industry?: boolean
    technologies?: boolean
    pitchDeck?: boolean
    demoVideo?: boolean
    monthlyUsersAverage?: boolean
    revenue?: boolean
    teamSize?: boolean
    visible?: boolean
    github?: boolean
    instagram?: boolean
    linkedin?: boolean
    facebook?: boolean
    contactEmail?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["startupInfo"]>

  export type StartupInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    foundedYear?: boolean
    industry?: boolean
    technologies?: boolean
    pitchDeck?: boolean
    demoVideo?: boolean
    monthlyUsersAverage?: boolean
    revenue?: boolean
    teamSize?: boolean
    visible?: boolean
    github?: boolean
    instagram?: boolean
    linkedin?: boolean
    facebook?: boolean
    contactEmail?: boolean
  }

  export type StartupInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foundedYear" | "industry" | "technologies" | "pitchDeck" | "demoVideo" | "monthlyUsersAverage" | "revenue" | "teamSize" | "visible" | "github" | "instagram" | "linkedin" | "facebook" | "contactEmail", ExtArgs["result"]["startupInfo"]>
  export type StartupInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | StartupInfo$membersArgs<ExtArgs>
    _count?: boolean | StartupInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StartupInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StartupInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StartupInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StartupInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      foundedYear: number | null
      industry: $Enums.IndustryType | null
      technologies: $Enums.TechnologyType[]
      pitchDeck: string | null
      demoVideo: string | null
      monthlyUsersAverage: number | null
      revenue: string | null
      teamSize: number | null
      visible: boolean
      github: string | null
      instagram: string | null
      linkedin: string | null
      facebook: string | null
      contactEmail: string | null
    }, ExtArgs["result"]["startupInfo"]>
    composites: {}
  }

  type StartupInfoGetPayload<S extends boolean | null | undefined | StartupInfoDefaultArgs> = $Result.GetResult<Prisma.$StartupInfoPayload, S>

  type StartupInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StartupInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StartupInfoCountAggregateInputType | true
    }

  export interface StartupInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StartupInfo'], meta: { name: 'StartupInfo' } }
    /**
     * Find zero or one StartupInfo that matches the filter.
     * @param {StartupInfoFindUniqueArgs} args - Arguments to find a StartupInfo
     * @example
     * // Get one StartupInfo
     * const startupInfo = await prisma.startupInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StartupInfoFindUniqueArgs>(args: SelectSubset<T, StartupInfoFindUniqueArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StartupInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StartupInfoFindUniqueOrThrowArgs} args - Arguments to find a StartupInfo
     * @example
     * // Get one StartupInfo
     * const startupInfo = await prisma.startupInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StartupInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, StartupInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StartupInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoFindFirstArgs} args - Arguments to find a StartupInfo
     * @example
     * // Get one StartupInfo
     * const startupInfo = await prisma.startupInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StartupInfoFindFirstArgs>(args?: SelectSubset<T, StartupInfoFindFirstArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StartupInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoFindFirstOrThrowArgs} args - Arguments to find a StartupInfo
     * @example
     * // Get one StartupInfo
     * const startupInfo = await prisma.startupInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StartupInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, StartupInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StartupInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StartupInfos
     * const startupInfos = await prisma.startupInfo.findMany()
     * 
     * // Get first 10 StartupInfos
     * const startupInfos = await prisma.startupInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const startupInfoWithIdOnly = await prisma.startupInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StartupInfoFindManyArgs>(args?: SelectSubset<T, StartupInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StartupInfo.
     * @param {StartupInfoCreateArgs} args - Arguments to create a StartupInfo.
     * @example
     * // Create one StartupInfo
     * const StartupInfo = await prisma.startupInfo.create({
     *   data: {
     *     // ... data to create a StartupInfo
     *   }
     * })
     * 
     */
    create<T extends StartupInfoCreateArgs>(args: SelectSubset<T, StartupInfoCreateArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StartupInfos.
     * @param {StartupInfoCreateManyArgs} args - Arguments to create many StartupInfos.
     * @example
     * // Create many StartupInfos
     * const startupInfo = await prisma.startupInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StartupInfoCreateManyArgs>(args?: SelectSubset<T, StartupInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StartupInfos and returns the data saved in the database.
     * @param {StartupInfoCreateManyAndReturnArgs} args - Arguments to create many StartupInfos.
     * @example
     * // Create many StartupInfos
     * const startupInfo = await prisma.startupInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StartupInfos and only return the `id`
     * const startupInfoWithIdOnly = await prisma.startupInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StartupInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, StartupInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StartupInfo.
     * @param {StartupInfoDeleteArgs} args - Arguments to delete one StartupInfo.
     * @example
     * // Delete one StartupInfo
     * const StartupInfo = await prisma.startupInfo.delete({
     *   where: {
     *     // ... filter to delete one StartupInfo
     *   }
     * })
     * 
     */
    delete<T extends StartupInfoDeleteArgs>(args: SelectSubset<T, StartupInfoDeleteArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StartupInfo.
     * @param {StartupInfoUpdateArgs} args - Arguments to update one StartupInfo.
     * @example
     * // Update one StartupInfo
     * const startupInfo = await prisma.startupInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StartupInfoUpdateArgs>(args: SelectSubset<T, StartupInfoUpdateArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StartupInfos.
     * @param {StartupInfoDeleteManyArgs} args - Arguments to filter StartupInfos to delete.
     * @example
     * // Delete a few StartupInfos
     * const { count } = await prisma.startupInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StartupInfoDeleteManyArgs>(args?: SelectSubset<T, StartupInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StartupInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StartupInfos
     * const startupInfo = await prisma.startupInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StartupInfoUpdateManyArgs>(args: SelectSubset<T, StartupInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StartupInfos and returns the data updated in the database.
     * @param {StartupInfoUpdateManyAndReturnArgs} args - Arguments to update many StartupInfos.
     * @example
     * // Update many StartupInfos
     * const startupInfo = await prisma.startupInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StartupInfos and only return the `id`
     * const startupInfoWithIdOnly = await prisma.startupInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StartupInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, StartupInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StartupInfo.
     * @param {StartupInfoUpsertArgs} args - Arguments to update or create a StartupInfo.
     * @example
     * // Update or create a StartupInfo
     * const startupInfo = await prisma.startupInfo.upsert({
     *   create: {
     *     // ... data to create a StartupInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StartupInfo we want to update
     *   }
     * })
     */
    upsert<T extends StartupInfoUpsertArgs>(args: SelectSubset<T, StartupInfoUpsertArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StartupInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoCountArgs} args - Arguments to filter StartupInfos to count.
     * @example
     * // Count the number of StartupInfos
     * const count = await prisma.startupInfo.count({
     *   where: {
     *     // ... the filter for the StartupInfos we want to count
     *   }
     * })
    **/
    count<T extends StartupInfoCountArgs>(
      args?: Subset<T, StartupInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StartupInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StartupInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StartupInfoAggregateArgs>(args: Subset<T, StartupInfoAggregateArgs>): Prisma.PrismaPromise<GetStartupInfoAggregateType<T>>

    /**
     * Group by StartupInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StartupInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StartupInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StartupInfoGroupByArgs['orderBy'] }
        : { orderBy?: StartupInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StartupInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartupInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StartupInfo model
   */
  readonly fields: StartupInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StartupInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StartupInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends StartupInfo$membersArgs<ExtArgs> = {}>(args?: Subset<T, StartupInfo$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StartupInfo model
   */
  interface StartupInfoFieldRefs {
    readonly id: FieldRef<"StartupInfo", 'Int'>
    readonly userId: FieldRef<"StartupInfo", 'Int'>
    readonly foundedYear: FieldRef<"StartupInfo", 'Int'>
    readonly industry: FieldRef<"StartupInfo", 'IndustryType'>
    readonly technologies: FieldRef<"StartupInfo", 'TechnologyType[]'>
    readonly pitchDeck: FieldRef<"StartupInfo", 'String'>
    readonly demoVideo: FieldRef<"StartupInfo", 'String'>
    readonly monthlyUsersAverage: FieldRef<"StartupInfo", 'Int'>
    readonly revenue: FieldRef<"StartupInfo", 'String'>
    readonly teamSize: FieldRef<"StartupInfo", 'Int'>
    readonly visible: FieldRef<"StartupInfo", 'Boolean'>
    readonly github: FieldRef<"StartupInfo", 'String'>
    readonly instagram: FieldRef<"StartupInfo", 'String'>
    readonly linkedin: FieldRef<"StartupInfo", 'String'>
    readonly facebook: FieldRef<"StartupInfo", 'String'>
    readonly contactEmail: FieldRef<"StartupInfo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StartupInfo findUnique
   */
  export type StartupInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * Filter, which StartupInfo to fetch.
     */
    where: StartupInfoWhereUniqueInput
  }

  /**
   * StartupInfo findUniqueOrThrow
   */
  export type StartupInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * Filter, which StartupInfo to fetch.
     */
    where: StartupInfoWhereUniqueInput
  }

  /**
   * StartupInfo findFirst
   */
  export type StartupInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * Filter, which StartupInfo to fetch.
     */
    where?: StartupInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StartupInfos to fetch.
     */
    orderBy?: StartupInfoOrderByWithRelationInput | StartupInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StartupInfos.
     */
    cursor?: StartupInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StartupInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StartupInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StartupInfos.
     */
    distinct?: StartupInfoScalarFieldEnum | StartupInfoScalarFieldEnum[]
  }

  /**
   * StartupInfo findFirstOrThrow
   */
  export type StartupInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * Filter, which StartupInfo to fetch.
     */
    where?: StartupInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StartupInfos to fetch.
     */
    orderBy?: StartupInfoOrderByWithRelationInput | StartupInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StartupInfos.
     */
    cursor?: StartupInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StartupInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StartupInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StartupInfos.
     */
    distinct?: StartupInfoScalarFieldEnum | StartupInfoScalarFieldEnum[]
  }

  /**
   * StartupInfo findMany
   */
  export type StartupInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * Filter, which StartupInfos to fetch.
     */
    where?: StartupInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StartupInfos to fetch.
     */
    orderBy?: StartupInfoOrderByWithRelationInput | StartupInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StartupInfos.
     */
    cursor?: StartupInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StartupInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StartupInfos.
     */
    skip?: number
    distinct?: StartupInfoScalarFieldEnum | StartupInfoScalarFieldEnum[]
  }

  /**
   * StartupInfo create
   */
  export type StartupInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a StartupInfo.
     */
    data: XOR<StartupInfoCreateInput, StartupInfoUncheckedCreateInput>
  }

  /**
   * StartupInfo createMany
   */
  export type StartupInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StartupInfos.
     */
    data: StartupInfoCreateManyInput | StartupInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StartupInfo createManyAndReturn
   */
  export type StartupInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * The data used to create many StartupInfos.
     */
    data: StartupInfoCreateManyInput | StartupInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StartupInfo update
   */
  export type StartupInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a StartupInfo.
     */
    data: XOR<StartupInfoUpdateInput, StartupInfoUncheckedUpdateInput>
    /**
     * Choose, which StartupInfo to update.
     */
    where: StartupInfoWhereUniqueInput
  }

  /**
   * StartupInfo updateMany
   */
  export type StartupInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StartupInfos.
     */
    data: XOR<StartupInfoUpdateManyMutationInput, StartupInfoUncheckedUpdateManyInput>
    /**
     * Filter which StartupInfos to update
     */
    where?: StartupInfoWhereInput
    /**
     * Limit how many StartupInfos to update.
     */
    limit?: number
  }

  /**
   * StartupInfo updateManyAndReturn
   */
  export type StartupInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * The data used to update StartupInfos.
     */
    data: XOR<StartupInfoUpdateManyMutationInput, StartupInfoUncheckedUpdateManyInput>
    /**
     * Filter which StartupInfos to update
     */
    where?: StartupInfoWhereInput
    /**
     * Limit how many StartupInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StartupInfo upsert
   */
  export type StartupInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the StartupInfo to update in case it exists.
     */
    where: StartupInfoWhereUniqueInput
    /**
     * In case the StartupInfo found by the `where` argument doesn't exist, create a new StartupInfo with this data.
     */
    create: XOR<StartupInfoCreateInput, StartupInfoUncheckedCreateInput>
    /**
     * In case the StartupInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StartupInfoUpdateInput, StartupInfoUncheckedUpdateInput>
  }

  /**
   * StartupInfo delete
   */
  export type StartupInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
    /**
     * Filter which StartupInfo to delete.
     */
    where: StartupInfoWhereUniqueInput
  }

  /**
   * StartupInfo deleteMany
   */
  export type StartupInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StartupInfos to delete
     */
    where?: StartupInfoWhereInput
    /**
     * Limit how many StartupInfos to delete.
     */
    limit?: number
  }

  /**
   * StartupInfo.members
   */
  export type StartupInfo$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * StartupInfo without action
   */
  export type StartupInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StartupInfo
     */
    select?: StartupInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StartupInfo
     */
    omit?: StartupInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StartupInfoInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
    startupInfoId: number | null
    age: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
    startupInfoId: number | null
    age: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    startupInfoId: number | null
    name: string | null
    age: number | null
    position: string | null
    profileImage: string | null
    university: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    startupInfoId: number | null
    name: string | null
    age: number | null
    position: string | null
    profileImage: string | null
    university: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    startupInfoId: number
    name: number
    age: number
    position: number
    profileImage: number
    university: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
    startupInfoId?: true
    age?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
    startupInfoId?: true
    age?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    startupInfoId?: true
    name?: true
    age?: true
    position?: true
    profileImage?: true
    university?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    startupInfoId?: true
    name?: true
    age?: true
    position?: true
    profileImage?: true
    university?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    startupInfoId?: true
    name?: true
    age?: true
    position?: true
    profileImage?: true
    university?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    startupInfoId: number
    name: string
    age: number
    position: string
    profileImage: string | null
    university: string
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupInfoId?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    profileImage?: boolean
    university?: boolean
    startupInfo?: boolean | StartupInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupInfoId?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    profileImage?: boolean
    university?: boolean
    startupInfo?: boolean | StartupInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startupInfoId?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    profileImage?: boolean
    university?: boolean
    startupInfo?: boolean | StartupInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    startupInfoId?: boolean
    name?: boolean
    age?: boolean
    position?: boolean
    profileImage?: boolean
    university?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startupInfoId" | "name" | "age" | "position" | "profileImage" | "university", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startupInfo?: boolean | StartupInfoDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startupInfo?: boolean | StartupInfoDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    startupInfo?: boolean | StartupInfoDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      startupInfo: Prisma.$StartupInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startupInfoId: number
      name: string
      age: number
      position: string
      profileImage: string | null
      university: string
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    startupInfo<T extends StartupInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StartupInfoDefaultArgs<ExtArgs>>): Prisma__StartupInfoClient<$Result.GetResult<Prisma.$StartupInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly startupInfoId: FieldRef<"Member", 'Int'>
    readonly name: FieldRef<"Member", 'String'>
    readonly age: FieldRef<"Member", 'Int'>
    readonly position: FieldRef<"Member", 'String'>
    readonly profileImage: FieldRef<"Member", 'String'>
    readonly university: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model CompanyInfo
   */

  export type AggregateCompanyInfo = {
    _count: CompanyInfoCountAggregateOutputType | null
    _avg: CompanyInfoAvgAggregateOutputType | null
    _sum: CompanyInfoSumAggregateOutputType | null
    _min: CompanyInfoMinAggregateOutputType | null
    _max: CompanyInfoMaxAggregateOutputType | null
  }

  export type CompanyInfoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    size: number | null
    searchesUsed: number | null
    searchesRemaining: number | null
  }

  export type CompanyInfoSumAggregateOutputType = {
    id: number | null
    userId: number | null
    size: number | null
    searchesUsed: number | null
    searchesRemaining: number | null
  }

  export type CompanyInfoMinAggregateOutputType = {
    id: number | null
    userId: number | null
    industry: $Enums.IndustryType | null
    size: number | null
    companyType: $Enums.CompanyType | null
    plan: $Enums.Plan | null
    planStatus: $Enums.PlanStatus | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    searchesUsed: number | null
    searchesRemaining: number | null
    lastSearchReset: Date | null
    planCancelledAt: Date | null
    planExpiresAt: Date | null
  }

  export type CompanyInfoMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    industry: $Enums.IndustryType | null
    size: number | null
    companyType: $Enums.CompanyType | null
    plan: $Enums.Plan | null
    planStatus: $Enums.PlanStatus | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    searchesUsed: number | null
    searchesRemaining: number | null
    lastSearchReset: Date | null
    planCancelledAt: Date | null
    planExpiresAt: Date | null
  }

  export type CompanyInfoCountAggregateOutputType = {
    id: number
    userId: number
    industry: number
    size: number
    companyType: number
    plan: number
    planStatus: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    searchesUsed: number
    searchesRemaining: number
    lastSearchReset: number
    planCancelledAt: number
    planExpiresAt: number
    _all: number
  }


  export type CompanyInfoAvgAggregateInputType = {
    id?: true
    userId?: true
    size?: true
    searchesUsed?: true
    searchesRemaining?: true
  }

  export type CompanyInfoSumAggregateInputType = {
    id?: true
    userId?: true
    size?: true
    searchesUsed?: true
    searchesRemaining?: true
  }

  export type CompanyInfoMinAggregateInputType = {
    id?: true
    userId?: true
    industry?: true
    size?: true
    companyType?: true
    plan?: true
    planStatus?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    searchesUsed?: true
    searchesRemaining?: true
    lastSearchReset?: true
    planCancelledAt?: true
    planExpiresAt?: true
  }

  export type CompanyInfoMaxAggregateInputType = {
    id?: true
    userId?: true
    industry?: true
    size?: true
    companyType?: true
    plan?: true
    planStatus?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    searchesUsed?: true
    searchesRemaining?: true
    lastSearchReset?: true
    planCancelledAt?: true
    planExpiresAt?: true
  }

  export type CompanyInfoCountAggregateInputType = {
    id?: true
    userId?: true
    industry?: true
    size?: true
    companyType?: true
    plan?: true
    planStatus?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    searchesUsed?: true
    searchesRemaining?: true
    lastSearchReset?: true
    planCancelledAt?: true
    planExpiresAt?: true
    _all?: true
  }

  export type CompanyInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyInfo to aggregate.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyInfos
    **/
    _count?: true | CompanyInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyInfoMaxAggregateInputType
  }

  export type GetCompanyInfoAggregateType<T extends CompanyInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyInfo[P]>
      : GetScalarType<T[P], AggregateCompanyInfo[P]>
  }




  export type CompanyInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyInfoWhereInput
    orderBy?: CompanyInfoOrderByWithAggregationInput | CompanyInfoOrderByWithAggregationInput[]
    by: CompanyInfoScalarFieldEnum[] | CompanyInfoScalarFieldEnum
    having?: CompanyInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyInfoCountAggregateInputType | true
    _avg?: CompanyInfoAvgAggregateInputType
    _sum?: CompanyInfoSumAggregateInputType
    _min?: CompanyInfoMinAggregateInputType
    _max?: CompanyInfoMaxAggregateInputType
  }

  export type CompanyInfoGroupByOutputType = {
    id: number
    userId: number
    industry: $Enums.IndustryType | null
    size: number | null
    companyType: $Enums.CompanyType | null
    plan: $Enums.Plan
    planStatus: $Enums.PlanStatus
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    searchesUsed: number
    searchesRemaining: number
    lastSearchReset: Date
    planCancelledAt: Date | null
    planExpiresAt: Date | null
    _count: CompanyInfoCountAggregateOutputType | null
    _avg: CompanyInfoAvgAggregateOutputType | null
    _sum: CompanyInfoSumAggregateOutputType | null
    _min: CompanyInfoMinAggregateOutputType | null
    _max: CompanyInfoMaxAggregateOutputType | null
  }

  type GetCompanyInfoGroupByPayload<T extends CompanyInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyInfoGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyInfoGroupByOutputType[P]>
        }
      >
    >


  export type CompanyInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    industry?: boolean
    size?: boolean
    companyType?: boolean
    plan?: boolean
    planStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    searchesUsed?: boolean
    searchesRemaining?: boolean
    lastSearchReset?: boolean
    planCancelledAt?: boolean
    planExpiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyInfo"]>

  export type CompanyInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    industry?: boolean
    size?: boolean
    companyType?: boolean
    plan?: boolean
    planStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    searchesUsed?: boolean
    searchesRemaining?: boolean
    lastSearchReset?: boolean
    planCancelledAt?: boolean
    planExpiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyInfo"]>

  export type CompanyInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    industry?: boolean
    size?: boolean
    companyType?: boolean
    plan?: boolean
    planStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    searchesUsed?: boolean
    searchesRemaining?: boolean
    lastSearchReset?: boolean
    planCancelledAt?: boolean
    planExpiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyInfo"]>

  export type CompanyInfoSelectScalar = {
    id?: boolean
    userId?: boolean
    industry?: boolean
    size?: boolean
    companyType?: boolean
    plan?: boolean
    planStatus?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    searchesUsed?: boolean
    searchesRemaining?: boolean
    lastSearchReset?: boolean
    planCancelledAt?: boolean
    planExpiresAt?: boolean
  }

  export type CompanyInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "industry" | "size" | "companyType" | "plan" | "planStatus" | "stripeCustomerId" | "stripeSubscriptionId" | "searchesUsed" | "searchesRemaining" | "lastSearchReset" | "planCancelledAt" | "planExpiresAt", ExtArgs["result"]["companyInfo"]>
  export type CompanyInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyInfo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      industry: $Enums.IndustryType | null
      size: number | null
      companyType: $Enums.CompanyType | null
      plan: $Enums.Plan
      planStatus: $Enums.PlanStatus
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
      searchesUsed: number
      searchesRemaining: number
      lastSearchReset: Date
      planCancelledAt: Date | null
      planExpiresAt: Date | null
    }, ExtArgs["result"]["companyInfo"]>
    composites: {}
  }

  type CompanyInfoGetPayload<S extends boolean | null | undefined | CompanyInfoDefaultArgs> = $Result.GetResult<Prisma.$CompanyInfoPayload, S>

  type CompanyInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyInfoCountAggregateInputType | true
    }

  export interface CompanyInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyInfo'], meta: { name: 'CompanyInfo' } }
    /**
     * Find zero or one CompanyInfo that matches the filter.
     * @param {CompanyInfoFindUniqueArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyInfoFindUniqueArgs>(args: SelectSubset<T, CompanyInfoFindUniqueArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyInfoFindUniqueOrThrowArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindFirstArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyInfoFindFirstArgs>(args?: SelectSubset<T, CompanyInfoFindFirstArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindFirstOrThrowArgs} args - Arguments to find a CompanyInfo
     * @example
     * // Get one CompanyInfo
     * const companyInfo = await prisma.companyInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyInfos
     * const companyInfos = await prisma.companyInfo.findMany()
     * 
     * // Get first 10 CompanyInfos
     * const companyInfos = await prisma.companyInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyInfoFindManyArgs>(args?: SelectSubset<T, CompanyInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyInfo.
     * @param {CompanyInfoCreateArgs} args - Arguments to create a CompanyInfo.
     * @example
     * // Create one CompanyInfo
     * const CompanyInfo = await prisma.companyInfo.create({
     *   data: {
     *     // ... data to create a CompanyInfo
     *   }
     * })
     * 
     */
    create<T extends CompanyInfoCreateArgs>(args: SelectSubset<T, CompanyInfoCreateArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyInfos.
     * @param {CompanyInfoCreateManyArgs} args - Arguments to create many CompanyInfos.
     * @example
     * // Create many CompanyInfos
     * const companyInfo = await prisma.companyInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyInfoCreateManyArgs>(args?: SelectSubset<T, CompanyInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyInfos and returns the data saved in the database.
     * @param {CompanyInfoCreateManyAndReturnArgs} args - Arguments to create many CompanyInfos.
     * @example
     * // Create many CompanyInfos
     * const companyInfo = await prisma.companyInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyInfos and only return the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyInfo.
     * @param {CompanyInfoDeleteArgs} args - Arguments to delete one CompanyInfo.
     * @example
     * // Delete one CompanyInfo
     * const CompanyInfo = await prisma.companyInfo.delete({
     *   where: {
     *     // ... filter to delete one CompanyInfo
     *   }
     * })
     * 
     */
    delete<T extends CompanyInfoDeleteArgs>(args: SelectSubset<T, CompanyInfoDeleteArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyInfo.
     * @param {CompanyInfoUpdateArgs} args - Arguments to update one CompanyInfo.
     * @example
     * // Update one CompanyInfo
     * const companyInfo = await prisma.companyInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyInfoUpdateArgs>(args: SelectSubset<T, CompanyInfoUpdateArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyInfos.
     * @param {CompanyInfoDeleteManyArgs} args - Arguments to filter CompanyInfos to delete.
     * @example
     * // Delete a few CompanyInfos
     * const { count } = await prisma.companyInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyInfoDeleteManyArgs>(args?: SelectSubset<T, CompanyInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyInfos
     * const companyInfo = await prisma.companyInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyInfoUpdateManyArgs>(args: SelectSubset<T, CompanyInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyInfos and returns the data updated in the database.
     * @param {CompanyInfoUpdateManyAndReturnArgs} args - Arguments to update many CompanyInfos.
     * @example
     * // Update many CompanyInfos
     * const companyInfo = await prisma.companyInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyInfos and only return the `id`
     * const companyInfoWithIdOnly = await prisma.companyInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyInfo.
     * @param {CompanyInfoUpsertArgs} args - Arguments to update or create a CompanyInfo.
     * @example
     * // Update or create a CompanyInfo
     * const companyInfo = await prisma.companyInfo.upsert({
     *   create: {
     *     // ... data to create a CompanyInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyInfo we want to update
     *   }
     * })
     */
    upsert<T extends CompanyInfoUpsertArgs>(args: SelectSubset<T, CompanyInfoUpsertArgs<ExtArgs>>): Prisma__CompanyInfoClient<$Result.GetResult<Prisma.$CompanyInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoCountArgs} args - Arguments to filter CompanyInfos to count.
     * @example
     * // Count the number of CompanyInfos
     * const count = await prisma.companyInfo.count({
     *   where: {
     *     // ... the filter for the CompanyInfos we want to count
     *   }
     * })
    **/
    count<T extends CompanyInfoCountArgs>(
      args?: Subset<T, CompanyInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyInfoAggregateArgs>(args: Subset<T, CompanyInfoAggregateArgs>): Prisma.PrismaPromise<GetCompanyInfoAggregateType<T>>

    /**
     * Group by CompanyInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyInfoGroupByArgs['orderBy'] }
        : { orderBy?: CompanyInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyInfo model
   */
  readonly fields: CompanyInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyInfo model
   */
  interface CompanyInfoFieldRefs {
    readonly id: FieldRef<"CompanyInfo", 'Int'>
    readonly userId: FieldRef<"CompanyInfo", 'Int'>
    readonly industry: FieldRef<"CompanyInfo", 'IndustryType'>
    readonly size: FieldRef<"CompanyInfo", 'Int'>
    readonly companyType: FieldRef<"CompanyInfo", 'CompanyType'>
    readonly plan: FieldRef<"CompanyInfo", 'Plan'>
    readonly planStatus: FieldRef<"CompanyInfo", 'PlanStatus'>
    readonly stripeCustomerId: FieldRef<"CompanyInfo", 'String'>
    readonly stripeSubscriptionId: FieldRef<"CompanyInfo", 'String'>
    readonly searchesUsed: FieldRef<"CompanyInfo", 'Int'>
    readonly searchesRemaining: FieldRef<"CompanyInfo", 'Int'>
    readonly lastSearchReset: FieldRef<"CompanyInfo", 'DateTime'>
    readonly planCancelledAt: FieldRef<"CompanyInfo", 'DateTime'>
    readonly planExpiresAt: FieldRef<"CompanyInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyInfo findUnique
   */
  export type CompanyInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo findUniqueOrThrow
   */
  export type CompanyInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo findFirst
   */
  export type CompanyInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyInfos.
     */
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo findFirstOrThrow
   */
  export type CompanyInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * Filter, which CompanyInfo to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyInfos.
     */
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo findMany
   */
  export type CompanyInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * Filter, which CompanyInfos to fetch.
     */
    where?: CompanyInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyInfos to fetch.
     */
    orderBy?: CompanyInfoOrderByWithRelationInput | CompanyInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyInfos.
     */
    cursor?: CompanyInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyInfos.
     */
    skip?: number
    distinct?: CompanyInfoScalarFieldEnum | CompanyInfoScalarFieldEnum[]
  }

  /**
   * CompanyInfo create
   */
  export type CompanyInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyInfo.
     */
    data: XOR<CompanyInfoCreateInput, CompanyInfoUncheckedCreateInput>
  }

  /**
   * CompanyInfo createMany
   */
  export type CompanyInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyInfos.
     */
    data: CompanyInfoCreateManyInput | CompanyInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyInfo createManyAndReturn
   */
  export type CompanyInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyInfos.
     */
    data: CompanyInfoCreateManyInput | CompanyInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyInfo update
   */
  export type CompanyInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyInfo.
     */
    data: XOR<CompanyInfoUpdateInput, CompanyInfoUncheckedUpdateInput>
    /**
     * Choose, which CompanyInfo to update.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo updateMany
   */
  export type CompanyInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyInfos.
     */
    data: XOR<CompanyInfoUpdateManyMutationInput, CompanyInfoUncheckedUpdateManyInput>
    /**
     * Filter which CompanyInfos to update
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to update.
     */
    limit?: number
  }

  /**
   * CompanyInfo updateManyAndReturn
   */
  export type CompanyInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * The data used to update CompanyInfos.
     */
    data: XOR<CompanyInfoUpdateManyMutationInput, CompanyInfoUncheckedUpdateManyInput>
    /**
     * Filter which CompanyInfos to update
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyInfo upsert
   */
  export type CompanyInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyInfo to update in case it exists.
     */
    where: CompanyInfoWhereUniqueInput
    /**
     * In case the CompanyInfo found by the `where` argument doesn't exist, create a new CompanyInfo with this data.
     */
    create: XOR<CompanyInfoCreateInput, CompanyInfoUncheckedCreateInput>
    /**
     * In case the CompanyInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyInfoUpdateInput, CompanyInfoUncheckedUpdateInput>
  }

  /**
   * CompanyInfo delete
   */
  export type CompanyInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
    /**
     * Filter which CompanyInfo to delete.
     */
    where: CompanyInfoWhereUniqueInput
  }

  /**
   * CompanyInfo deleteMany
   */
  export type CompanyInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyInfos to delete
     */
    where?: CompanyInfoWhereInput
    /**
     * Limit how many CompanyInfos to delete.
     */
    limit?: number
  }

  /**
   * CompanyInfo without action
   */
  export type CompanyInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyInfo
     */
    select?: CompanyInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyInfo
     */
    omit?: CompanyInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInfoInclude<ExtArgs> | null
  }


  /**
   * Model StripeWebhookEvent
   */

  export type AggregateStripeWebhookEvent = {
    _count: StripeWebhookEventCountAggregateOutputType | null
    _min: StripeWebhookEventMinAggregateOutputType | null
    _max: StripeWebhookEventMaxAggregateOutputType | null
  }

  export type StripeWebhookEventMinAggregateOutputType = {
    id: string | null
    type: string | null
    processedAt: Date | null
  }

  export type StripeWebhookEventMaxAggregateOutputType = {
    id: string | null
    type: string | null
    processedAt: Date | null
  }

  export type StripeWebhookEventCountAggregateOutputType = {
    id: number
    type: number
    processedAt: number
    _all: number
  }


  export type StripeWebhookEventMinAggregateInputType = {
    id?: true
    type?: true
    processedAt?: true
  }

  export type StripeWebhookEventMaxAggregateInputType = {
    id?: true
    type?: true
    processedAt?: true
  }

  export type StripeWebhookEventCountAggregateInputType = {
    id?: true
    type?: true
    processedAt?: true
    _all?: true
  }

  export type StripeWebhookEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeWebhookEvent to aggregate.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StripeWebhookEvents
    **/
    _count?: true | StripeWebhookEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StripeWebhookEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StripeWebhookEventMaxAggregateInputType
  }

  export type GetStripeWebhookEventAggregateType<T extends StripeWebhookEventAggregateArgs> = {
        [P in keyof T & keyof AggregateStripeWebhookEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStripeWebhookEvent[P]>
      : GetScalarType<T[P], AggregateStripeWebhookEvent[P]>
  }




  export type StripeWebhookEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StripeWebhookEventWhereInput
    orderBy?: StripeWebhookEventOrderByWithAggregationInput | StripeWebhookEventOrderByWithAggregationInput[]
    by: StripeWebhookEventScalarFieldEnum[] | StripeWebhookEventScalarFieldEnum
    having?: StripeWebhookEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StripeWebhookEventCountAggregateInputType | true
    _min?: StripeWebhookEventMinAggregateInputType
    _max?: StripeWebhookEventMaxAggregateInputType
  }

  export type StripeWebhookEventGroupByOutputType = {
    id: string
    type: string
    processedAt: Date
    _count: StripeWebhookEventCountAggregateOutputType | null
    _min: StripeWebhookEventMinAggregateOutputType | null
    _max: StripeWebhookEventMaxAggregateOutputType | null
  }

  type GetStripeWebhookEventGroupByPayload<T extends StripeWebhookEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StripeWebhookEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StripeWebhookEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StripeWebhookEventGroupByOutputType[P]>
            : GetScalarType<T[P], StripeWebhookEventGroupByOutputType[P]>
        }
      >
    >


  export type StripeWebhookEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["stripeWebhookEvent"]>

  export type StripeWebhookEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["stripeWebhookEvent"]>

  export type StripeWebhookEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    processedAt?: boolean
  }, ExtArgs["result"]["stripeWebhookEvent"]>

  export type StripeWebhookEventSelectScalar = {
    id?: boolean
    type?: boolean
    processedAt?: boolean
  }

  export type StripeWebhookEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "processedAt", ExtArgs["result"]["stripeWebhookEvent"]>

  export type $StripeWebhookEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StripeWebhookEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      processedAt: Date
    }, ExtArgs["result"]["stripeWebhookEvent"]>
    composites: {}
  }

  type StripeWebhookEventGetPayload<S extends boolean | null | undefined | StripeWebhookEventDefaultArgs> = $Result.GetResult<Prisma.$StripeWebhookEventPayload, S>

  type StripeWebhookEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StripeWebhookEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StripeWebhookEventCountAggregateInputType | true
    }

  export interface StripeWebhookEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StripeWebhookEvent'], meta: { name: 'StripeWebhookEvent' } }
    /**
     * Find zero or one StripeWebhookEvent that matches the filter.
     * @param {StripeWebhookEventFindUniqueArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StripeWebhookEventFindUniqueArgs>(args: SelectSubset<T, StripeWebhookEventFindUniqueArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StripeWebhookEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StripeWebhookEventFindUniqueOrThrowArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StripeWebhookEventFindUniqueOrThrowArgs>(args: SelectSubset<T, StripeWebhookEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeWebhookEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventFindFirstArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StripeWebhookEventFindFirstArgs>(args?: SelectSubset<T, StripeWebhookEventFindFirstArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StripeWebhookEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventFindFirstOrThrowArgs} args - Arguments to find a StripeWebhookEvent
     * @example
     * // Get one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StripeWebhookEventFindFirstOrThrowArgs>(args?: SelectSubset<T, StripeWebhookEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StripeWebhookEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StripeWebhookEvents
     * const stripeWebhookEvents = await prisma.stripeWebhookEvent.findMany()
     * 
     * // Get first 10 StripeWebhookEvents
     * const stripeWebhookEvents = await prisma.stripeWebhookEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stripeWebhookEventWithIdOnly = await prisma.stripeWebhookEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StripeWebhookEventFindManyArgs>(args?: SelectSubset<T, StripeWebhookEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StripeWebhookEvent.
     * @param {StripeWebhookEventCreateArgs} args - Arguments to create a StripeWebhookEvent.
     * @example
     * // Create one StripeWebhookEvent
     * const StripeWebhookEvent = await prisma.stripeWebhookEvent.create({
     *   data: {
     *     // ... data to create a StripeWebhookEvent
     *   }
     * })
     * 
     */
    create<T extends StripeWebhookEventCreateArgs>(args: SelectSubset<T, StripeWebhookEventCreateArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StripeWebhookEvents.
     * @param {StripeWebhookEventCreateManyArgs} args - Arguments to create many StripeWebhookEvents.
     * @example
     * // Create many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StripeWebhookEventCreateManyArgs>(args?: SelectSubset<T, StripeWebhookEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StripeWebhookEvents and returns the data saved in the database.
     * @param {StripeWebhookEventCreateManyAndReturnArgs} args - Arguments to create many StripeWebhookEvents.
     * @example
     * // Create many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StripeWebhookEvents and only return the `id`
     * const stripeWebhookEventWithIdOnly = await prisma.stripeWebhookEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StripeWebhookEventCreateManyAndReturnArgs>(args?: SelectSubset<T, StripeWebhookEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StripeWebhookEvent.
     * @param {StripeWebhookEventDeleteArgs} args - Arguments to delete one StripeWebhookEvent.
     * @example
     * // Delete one StripeWebhookEvent
     * const StripeWebhookEvent = await prisma.stripeWebhookEvent.delete({
     *   where: {
     *     // ... filter to delete one StripeWebhookEvent
     *   }
     * })
     * 
     */
    delete<T extends StripeWebhookEventDeleteArgs>(args: SelectSubset<T, StripeWebhookEventDeleteArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StripeWebhookEvent.
     * @param {StripeWebhookEventUpdateArgs} args - Arguments to update one StripeWebhookEvent.
     * @example
     * // Update one StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StripeWebhookEventUpdateArgs>(args: SelectSubset<T, StripeWebhookEventUpdateArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StripeWebhookEvents.
     * @param {StripeWebhookEventDeleteManyArgs} args - Arguments to filter StripeWebhookEvents to delete.
     * @example
     * // Delete a few StripeWebhookEvents
     * const { count } = await prisma.stripeWebhookEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StripeWebhookEventDeleteManyArgs>(args?: SelectSubset<T, StripeWebhookEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StripeWebhookEventUpdateManyArgs>(args: SelectSubset<T, StripeWebhookEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StripeWebhookEvents and returns the data updated in the database.
     * @param {StripeWebhookEventUpdateManyAndReturnArgs} args - Arguments to update many StripeWebhookEvents.
     * @example
     * // Update many StripeWebhookEvents
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StripeWebhookEvents and only return the `id`
     * const stripeWebhookEventWithIdOnly = await prisma.stripeWebhookEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StripeWebhookEventUpdateManyAndReturnArgs>(args: SelectSubset<T, StripeWebhookEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StripeWebhookEvent.
     * @param {StripeWebhookEventUpsertArgs} args - Arguments to update or create a StripeWebhookEvent.
     * @example
     * // Update or create a StripeWebhookEvent
     * const stripeWebhookEvent = await prisma.stripeWebhookEvent.upsert({
     *   create: {
     *     // ... data to create a StripeWebhookEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StripeWebhookEvent we want to update
     *   }
     * })
     */
    upsert<T extends StripeWebhookEventUpsertArgs>(args: SelectSubset<T, StripeWebhookEventUpsertArgs<ExtArgs>>): Prisma__StripeWebhookEventClient<$Result.GetResult<Prisma.$StripeWebhookEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StripeWebhookEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventCountArgs} args - Arguments to filter StripeWebhookEvents to count.
     * @example
     * // Count the number of StripeWebhookEvents
     * const count = await prisma.stripeWebhookEvent.count({
     *   where: {
     *     // ... the filter for the StripeWebhookEvents we want to count
     *   }
     * })
    **/
    count<T extends StripeWebhookEventCountArgs>(
      args?: Subset<T, StripeWebhookEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StripeWebhookEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StripeWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StripeWebhookEventAggregateArgs>(args: Subset<T, StripeWebhookEventAggregateArgs>): Prisma.PrismaPromise<GetStripeWebhookEventAggregateType<T>>

    /**
     * Group by StripeWebhookEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StripeWebhookEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StripeWebhookEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StripeWebhookEventGroupByArgs['orderBy'] }
        : { orderBy?: StripeWebhookEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StripeWebhookEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStripeWebhookEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StripeWebhookEvent model
   */
  readonly fields: StripeWebhookEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StripeWebhookEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StripeWebhookEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StripeWebhookEvent model
   */
  interface StripeWebhookEventFieldRefs {
    readonly id: FieldRef<"StripeWebhookEvent", 'String'>
    readonly type: FieldRef<"StripeWebhookEvent", 'String'>
    readonly processedAt: FieldRef<"StripeWebhookEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StripeWebhookEvent findUnique
   */
  export type StripeWebhookEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent findUniqueOrThrow
   */
  export type StripeWebhookEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent findFirst
   */
  export type StripeWebhookEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeWebhookEvents.
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeWebhookEvents.
     */
    distinct?: StripeWebhookEventScalarFieldEnum | StripeWebhookEventScalarFieldEnum[]
  }

  /**
   * StripeWebhookEvent findFirstOrThrow
   */
  export type StripeWebhookEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvent to fetch.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StripeWebhookEvents.
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StripeWebhookEvents.
     */
    distinct?: StripeWebhookEventScalarFieldEnum | StripeWebhookEventScalarFieldEnum[]
  }

  /**
   * StripeWebhookEvent findMany
   */
  export type StripeWebhookEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter, which StripeWebhookEvents to fetch.
     */
    where?: StripeWebhookEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StripeWebhookEvents to fetch.
     */
    orderBy?: StripeWebhookEventOrderByWithRelationInput | StripeWebhookEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StripeWebhookEvents.
     */
    cursor?: StripeWebhookEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StripeWebhookEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StripeWebhookEvents.
     */
    skip?: number
    distinct?: StripeWebhookEventScalarFieldEnum | StripeWebhookEventScalarFieldEnum[]
  }

  /**
   * StripeWebhookEvent create
   */
  export type StripeWebhookEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to create a StripeWebhookEvent.
     */
    data: XOR<StripeWebhookEventCreateInput, StripeWebhookEventUncheckedCreateInput>
  }

  /**
   * StripeWebhookEvent createMany
   */
  export type StripeWebhookEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StripeWebhookEvents.
     */
    data: StripeWebhookEventCreateManyInput | StripeWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeWebhookEvent createManyAndReturn
   */
  export type StripeWebhookEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to create many StripeWebhookEvents.
     */
    data: StripeWebhookEventCreateManyInput | StripeWebhookEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StripeWebhookEvent update
   */
  export type StripeWebhookEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data needed to update a StripeWebhookEvent.
     */
    data: XOR<StripeWebhookEventUpdateInput, StripeWebhookEventUncheckedUpdateInput>
    /**
     * Choose, which StripeWebhookEvent to update.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent updateMany
   */
  export type StripeWebhookEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StripeWebhookEvents.
     */
    data: XOR<StripeWebhookEventUpdateManyMutationInput, StripeWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which StripeWebhookEvents to update
     */
    where?: StripeWebhookEventWhereInput
    /**
     * Limit how many StripeWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * StripeWebhookEvent updateManyAndReturn
   */
  export type StripeWebhookEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The data used to update StripeWebhookEvents.
     */
    data: XOR<StripeWebhookEventUpdateManyMutationInput, StripeWebhookEventUncheckedUpdateManyInput>
    /**
     * Filter which StripeWebhookEvents to update
     */
    where?: StripeWebhookEventWhereInput
    /**
     * Limit how many StripeWebhookEvents to update.
     */
    limit?: number
  }

  /**
   * StripeWebhookEvent upsert
   */
  export type StripeWebhookEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * The filter to search for the StripeWebhookEvent to update in case it exists.
     */
    where: StripeWebhookEventWhereUniqueInput
    /**
     * In case the StripeWebhookEvent found by the `where` argument doesn't exist, create a new StripeWebhookEvent with this data.
     */
    create: XOR<StripeWebhookEventCreateInput, StripeWebhookEventUncheckedCreateInput>
    /**
     * In case the StripeWebhookEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StripeWebhookEventUpdateInput, StripeWebhookEventUncheckedUpdateInput>
  }

  /**
   * StripeWebhookEvent delete
   */
  export type StripeWebhookEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
    /**
     * Filter which StripeWebhookEvent to delete.
     */
    where: StripeWebhookEventWhereUniqueInput
  }

  /**
   * StripeWebhookEvent deleteMany
   */
  export type StripeWebhookEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StripeWebhookEvents to delete
     */
    where?: StripeWebhookEventWhereInput
    /**
     * Limit how many StripeWebhookEvents to delete.
     */
    limit?: number
  }

  /**
   * StripeWebhookEvent without action
   */
  export type StripeWebhookEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StripeWebhookEvent
     */
    select?: StripeWebhookEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StripeWebhookEvent
     */
    omit?: StripeWebhookEventOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name',
    description: 'description',
    logo: 'logo',
    website: 'website'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StartupInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foundedYear: 'foundedYear',
    industry: 'industry',
    technologies: 'technologies',
    pitchDeck: 'pitchDeck',
    demoVideo: 'demoVideo',
    monthlyUsersAverage: 'monthlyUsersAverage',
    revenue: 'revenue',
    teamSize: 'teamSize',
    visible: 'visible',
    github: 'github',
    instagram: 'instagram',
    linkedin: 'linkedin',
    facebook: 'facebook',
    contactEmail: 'contactEmail'
  };

  export type StartupInfoScalarFieldEnum = (typeof StartupInfoScalarFieldEnum)[keyof typeof StartupInfoScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    startupInfoId: 'startupInfoId',
    name: 'name',
    age: 'age',
    position: 'position',
    profileImage: 'profileImage',
    university: 'university'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const CompanyInfoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    industry: 'industry',
    size: 'size',
    companyType: 'companyType',
    plan: 'plan',
    planStatus: 'planStatus',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    searchesUsed: 'searchesUsed',
    searchesRemaining: 'searchesRemaining',
    lastSearchReset: 'lastSearchReset',
    planCancelledAt: 'planCancelledAt',
    planExpiresAt: 'planExpiresAt'
  };

  export type CompanyInfoScalarFieldEnum = (typeof CompanyInfoScalarFieldEnum)[keyof typeof CompanyInfoScalarFieldEnum]


  export const StripeWebhookEventScalarFieldEnum: {
    id: 'id',
    type: 'type',
    processedAt: 'processedAt'
  };

  export type StripeWebhookEventScalarFieldEnum = (typeof StripeWebhookEventScalarFieldEnum)[keyof typeof StripeWebhookEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'IndustryType'
   */
  export type EnumIndustryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IndustryType'>
    


  /**
   * Reference to a field of type 'IndustryType[]'
   */
  export type ListEnumIndustryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IndustryType[]'>
    


  /**
   * Reference to a field of type 'TechnologyType[]'
   */
  export type ListEnumTechnologyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnologyType[]'>
    


  /**
   * Reference to a field of type 'TechnologyType'
   */
  export type EnumTechnologyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TechnologyType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CompanyType'
   */
  export type EnumCompanyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyType'>
    


  /**
   * Reference to a field of type 'CompanyType[]'
   */
  export type ListEnumCompanyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyType[]'>
    


  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    logo?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    startupInfo?: XOR<StartupInfoNullableScalarRelationFilter, StartupInfoWhereInput> | null
    companyInfo?: XOR<CompanyInfoNullableScalarRelationFilter, CompanyInfoWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    startupInfo?: StartupInfoOrderByWithRelationInput
    companyInfo?: CompanyInfoOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    name?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    logo?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    startupInfo?: XOR<StartupInfoNullableScalarRelationFilter, StartupInfoWhereInput> | null
    companyInfo?: XOR<CompanyInfoNullableScalarRelationFilter, CompanyInfoWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    logo?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type StartupInfoWhereInput = {
    AND?: StartupInfoWhereInput | StartupInfoWhereInput[]
    OR?: StartupInfoWhereInput[]
    NOT?: StartupInfoWhereInput | StartupInfoWhereInput[]
    id?: IntFilter<"StartupInfo"> | number
    userId?: IntFilter<"StartupInfo"> | number
    foundedYear?: IntNullableFilter<"StartupInfo"> | number | null
    industry?: EnumIndustryTypeNullableFilter<"StartupInfo"> | $Enums.IndustryType | null
    technologies?: EnumTechnologyTypeNullableListFilter<"StartupInfo">
    pitchDeck?: StringNullableFilter<"StartupInfo"> | string | null
    demoVideo?: StringNullableFilter<"StartupInfo"> | string | null
    monthlyUsersAverage?: IntNullableFilter<"StartupInfo"> | number | null
    revenue?: StringNullableFilter<"StartupInfo"> | string | null
    teamSize?: IntNullableFilter<"StartupInfo"> | number | null
    visible?: BoolFilter<"StartupInfo"> | boolean
    github?: StringNullableFilter<"StartupInfo"> | string | null
    instagram?: StringNullableFilter<"StartupInfo"> | string | null
    linkedin?: StringNullableFilter<"StartupInfo"> | string | null
    facebook?: StringNullableFilter<"StartupInfo"> | string | null
    contactEmail?: StringNullableFilter<"StartupInfo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: MemberListRelationFilter
  }

  export type StartupInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    technologies?: SortOrder
    pitchDeck?: SortOrderInput | SortOrder
    demoVideo?: SortOrderInput | SortOrder
    monthlyUsersAverage?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    visible?: SortOrder
    github?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    members?: MemberOrderByRelationAggregateInput
  }

  export type StartupInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: StartupInfoWhereInput | StartupInfoWhereInput[]
    OR?: StartupInfoWhereInput[]
    NOT?: StartupInfoWhereInput | StartupInfoWhereInput[]
    foundedYear?: IntNullableFilter<"StartupInfo"> | number | null
    industry?: EnumIndustryTypeNullableFilter<"StartupInfo"> | $Enums.IndustryType | null
    technologies?: EnumTechnologyTypeNullableListFilter<"StartupInfo">
    pitchDeck?: StringNullableFilter<"StartupInfo"> | string | null
    demoVideo?: StringNullableFilter<"StartupInfo"> | string | null
    monthlyUsersAverage?: IntNullableFilter<"StartupInfo"> | number | null
    revenue?: StringNullableFilter<"StartupInfo"> | string | null
    teamSize?: IntNullableFilter<"StartupInfo"> | number | null
    visible?: BoolFilter<"StartupInfo"> | boolean
    github?: StringNullableFilter<"StartupInfo"> | string | null
    instagram?: StringNullableFilter<"StartupInfo"> | string | null
    linkedin?: StringNullableFilter<"StartupInfo"> | string | null
    facebook?: StringNullableFilter<"StartupInfo"> | string | null
    contactEmail?: StringNullableFilter<"StartupInfo"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: MemberListRelationFilter
  }, "id" | "userId">

  export type StartupInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    technologies?: SortOrder
    pitchDeck?: SortOrderInput | SortOrder
    demoVideo?: SortOrderInput | SortOrder
    monthlyUsersAverage?: SortOrderInput | SortOrder
    revenue?: SortOrderInput | SortOrder
    teamSize?: SortOrderInput | SortOrder
    visible?: SortOrder
    github?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    contactEmail?: SortOrderInput | SortOrder
    _count?: StartupInfoCountOrderByAggregateInput
    _avg?: StartupInfoAvgOrderByAggregateInput
    _max?: StartupInfoMaxOrderByAggregateInput
    _min?: StartupInfoMinOrderByAggregateInput
    _sum?: StartupInfoSumOrderByAggregateInput
  }

  export type StartupInfoScalarWhereWithAggregatesInput = {
    AND?: StartupInfoScalarWhereWithAggregatesInput | StartupInfoScalarWhereWithAggregatesInput[]
    OR?: StartupInfoScalarWhereWithAggregatesInput[]
    NOT?: StartupInfoScalarWhereWithAggregatesInput | StartupInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StartupInfo"> | number
    userId?: IntWithAggregatesFilter<"StartupInfo"> | number
    foundedYear?: IntNullableWithAggregatesFilter<"StartupInfo"> | number | null
    industry?: EnumIndustryTypeNullableWithAggregatesFilter<"StartupInfo"> | $Enums.IndustryType | null
    technologies?: EnumTechnologyTypeNullableListFilter<"StartupInfo">
    pitchDeck?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    demoVideo?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    monthlyUsersAverage?: IntNullableWithAggregatesFilter<"StartupInfo"> | number | null
    revenue?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    teamSize?: IntNullableWithAggregatesFilter<"StartupInfo"> | number | null
    visible?: BoolWithAggregatesFilter<"StartupInfo"> | boolean
    github?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
    contactEmail?: StringNullableWithAggregatesFilter<"StartupInfo"> | string | null
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    startupInfoId?: IntFilter<"Member"> | number
    name?: StringFilter<"Member"> | string
    age?: IntFilter<"Member"> | number
    position?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    university?: StringFilter<"Member"> | string
    startupInfo?: XOR<StartupInfoScalarRelationFilter, StartupInfoWhereInput>
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    university?: SortOrder
    startupInfo?: StartupInfoOrderByWithRelationInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    startupInfoId?: IntFilter<"Member"> | number
    name?: StringFilter<"Member"> | string
    age?: IntFilter<"Member"> | number
    position?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    university?: StringFilter<"Member"> | string
    startupInfo?: XOR<StartupInfoScalarRelationFilter, StartupInfoWhereInput>
  }, "id">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    university?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    startupInfoId?: IntWithAggregatesFilter<"Member"> | number
    name?: StringWithAggregatesFilter<"Member"> | string
    age?: IntWithAggregatesFilter<"Member"> | number
    position?: StringWithAggregatesFilter<"Member"> | string
    profileImage?: StringNullableWithAggregatesFilter<"Member"> | string | null
    university?: StringWithAggregatesFilter<"Member"> | string
  }

  export type CompanyInfoWhereInput = {
    AND?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    OR?: CompanyInfoWhereInput[]
    NOT?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    id?: IntFilter<"CompanyInfo"> | number
    userId?: IntFilter<"CompanyInfo"> | number
    industry?: EnumIndustryTypeNullableFilter<"CompanyInfo"> | $Enums.IndustryType | null
    size?: IntNullableFilter<"CompanyInfo"> | number | null
    companyType?: EnumCompanyTypeNullableFilter<"CompanyInfo"> | $Enums.CompanyType | null
    plan?: EnumPlanFilter<"CompanyInfo"> | $Enums.Plan
    planStatus?: EnumPlanStatusFilter<"CompanyInfo"> | $Enums.PlanStatus
    stripeCustomerId?: StringNullableFilter<"CompanyInfo"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"CompanyInfo"> | string | null
    searchesUsed?: IntFilter<"CompanyInfo"> | number
    searchesRemaining?: IntFilter<"CompanyInfo"> | number
    lastSearchReset?: DateTimeFilter<"CompanyInfo"> | Date | string
    planCancelledAt?: DateTimeNullableFilter<"CompanyInfo"> | Date | string | null
    planExpiresAt?: DateTimeNullableFilter<"CompanyInfo"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CompanyInfoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    companyType?: SortOrderInput | SortOrder
    plan?: SortOrder
    planStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
    lastSearchReset?: SortOrder
    planCancelledAt?: SortOrderInput | SortOrder
    planExpiresAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CompanyInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    OR?: CompanyInfoWhereInput[]
    NOT?: CompanyInfoWhereInput | CompanyInfoWhereInput[]
    industry?: EnumIndustryTypeNullableFilter<"CompanyInfo"> | $Enums.IndustryType | null
    size?: IntNullableFilter<"CompanyInfo"> | number | null
    companyType?: EnumCompanyTypeNullableFilter<"CompanyInfo"> | $Enums.CompanyType | null
    plan?: EnumPlanFilter<"CompanyInfo"> | $Enums.Plan
    planStatus?: EnumPlanStatusFilter<"CompanyInfo"> | $Enums.PlanStatus
    stripeCustomerId?: StringNullableFilter<"CompanyInfo"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"CompanyInfo"> | string | null
    searchesUsed?: IntFilter<"CompanyInfo"> | number
    searchesRemaining?: IntFilter<"CompanyInfo"> | number
    lastSearchReset?: DateTimeFilter<"CompanyInfo"> | Date | string
    planCancelledAt?: DateTimeNullableFilter<"CompanyInfo"> | Date | string | null
    planExpiresAt?: DateTimeNullableFilter<"CompanyInfo"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CompanyInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    companyType?: SortOrderInput | SortOrder
    plan?: SortOrder
    planStatus?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
    lastSearchReset?: SortOrder
    planCancelledAt?: SortOrderInput | SortOrder
    planExpiresAt?: SortOrderInput | SortOrder
    _count?: CompanyInfoCountOrderByAggregateInput
    _avg?: CompanyInfoAvgOrderByAggregateInput
    _max?: CompanyInfoMaxOrderByAggregateInput
    _min?: CompanyInfoMinOrderByAggregateInput
    _sum?: CompanyInfoSumOrderByAggregateInput
  }

  export type CompanyInfoScalarWhereWithAggregatesInput = {
    AND?: CompanyInfoScalarWhereWithAggregatesInput | CompanyInfoScalarWhereWithAggregatesInput[]
    OR?: CompanyInfoScalarWhereWithAggregatesInput[]
    NOT?: CompanyInfoScalarWhereWithAggregatesInput | CompanyInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompanyInfo"> | number
    userId?: IntWithAggregatesFilter<"CompanyInfo"> | number
    industry?: EnumIndustryTypeNullableWithAggregatesFilter<"CompanyInfo"> | $Enums.IndustryType | null
    size?: IntNullableWithAggregatesFilter<"CompanyInfo"> | number | null
    companyType?: EnumCompanyTypeNullableWithAggregatesFilter<"CompanyInfo"> | $Enums.CompanyType | null
    plan?: EnumPlanWithAggregatesFilter<"CompanyInfo"> | $Enums.Plan
    planStatus?: EnumPlanStatusWithAggregatesFilter<"CompanyInfo"> | $Enums.PlanStatus
    stripeCustomerId?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"CompanyInfo"> | string | null
    searchesUsed?: IntWithAggregatesFilter<"CompanyInfo"> | number
    searchesRemaining?: IntWithAggregatesFilter<"CompanyInfo"> | number
    lastSearchReset?: DateTimeWithAggregatesFilter<"CompanyInfo"> | Date | string
    planCancelledAt?: DateTimeNullableWithAggregatesFilter<"CompanyInfo"> | Date | string | null
    planExpiresAt?: DateTimeNullableWithAggregatesFilter<"CompanyInfo"> | Date | string | null
  }

  export type StripeWebhookEventWhereInput = {
    AND?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    OR?: StripeWebhookEventWhereInput[]
    NOT?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    id?: StringFilter<"StripeWebhookEvent"> | string
    type?: StringFilter<"StripeWebhookEvent"> | string
    processedAt?: DateTimeFilter<"StripeWebhookEvent"> | Date | string
  }

  export type StripeWebhookEventOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    processedAt?: SortOrder
  }

  export type StripeWebhookEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    OR?: StripeWebhookEventWhereInput[]
    NOT?: StripeWebhookEventWhereInput | StripeWebhookEventWhereInput[]
    type?: StringFilter<"StripeWebhookEvent"> | string
    processedAt?: DateTimeFilter<"StripeWebhookEvent"> | Date | string
  }, "id">

  export type StripeWebhookEventOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    processedAt?: SortOrder
    _count?: StripeWebhookEventCountOrderByAggregateInput
    _max?: StripeWebhookEventMaxOrderByAggregateInput
    _min?: StripeWebhookEventMinOrderByAggregateInput
  }

  export type StripeWebhookEventScalarWhereWithAggregatesInput = {
    AND?: StripeWebhookEventScalarWhereWithAggregatesInput | StripeWebhookEventScalarWhereWithAggregatesInput[]
    OR?: StripeWebhookEventScalarWhereWithAggregatesInput[]
    NOT?: StripeWebhookEventScalarWhereWithAggregatesInput | StripeWebhookEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StripeWebhookEvent"> | string
    type?: StringWithAggregatesFilter<"StripeWebhookEvent"> | string
    processedAt?: DateTimeWithAggregatesFilter<"StripeWebhookEvent"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
    startupInfo?: StartupInfoCreateNestedOneWithoutUserInput
    companyInfo?: CompanyInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
    startupInfo?: StartupInfoUncheckedCreateNestedOneWithoutUserInput
    companyInfo?: CompanyInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    startupInfo?: StartupInfoUpdateOneWithoutUserNestedInput
    companyInfo?: CompanyInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    startupInfo?: StartupInfoUncheckedUpdateOneWithoutUserNestedInput
    companyInfo?: CompanyInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StartupInfoCreateInput = {
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
    user: UserCreateNestedOneWithoutStartupInfoInput
    members?: MemberCreateNestedManyWithoutStartupInfoInput
  }

  export type StartupInfoUncheckedCreateInput = {
    id?: number
    userId: number
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
    members?: MemberUncheckedCreateNestedManyWithoutStartupInfoInput
  }

  export type StartupInfoUpdateInput = {
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutStartupInfoNestedInput
    members?: MemberUpdateManyWithoutStartupInfoNestedInput
  }

  export type StartupInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    members?: MemberUncheckedUpdateManyWithoutStartupInfoNestedInput
  }

  export type StartupInfoCreateManyInput = {
    id?: number
    userId: number
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
  }

  export type StartupInfoUpdateManyMutationInput = {
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StartupInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberCreateInput = {
    name: string
    age: number
    position: string
    profileImage?: string | null
    university: string
    startupInfo: StartupInfoCreateNestedOneWithoutMembersInput
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    startupInfoId: number
    name: string
    age: number
    position: string
    profileImage?: string | null
    university: string
  }

  export type MemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
    startupInfo?: StartupInfoUpdateOneRequiredWithoutMembersNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startupInfoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
  }

  export type MemberCreateManyInput = {
    id?: number
    startupInfoId: number
    name: string
    age: number
    position: string
    profileImage?: string | null
    university: string
  }

  export type MemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startupInfoId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyInfoCreateInput = {
    industry?: $Enums.IndustryType | null
    size?: number | null
    companyType?: $Enums.CompanyType | null
    plan?: $Enums.Plan
    planStatus?: $Enums.PlanStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    searchesUsed?: number
    searchesRemaining?: number
    lastSearchReset?: Date | string
    planCancelledAt?: Date | string | null
    planExpiresAt?: Date | string | null
    user: UserCreateNestedOneWithoutCompanyInfoInput
  }

  export type CompanyInfoUncheckedCreateInput = {
    id?: number
    userId: number
    industry?: $Enums.IndustryType | null
    size?: number | null
    companyType?: $Enums.CompanyType | null
    plan?: $Enums.Plan
    planStatus?: $Enums.PlanStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    searchesUsed?: number
    searchesRemaining?: number
    lastSearchReset?: Date | string
    planCancelledAt?: Date | string | null
    planExpiresAt?: Date | string | null
  }

  export type CompanyInfoUpdateInput = {
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    companyType?: NullableEnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    searchesUsed?: IntFieldUpdateOperationsInput | number
    searchesRemaining?: IntFieldUpdateOperationsInput | number
    lastSearchReset?: DateTimeFieldUpdateOperationsInput | Date | string
    planCancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutCompanyInfoNestedInput
  }

  export type CompanyInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    companyType?: NullableEnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    searchesUsed?: IntFieldUpdateOperationsInput | number
    searchesRemaining?: IntFieldUpdateOperationsInput | number
    lastSearchReset?: DateTimeFieldUpdateOperationsInput | Date | string
    planCancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyInfoCreateManyInput = {
    id?: number
    userId: number
    industry?: $Enums.IndustryType | null
    size?: number | null
    companyType?: $Enums.CompanyType | null
    plan?: $Enums.Plan
    planStatus?: $Enums.PlanStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    searchesUsed?: number
    searchesRemaining?: number
    lastSearchReset?: Date | string
    planCancelledAt?: Date | string | null
    planExpiresAt?: Date | string | null
  }

  export type CompanyInfoUpdateManyMutationInput = {
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    companyType?: NullableEnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    searchesUsed?: IntFieldUpdateOperationsInput | number
    searchesRemaining?: IntFieldUpdateOperationsInput | number
    lastSearchReset?: DateTimeFieldUpdateOperationsInput | Date | string
    planCancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    companyType?: NullableEnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    searchesUsed?: IntFieldUpdateOperationsInput | number
    searchesRemaining?: IntFieldUpdateOperationsInput | number
    lastSearchReset?: DateTimeFieldUpdateOperationsInput | Date | string
    planCancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StripeWebhookEventCreateInput = {
    id: string
    type: string
    processedAt?: Date | string
  }

  export type StripeWebhookEventUncheckedCreateInput = {
    id: string
    type: string
    processedAt?: Date | string
  }

  export type StripeWebhookEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeWebhookEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeWebhookEventCreateManyInput = {
    id: string
    type: string
    processedAt?: Date | string
  }

  export type StripeWebhookEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StripeWebhookEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StartupInfoNullableScalarRelationFilter = {
    is?: StartupInfoWhereInput | null
    isNot?: StartupInfoWhereInput | null
  }

  export type CompanyInfoNullableScalarRelationFilter = {
    is?: CompanyInfoWhereInput | null
    isNot?: CompanyInfoWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    website?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    website?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    description?: SortOrder
    logo?: SortOrder
    website?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumIndustryTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IndustryType | EnumIndustryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryTypeNullableFilter<$PrismaModel> | $Enums.IndustryType | null
  }

  export type EnumTechnologyTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.TechnologyType[] | ListEnumTechnologyTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.TechnologyType | EnumTechnologyTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.TechnologyType[] | ListEnumTechnologyTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.TechnologyType[] | ListEnumTechnologyTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StartupInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrder
    industry?: SortOrder
    technologies?: SortOrder
    pitchDeck?: SortOrder
    demoVideo?: SortOrder
    monthlyUsersAverage?: SortOrder
    revenue?: SortOrder
    teamSize?: SortOrder
    visible?: SortOrder
    github?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    contactEmail?: SortOrder
  }

  export type StartupInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrder
    monthlyUsersAverage?: SortOrder
    teamSize?: SortOrder
  }

  export type StartupInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrder
    industry?: SortOrder
    pitchDeck?: SortOrder
    demoVideo?: SortOrder
    monthlyUsersAverage?: SortOrder
    revenue?: SortOrder
    teamSize?: SortOrder
    visible?: SortOrder
    github?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    contactEmail?: SortOrder
  }

  export type StartupInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrder
    industry?: SortOrder
    pitchDeck?: SortOrder
    demoVideo?: SortOrder
    monthlyUsersAverage?: SortOrder
    revenue?: SortOrder
    teamSize?: SortOrder
    visible?: SortOrder
    github?: SortOrder
    instagram?: SortOrder
    linkedin?: SortOrder
    facebook?: SortOrder
    contactEmail?: SortOrder
  }

  export type StartupInfoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foundedYear?: SortOrder
    monthlyUsersAverage?: SortOrder
    teamSize?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumIndustryTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IndustryType | EnumIndustryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.IndustryType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIndustryTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIndustryTypeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StartupInfoScalarRelationFilter = {
    is?: StartupInfoWhereInput
    isNot?: StartupInfoWhereInput
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    profileImage?: SortOrder
    university?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    age?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    profileImage?: SortOrder
    university?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    name?: SortOrder
    age?: SortOrder
    position?: SortOrder
    profileImage?: SortOrder
    university?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
    startupInfoId?: SortOrder
    age?: SortOrder
  }

  export type EnumCompanyTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompanyTypeNullableFilter<$PrismaModel> | $Enums.CompanyType | null
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CompanyInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    companyType?: SortOrder
    plan?: SortOrder
    planStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
    lastSearchReset?: SortOrder
    planCancelledAt?: SortOrder
    planExpiresAt?: SortOrder
  }

  export type CompanyInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    size?: SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
  }

  export type CompanyInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    companyType?: SortOrder
    plan?: SortOrder
    planStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
    lastSearchReset?: SortOrder
    planCancelledAt?: SortOrder
    planExpiresAt?: SortOrder
  }

  export type CompanyInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    industry?: SortOrder
    size?: SortOrder
    companyType?: SortOrder
    plan?: SortOrder
    planStatus?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
    lastSearchReset?: SortOrder
    planCancelledAt?: SortOrder
    planExpiresAt?: SortOrder
  }

  export type CompanyInfoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    size?: SortOrder
    searchesUsed?: SortOrder
    searchesRemaining?: SortOrder
  }

  export type EnumCompanyTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompanyTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CompanyType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCompanyTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCompanyTypeNullableFilter<$PrismaModel>
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StripeWebhookEventCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    processedAt?: SortOrder
  }

  export type StripeWebhookEventMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    processedAt?: SortOrder
  }

  export type StripeWebhookEventMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    processedAt?: SortOrder
  }

  export type StartupInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<StartupInfoCreateWithoutUserInput, StartupInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupInfoCreateOrConnectWithoutUserInput
    connect?: StartupInfoWhereUniqueInput
  }

  export type CompanyInfoCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyInfoCreateWithoutUserInput, CompanyInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyInfoCreateOrConnectWithoutUserInput
    connect?: CompanyInfoWhereUniqueInput
  }

  export type StartupInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StartupInfoCreateWithoutUserInput, StartupInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupInfoCreateOrConnectWithoutUserInput
    connect?: StartupInfoWhereUniqueInput
  }

  export type CompanyInfoUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyInfoCreateWithoutUserInput, CompanyInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyInfoCreateOrConnectWithoutUserInput
    connect?: CompanyInfoWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StartupInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<StartupInfoCreateWithoutUserInput, StartupInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupInfoCreateOrConnectWithoutUserInput
    upsert?: StartupInfoUpsertWithoutUserInput
    disconnect?: StartupInfoWhereInput | boolean
    delete?: StartupInfoWhereInput | boolean
    connect?: StartupInfoWhereUniqueInput
    update?: XOR<XOR<StartupInfoUpdateToOneWithWhereWithoutUserInput, StartupInfoUpdateWithoutUserInput>, StartupInfoUncheckedUpdateWithoutUserInput>
  }

  export type CompanyInfoUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyInfoCreateWithoutUserInput, CompanyInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyInfoCreateOrConnectWithoutUserInput
    upsert?: CompanyInfoUpsertWithoutUserInput
    disconnect?: CompanyInfoWhereInput | boolean
    delete?: CompanyInfoWhereInput | boolean
    connect?: CompanyInfoWhereUniqueInput
    update?: XOR<XOR<CompanyInfoUpdateToOneWithWhereWithoutUserInput, CompanyInfoUpdateWithoutUserInput>, CompanyInfoUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StartupInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StartupInfoCreateWithoutUserInput, StartupInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: StartupInfoCreateOrConnectWithoutUserInput
    upsert?: StartupInfoUpsertWithoutUserInput
    disconnect?: StartupInfoWhereInput | boolean
    delete?: StartupInfoWhereInput | boolean
    connect?: StartupInfoWhereUniqueInput
    update?: XOR<XOR<StartupInfoUpdateToOneWithWhereWithoutUserInput, StartupInfoUpdateWithoutUserInput>, StartupInfoUncheckedUpdateWithoutUserInput>
  }

  export type CompanyInfoUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyInfoCreateWithoutUserInput, CompanyInfoUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyInfoCreateOrConnectWithoutUserInput
    upsert?: CompanyInfoUpsertWithoutUserInput
    disconnect?: CompanyInfoWhereInput | boolean
    delete?: CompanyInfoWhereInput | boolean
    connect?: CompanyInfoWhereUniqueInput
    update?: XOR<XOR<CompanyInfoUpdateToOneWithWhereWithoutUserInput, CompanyInfoUpdateWithoutUserInput>, CompanyInfoUncheckedUpdateWithoutUserInput>
  }

  export type StartupInfoCreatetechnologiesInput = {
    set: $Enums.TechnologyType[]
  }

  export type UserCreateNestedOneWithoutStartupInfoInput = {
    create?: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutStartupInfoInput
    connect?: UserWhereUniqueInput
  }

  export type MemberCreateNestedManyWithoutStartupInfoInput = {
    create?: XOR<MemberCreateWithoutStartupInfoInput, MemberUncheckedCreateWithoutStartupInfoInput> | MemberCreateWithoutStartupInfoInput[] | MemberUncheckedCreateWithoutStartupInfoInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutStartupInfoInput | MemberCreateOrConnectWithoutStartupInfoInput[]
    createMany?: MemberCreateManyStartupInfoInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutStartupInfoInput = {
    create?: XOR<MemberCreateWithoutStartupInfoInput, MemberUncheckedCreateWithoutStartupInfoInput> | MemberCreateWithoutStartupInfoInput[] | MemberUncheckedCreateWithoutStartupInfoInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutStartupInfoInput | MemberCreateOrConnectWithoutStartupInfoInput[]
    createMany?: MemberCreateManyStartupInfoInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumIndustryTypeFieldUpdateOperationsInput = {
    set?: $Enums.IndustryType | null
  }

  export type StartupInfoUpdatetechnologiesInput = {
    set?: $Enums.TechnologyType[]
    push?: $Enums.TechnologyType | $Enums.TechnologyType[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutStartupInfoNestedInput = {
    create?: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutStartupInfoInput
    upsert?: UserUpsertWithoutStartupInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStartupInfoInput, UserUpdateWithoutStartupInfoInput>, UserUncheckedUpdateWithoutStartupInfoInput>
  }

  export type MemberUpdateManyWithoutStartupInfoNestedInput = {
    create?: XOR<MemberCreateWithoutStartupInfoInput, MemberUncheckedCreateWithoutStartupInfoInput> | MemberCreateWithoutStartupInfoInput[] | MemberUncheckedCreateWithoutStartupInfoInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutStartupInfoInput | MemberCreateOrConnectWithoutStartupInfoInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutStartupInfoInput | MemberUpsertWithWhereUniqueWithoutStartupInfoInput[]
    createMany?: MemberCreateManyStartupInfoInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutStartupInfoInput | MemberUpdateWithWhereUniqueWithoutStartupInfoInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutStartupInfoInput | MemberUpdateManyWithWhereWithoutStartupInfoInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutStartupInfoNestedInput = {
    create?: XOR<MemberCreateWithoutStartupInfoInput, MemberUncheckedCreateWithoutStartupInfoInput> | MemberCreateWithoutStartupInfoInput[] | MemberUncheckedCreateWithoutStartupInfoInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutStartupInfoInput | MemberCreateOrConnectWithoutStartupInfoInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutStartupInfoInput | MemberUpsertWithWhereUniqueWithoutStartupInfoInput[]
    createMany?: MemberCreateManyStartupInfoInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutStartupInfoInput | MemberUpdateWithWhereUniqueWithoutStartupInfoInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutStartupInfoInput | MemberUpdateManyWithWhereWithoutStartupInfoInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type StartupInfoCreateNestedOneWithoutMembersInput = {
    create?: XOR<StartupInfoCreateWithoutMembersInput, StartupInfoUncheckedCreateWithoutMembersInput>
    connectOrCreate?: StartupInfoCreateOrConnectWithoutMembersInput
    connect?: StartupInfoWhereUniqueInput
  }

  export type StartupInfoUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<StartupInfoCreateWithoutMembersInput, StartupInfoUncheckedCreateWithoutMembersInput>
    connectOrCreate?: StartupInfoCreateOrConnectWithoutMembersInput
    upsert?: StartupInfoUpsertWithoutMembersInput
    connect?: StartupInfoWhereUniqueInput
    update?: XOR<XOR<StartupInfoUpdateToOneWithWhereWithoutMembersInput, StartupInfoUpdateWithoutMembersInput>, StartupInfoUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutCompanyInfoInput = {
    create?: XOR<UserCreateWithoutCompanyInfoInput, UserUncheckedCreateWithoutCompanyInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInfoInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumCompanyTypeFieldUpdateOperationsInput = {
    set?: $Enums.CompanyType | null
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCompanyInfoNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInfoInput, UserUncheckedCreateWithoutCompanyInfoInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInfoInput
    upsert?: UserUpsertWithoutCompanyInfoInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInfoInput, UserUpdateWithoutCompanyInfoInput>, UserUncheckedUpdateWithoutCompanyInfoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIndustryTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IndustryType | EnumIndustryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryTypeNullableFilter<$PrismaModel> | $Enums.IndustryType | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIndustryTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IndustryType | EnumIndustryTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IndustryType[] | ListEnumIndustryTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIndustryTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.IndustryType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIndustryTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIndustryTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCompanyTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompanyTypeNullableFilter<$PrismaModel> | $Enums.CompanyType | null
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCompanyTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompanyType | EnumCompanyTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CompanyType[] | ListEnumCompanyTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCompanyTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CompanyType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCompanyTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCompanyTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StartupInfoCreateWithoutUserInput = {
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
    members?: MemberCreateNestedManyWithoutStartupInfoInput
  }

  export type StartupInfoUncheckedCreateWithoutUserInput = {
    id?: number
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
    members?: MemberUncheckedCreateNestedManyWithoutStartupInfoInput
  }

  export type StartupInfoCreateOrConnectWithoutUserInput = {
    where: StartupInfoWhereUniqueInput
    create: XOR<StartupInfoCreateWithoutUserInput, StartupInfoUncheckedCreateWithoutUserInput>
  }

  export type CompanyInfoCreateWithoutUserInput = {
    industry?: $Enums.IndustryType | null
    size?: number | null
    companyType?: $Enums.CompanyType | null
    plan?: $Enums.Plan
    planStatus?: $Enums.PlanStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    searchesUsed?: number
    searchesRemaining?: number
    lastSearchReset?: Date | string
    planCancelledAt?: Date | string | null
    planExpiresAt?: Date | string | null
  }

  export type CompanyInfoUncheckedCreateWithoutUserInput = {
    id?: number
    industry?: $Enums.IndustryType | null
    size?: number | null
    companyType?: $Enums.CompanyType | null
    plan?: $Enums.Plan
    planStatus?: $Enums.PlanStatus
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    searchesUsed?: number
    searchesRemaining?: number
    lastSearchReset?: Date | string
    planCancelledAt?: Date | string | null
    planExpiresAt?: Date | string | null
  }

  export type CompanyInfoCreateOrConnectWithoutUserInput = {
    where: CompanyInfoWhereUniqueInput
    create: XOR<CompanyInfoCreateWithoutUserInput, CompanyInfoUncheckedCreateWithoutUserInput>
  }

  export type StartupInfoUpsertWithoutUserInput = {
    update: XOR<StartupInfoUpdateWithoutUserInput, StartupInfoUncheckedUpdateWithoutUserInput>
    create: XOR<StartupInfoCreateWithoutUserInput, StartupInfoUncheckedCreateWithoutUserInput>
    where?: StartupInfoWhereInput
  }

  export type StartupInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: StartupInfoWhereInput
    data: XOR<StartupInfoUpdateWithoutUserInput, StartupInfoUncheckedUpdateWithoutUserInput>
  }

  export type StartupInfoUpdateWithoutUserInput = {
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    members?: MemberUpdateManyWithoutStartupInfoNestedInput
  }

  export type StartupInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    members?: MemberUncheckedUpdateManyWithoutStartupInfoNestedInput
  }

  export type CompanyInfoUpsertWithoutUserInput = {
    update: XOR<CompanyInfoUpdateWithoutUserInput, CompanyInfoUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyInfoCreateWithoutUserInput, CompanyInfoUncheckedCreateWithoutUserInput>
    where?: CompanyInfoWhereInput
  }

  export type CompanyInfoUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyInfoWhereInput
    data: XOR<CompanyInfoUpdateWithoutUserInput, CompanyInfoUncheckedUpdateWithoutUserInput>
  }

  export type CompanyInfoUpdateWithoutUserInput = {
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    companyType?: NullableEnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    searchesUsed?: IntFieldUpdateOperationsInput | number
    searchesRemaining?: IntFieldUpdateOperationsInput | number
    lastSearchReset?: DateTimeFieldUpdateOperationsInput | Date | string
    planCancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyInfoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    companyType?: NullableEnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType | null
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planStatus?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    searchesUsed?: IntFieldUpdateOperationsInput | number
    searchesRemaining?: IntFieldUpdateOperationsInput | number
    lastSearchReset?: DateTimeFieldUpdateOperationsInput | Date | string
    planCancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutStartupInfoInput = {
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
    companyInfo?: CompanyInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStartupInfoInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
    companyInfo?: CompanyInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStartupInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
  }

  export type MemberCreateWithoutStartupInfoInput = {
    name: string
    age: number
    position: string
    profileImage?: string | null
    university: string
  }

  export type MemberUncheckedCreateWithoutStartupInfoInput = {
    id?: number
    name: string
    age: number
    position: string
    profileImage?: string | null
    university: string
  }

  export type MemberCreateOrConnectWithoutStartupInfoInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutStartupInfoInput, MemberUncheckedCreateWithoutStartupInfoInput>
  }

  export type MemberCreateManyStartupInfoInputEnvelope = {
    data: MemberCreateManyStartupInfoInput | MemberCreateManyStartupInfoInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStartupInfoInput = {
    update: XOR<UserUpdateWithoutStartupInfoInput, UserUncheckedUpdateWithoutStartupInfoInput>
    create: XOR<UserCreateWithoutStartupInfoInput, UserUncheckedCreateWithoutStartupInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStartupInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStartupInfoInput, UserUncheckedUpdateWithoutStartupInfoInput>
  }

  export type UserUpdateWithoutStartupInfoInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyInfo?: CompanyInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStartupInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    companyInfo?: CompanyInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MemberUpsertWithWhereUniqueWithoutStartupInfoInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutStartupInfoInput, MemberUncheckedUpdateWithoutStartupInfoInput>
    create: XOR<MemberCreateWithoutStartupInfoInput, MemberUncheckedCreateWithoutStartupInfoInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutStartupInfoInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutStartupInfoInput, MemberUncheckedUpdateWithoutStartupInfoInput>
  }

  export type MemberUpdateManyWithWhereWithoutStartupInfoInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutStartupInfoInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: IntFilter<"Member"> | number
    startupInfoId?: IntFilter<"Member"> | number
    name?: StringFilter<"Member"> | string
    age?: IntFilter<"Member"> | number
    position?: StringFilter<"Member"> | string
    profileImage?: StringNullableFilter<"Member"> | string | null
    university?: StringFilter<"Member"> | string
  }

  export type StartupInfoCreateWithoutMembersInput = {
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
    user: UserCreateNestedOneWithoutStartupInfoInput
  }

  export type StartupInfoUncheckedCreateWithoutMembersInput = {
    id?: number
    userId: number
    foundedYear?: number | null
    industry?: $Enums.IndustryType | null
    technologies?: StartupInfoCreatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: string | null
    demoVideo?: string | null
    monthlyUsersAverage?: number | null
    revenue?: string | null
    teamSize?: number | null
    visible?: boolean
    github?: string | null
    instagram?: string | null
    linkedin?: string | null
    facebook?: string | null
    contactEmail?: string | null
  }

  export type StartupInfoCreateOrConnectWithoutMembersInput = {
    where: StartupInfoWhereUniqueInput
    create: XOR<StartupInfoCreateWithoutMembersInput, StartupInfoUncheckedCreateWithoutMembersInput>
  }

  export type StartupInfoUpsertWithoutMembersInput = {
    update: XOR<StartupInfoUpdateWithoutMembersInput, StartupInfoUncheckedUpdateWithoutMembersInput>
    create: XOR<StartupInfoCreateWithoutMembersInput, StartupInfoUncheckedCreateWithoutMembersInput>
    where?: StartupInfoWhereInput
  }

  export type StartupInfoUpdateToOneWithWhereWithoutMembersInput = {
    where?: StartupInfoWhereInput
    data: XOR<StartupInfoUpdateWithoutMembersInput, StartupInfoUncheckedUpdateWithoutMembersInput>
  }

  export type StartupInfoUpdateWithoutMembersInput = {
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutStartupInfoNestedInput
  }

  export type StartupInfoUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foundedYear?: NullableIntFieldUpdateOperationsInput | number | null
    industry?: NullableEnumIndustryTypeFieldUpdateOperationsInput | $Enums.IndustryType | null
    technologies?: StartupInfoUpdatetechnologiesInput | $Enums.TechnologyType[]
    pitchDeck?: NullableStringFieldUpdateOperationsInput | string | null
    demoVideo?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyUsersAverage?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableStringFieldUpdateOperationsInput | string | null
    teamSize?: NullableIntFieldUpdateOperationsInput | number | null
    visible?: BoolFieldUpdateOperationsInput | boolean
    github?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    contactEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutCompanyInfoInput = {
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
    startupInfo?: StartupInfoCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInfoInput = {
    id?: number
    email: string
    password: string
    role: $Enums.Role
    name?: string | null
    description?: string | null
    logo?: string | null
    website?: string | null
    startupInfo?: StartupInfoUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInfoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInfoInput, UserUncheckedCreateWithoutCompanyInfoInput>
  }

  export type UserUpsertWithoutCompanyInfoInput = {
    update: XOR<UserUpdateWithoutCompanyInfoInput, UserUncheckedUpdateWithoutCompanyInfoInput>
    create: XOR<UserCreateWithoutCompanyInfoInput, UserUncheckedCreateWithoutCompanyInfoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInfoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInfoInput, UserUncheckedUpdateWithoutCompanyInfoInput>
  }

  export type UserUpdateWithoutCompanyInfoInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    startupInfo?: StartupInfoUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    startupInfo?: StartupInfoUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MemberCreateManyStartupInfoInput = {
    id?: number
    name: string
    age: number
    position: string
    profileImage?: string | null
    university: string
  }

  export type MemberUpdateWithoutStartupInfoInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateWithoutStartupInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
  }

  export type MemberUncheckedUpdateManyWithoutStartupInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    position?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    university?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}