export interface JwtPayload {
    userId: number;
    email: string;
    role: 'STARTUP' | 'COMPANY'; // ADMIN not implemented yet
}