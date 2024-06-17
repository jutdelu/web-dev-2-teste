import { Request, Response } from 'express';
import * as postService from '../services/postService';

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  const post = await postService.createPost(title, content, authorId);
  res.json(post);
};