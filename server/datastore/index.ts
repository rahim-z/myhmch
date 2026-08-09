import type { PostDao } from "./PostDao.ts";
import type { UserDao } from "./UserDao.ts";
import type { CommentDao } from "./CommentDao.ts";
import type { LikeDao } from "./LikeDao.ts";
import { InMemoryDatastore } from "./memorydb/index.ts";

export interface Datastore extends PostDao, UserDao, CommentDao, LikeDao {}

export const db = new InMemoryDatastore();