import type { Post } from "@prisma/client";
import { postService } from "../services/post.service";
import type { NextFunction, Request, Response } from "express";
import { PostInputUpdate } from "../interfaces/post.interface";

class PostController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {

            const posts: Post[] = await postService.findAll();

            if (posts === null) {
                return res.status(200).json({
                    message: 'posts are empty',
                });
            }

            return res.status(200).json({
                data: posts
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const postInput = req.body;
            const userId: number = req.user?.userId;

            const post: boolean = await postService.create(postInput, userId);
            
            if (!post) return res.status(404).json({
                message: 'something went wrong',
            });

            return res.status(200).json({
                message: 'succesfully created',
            });


        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getPostsByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const posts: Post [] = await postService.findByUserId(userId);

            return res.status(200).json({
                data: posts,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async removePostById(req: Request, res: Response, next: NextFunction) {
        try {

            const postId: string | undefined = req.params.id;

            if (!postId){
                return res.status(400).json({
                    message: 'post id is required or not found',
                });
            }

            const postIdNumb: number = parseInt(postId);

            const userId: string | undefined = req.user?.userId;

            if (!userId) {
                return res.status(400).json({
                    message: 'user id is required or not found',
                });
            }
            
            const userIdNumb: number = parseInt(userId);

            await postService.deletePostById(postIdNumb, userIdNumb);

            return res.status(200).json({
                message: 'post deleted succesfully',
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async getPostById(req: Request, res: Response, next: NextFunction) {
        try {
            const postId: string | undefined = req.params.id;
            
            if (!postId) {
                return res.status(400).json({
                    message: 'post id is required or not found',
                });
            }

            const postIdNumb: number = parseInt(postId);

            const post: Post = await postService.findById(postIdNumb);

            return res.status(200).json({
                data: post,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async updatePost(req: Request, res: Response, next: NextFunction) {
        try {

            const postData: PostInputUpdate = req.body;
            const postId: string | undefined = req.params.id;

            if (!postId) {
                return res.status(404).json({
                    message: 'post id is required or not found'
                });
            }

            const postIdNmb: number = parseInt(postId);

            const userId: string | undefined = req.user?.userId;

            if (!userId) {
                return res.status(404).json({
                    message: 'user id is required or not found',
                });
            }

            const userIdNmb: number = parseInt(userId);

            const post: Post = await postService.updatePost(postData, postIdNmb, userIdNmb);

            return res.status(200).json({
                data: post,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const postController = new PostController();