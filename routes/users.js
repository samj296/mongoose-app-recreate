const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Create User

router.post("/", async(req, res) => {
    const user = await User.create
});