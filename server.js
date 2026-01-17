require("dotenv").config();
const express = require("express");
const mangoose = require("mongoose");

const ticketsRouter = require("./routes/tickets");
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

const app = express();
app.use(express.json());

