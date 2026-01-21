require("dotenv").config();
const express = require("express");
const mangoose = require("mongoose");

const ticketsRouter = require("./routes/tickets");
const userRouter = require("./routes/users");
const postsRouter = require("./routes/posts");

const app = express();
app.use(express.json());

const endPoints = ["/tickets", "/users", "/posts"];

// Health route

app.get("/",(req, res) => {
    res.send(`API is running. Try ${endPoints.join(", ")}`);
});

// Routes
app.use("/tickets", ticketsRouter);
app.use("/users", userRouter);
app.use("/posts", postsRouter);
