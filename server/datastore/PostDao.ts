import { Post } from '../types';

export interface PostDao {
  listPosts(): Post[];
  createPost(pos: Post): void;
  getPost(id: string): Post | undefined;
  deletePost(id: string): void;
}