import express from "express";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use("/api", apiRoutes);

import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";
app.listen(3000, async () => {
  console.log("server is running on port 3000");
  await connect();
  console.log("mongodb connected");

  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll(0, 10);
    // const users  = await userRepo.create({
    //   email: 'rahul@example.com',
    //   password: '123456', 
    //   name: 'rahul',
    // })
  const users = await userRepo.getAll();
  const likeService = new LikeService();

  await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
});
