import { NextFunction, Request, Response } from "express";

export function roleMiddleware(roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = req.user?.role;
        
        if (!userRole || !roles.includes(userRole)) {
            return res.status(403).json({ message: 'forbidden: role not authorized' });
        }

        next();
    };
}