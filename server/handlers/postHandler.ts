import type { RequestHandler } from "express";
import { db } from "../datastore/index.ts";

export const listPostsHandler: RequestHandler = (request, response) => {
    response.send({ posts: db.listPosts() });
};

export const createPostHandler: RequestHandler = (req, res) => {
    const post = req.body;

    db.createPost(post);

    res.sendStatus(200);
};