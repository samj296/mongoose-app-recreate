const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
    body: {type: String, required: true, trim: true},
    author: {type: String, default: "Anonymous", trim: true},
    createdAt: {type: Date, default: Date.now},
    },
    { _id: false}
);

const TicketSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true},
        status: {type: String, enum: ["open", "closed"], default: "open" },
    },
    {timestamps: true},
);

module.exports = mongoose.model("Ticket", TicketSchema);