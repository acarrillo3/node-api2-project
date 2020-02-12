const express = require("express");
const postRouter = require("./data/router/postRouter.js");
const commentRouter = require("./data/router/commentRouter.js");
const server = express();

server.use(express.json());
server.use("/api/posts", postRouter);
server.use("/api/posts/:id/comments", commentRouter);

const port = 5000;
server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));