import express from "express";
import passport from "passport";
import { connect } from "./config/database.js";
import apiRoutes from "./routes/index.js";
import bodyParser from "body-parser";
import { passportAuth } from "./config/jwt-middleware.js";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(passport.initialize());
passportAuth(passport);
app.use("/api", apiRoutes);


app.listen(3000, async () => {
  console.log("server is running on port 3000");
  await connect();
  console.log("mongodb connected");

});
