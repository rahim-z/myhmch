import type { Post, User, Comment, Like } from "../../types.ts";
import type { Datastore } from "../index.ts";

export class InMemoryDatastore implements Datastore {
    private posts: Post[] = [];
    private users: User[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];
    
    listPosts(): Post[] {
        return this.posts;
    }
    createPost(post: Post): void {
        this.posts.push(post);
    }
    getPostById(id: string): Post | undefined {
        return this.posts.find(post => post.id === id);
    }
    deletePostById(id: string): void {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            return;
            }
            this.posts.splice(index, 1);
    }
    createUser(user: User): void {
        this.users.push(user)   ;
    }
    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }
    getUserByusername(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }
    createComment(comment: Comment): void {
        this.comments.push(comment);
    }
    listCommentsByPostId(postId: string): Comment[] {
        return this.comments.filter(comment => comment.postId === postId);
    }
    deleteComment(commentId: string): void {
        const index = this.comments.findIndex(comment => comment.id === commentId);
        if (index !== -1) {
            return;
        }
        this.comments.splice(index, 1);
    }
    createLike(like: Like): void {
        this.likes.push(like);
    }

}
