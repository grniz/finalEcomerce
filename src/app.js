import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import passport from "passport";

import addLogger from "./middlewares/logger.middleware.js";

import * as dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;
const COOKIE_SECRET = process.env.COOKIE_SECRET;

const app = express();
app.use(cookieParser(COOKIE_SECRET));

const environment = async () => {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Base de datos conectada");
    } catch (error) {
      console.log(error);
    }
  };
  
environment();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());
app.use(addLogger);

const server = app.listen(PORT, () => {
    console.log(`servidor iniciado en puerto ${PORT}!`);
  });
  
  server.on("error", (err) => {
    console.error(err);
  });