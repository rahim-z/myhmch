import type { Comment } from "../types.ts";

export interface CommentDao {
    createComment(comment: Comment): void;
    listCommentsByPostId(postId: string): Comment[];
    deleteComment(commentId: string): void;
}
