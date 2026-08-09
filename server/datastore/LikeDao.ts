import type { Like } from "../types.ts";

export interface LikeDao {
    createLike(like: Like): void;
}