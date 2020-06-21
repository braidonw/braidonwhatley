require("dotenv").config();
import sirv from "sirv";
import express from "express";
import compression from "compression";
import * as sapper from "@sapper/server";
import { json } from "body-parser";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const app = express(); // You can also use Express

app.use(compression({ threshold: 0 })).use(sirv("static", { dev }));

app
  .use(json())
  .use(sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
