import { Router } from "express";
import { postService } from "../services/post.service";
import { authMiddleware } from '../middleware/auth.middleware';
import { postController } from "../controller/post.controller";


export const postRouter = Router();

postRouter.post('/create', authMiddleware, postController.create);

postRouter.get('', postController.getAll);

postRouter.get('/user', authMiddleware, postController.getPostsByUserId);

postRouter.delete('/:id', authMiddleware, postController.removePostById);

postRouter.get('/:id', authMiddleware, postController.getPostById);

postRouter.put('/:id', authMiddleware, postController.updatePost);