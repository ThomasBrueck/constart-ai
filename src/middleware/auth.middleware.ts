import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from 'jsonwebtoken';

declare global { // global announcement
    namespace Express { // Express module
        interface Request { // Request interface (variables)
            user?: JwtPayload, // add user to interface Request (req.user)
        }
    }
}

// extract userId from jwt payload
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                error: 'no token provided',
                message: 'you do not have access',
            });
        }

        const token = authHeader.split(' ')[1] as string;

        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            throw new Error('JWT not configured');
        }

        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

        req.user = decoded;

        next();

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "internal server error",
        });
    }
}