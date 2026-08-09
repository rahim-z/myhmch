import type { Post } from "../types.ts";

export interface PostDao {
    listPosts(): Post[];
    createPost(post: Post): void;
    getPostById(id: string): Post | undefined;
    deletePostById(id: string): void;
}