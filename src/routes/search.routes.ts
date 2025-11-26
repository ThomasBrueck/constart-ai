import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";
import { searchController } from "../controller/search.controller";

export const searchRouter = Router();

searchRouter.use(authMiddleware);

searchRouter.post('/', roleMiddleware(['COMPANY']), searchController.search.bind(searchController));