const mongoose = require("mongoose");

/* A schema defines the stucture of document inside a MongoDB collection. 
        Think of it like a blueprint for each post. */

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    body: {type: String, default: ""},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
});

module.exports = mongoose.model("Post", PostSchema);