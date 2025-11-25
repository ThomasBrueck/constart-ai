import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';
import { User } from '../../generated/prisma/client';

class SearchController {

    async search(req: Request, res: Response, next: NextFunction) {
        try {
            const { query, limit = 10 } = req.body;
            const userId: number = req.user?.userId;

            if (!userId) {
                return res.status(401).json({
                    message: 'unauthorized',
                });
            }

            if (!query || typeof query !== 'string') {
                return res.status(400).json({
                    message: 'query is required and must be a string',
                });
            }

            const user: User | null = await userService.findById(userId);

            if (user) {
                const isCompany: boolean = await userService.isCompany(user.id);

                if (!isCompany) {
                    return res.status(403).json({
                        message: 'only companies can perform searches',
                    });
                }

                // Aqui abajo continuar logica segun el plan que tenga la COMPANY
            }
            
        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}