export interface JwtPayload {
    userId: number;
    email: string;
    role: 'STARTUP' | 'COMPANY' | 'ADMIN'; // ADMIN not implemented yet
}