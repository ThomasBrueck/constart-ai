import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user.service';
import { User, CompanyInfo } from '../../generated/prisma/client';
import { companyService } from '../services/company.service';
import { planService } from '../services/plan.service';
import { searchService } from '../services/search.service';

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

                const company = await companyService.getCompanyByUserId(user.id);

                const { canSearch, remaining, reason } = await planService.canSearch(company.id);

                if (!canSearch) {
                    return res.status(403).json({
                        message: reason || 'search limit reached',
                    });
                }

                const results = await searchService.searchStartups(query, limit);

                await planService.consumeSearch(company.id);

                return res.status(200).json({
                    data: {
                        results,
                        searchesRemaining: remaining - 1,
                    },
                });

            }
            
        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const searchController = new SearchController();