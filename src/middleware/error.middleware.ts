import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
        return res.status(err.statusHttp).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: 'internal server error',
    });
}