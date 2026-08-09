import express from "express";
import { listPostsHandler, createPostHandler } from "./handlers/postHandler.js";

const app = express();

app.use(express.json());

const requestLoggerMiddleware: express.RequestHandler = (req, res, next) => {
    console.log(req.method, req.path, "- body:", req.body);
    next();
};

app.use(requestLoggerMiddleware);

app.get("/posts", listPostsHandler);

app.post("/posts", createPostHandler);

app.listen(3000);