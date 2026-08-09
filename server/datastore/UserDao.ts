import type { User } from "../types.ts";

export interface UserDao {
    createUser(user: User): void;
    getUserByEmail(email: string): User | undefined;
    getUserByusername(username: string): User | undefined;
}
