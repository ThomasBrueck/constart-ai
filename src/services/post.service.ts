import type { Post } from "@prisma/client";
import type { PostInput } from "../interfaces/post.interface";
import { prisma } from "../lib/db";
import { AppError, NotFoundError } from "../utils/appError";
import { PostInputUpdate } from '../interfaces/post.interface';

class PostService {

    async findAll(): Promise<Post[]> {
        try {

            return await prisma.post.findMany();

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async create(postInput: PostInput, userId: number): Promise<boolean> {
        try {
            if (postInput.title === null) throw new AppError('The title is required', 400);
            if (postInput.description === null) throw new AppError('The description is required', 400);
            
            const post: Post = await prisma.post.create({
                data: {
                    title: postInput.title,
                    description: postInput.description,
                    technologies: postInput.technologies,
                    isRemote: postInput.isRemote,
                    slots: postInput.slots,
                    filled: postInput.filled,
                    userId: userId,
                }
                
            });

            if (post === null) {
                throw new NotFoundError();
            }

            return true;

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async findByUserId(userId: number): Promise<Post[]> {
        try {
            return await prisma.post.findMany({
                where: { userId: userId},
                orderBy: { createdAt: 'desc'},
            });

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async findById(postId: number): Promise<Post> {
        try {
            const post: Post | null = await prisma.post.findUnique({
                where: {id: postId},
            });

            if (post === null) {
                throw new AppError('post does not exist', 404);
            }

            return post;

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async deletePostById(postId: number, userId: number): Promise<boolean> {
        try {

            const post: Post | null = await prisma.post.findUnique({
                where: { id: postId },
            });

            if (post === null) throw new AppError('the post does not exist', 404);

            if (post.userId !== userId) throw new AppError('the post can only be deleted by the owner', 403); 
            
            await prisma.post.delete({
                where: {id: postId, userId: userId},
            });

            return true;
            
        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async updatePost(postInputUpdate: PostInputUpdate, postId: number, userId: number): Promise<Post> {
        try {
            const post: Post = await this.findById(postId);

            if (post.userId !== userId) throw new AppError('the post can only be updated by the owner', 403);

            const postUpdated: Post = await prisma.post.update({
                where: { id: postId },
                data: {
                    title: postInputUpdate.title,
                    description: postInputUpdate.description,
                    technologies: postInputUpdate.technologies,
                    isRemote: postInputUpdate.isRemote,
                    slots: postInputUpdate.slots,
                }
            });

            return postUpdated;

        } catch(error) {
            console.error(error);
            throw error;
        }
    }
}

export const postService = new PostService();