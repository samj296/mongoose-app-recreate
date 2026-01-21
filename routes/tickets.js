const express = require("express");
const Ticket = require("../models/Ticket");
const router = express.Router();
const {notFound, created} = require("../messages")

//Create ticket
router.post("/", async(req, res) => {
    const{title} = req.body;
    const ticket = await Ticket.create({title});
    res.status(201).json({
        /* 
            `...` It takes an object and spread its properties into another object
            in the following cases created function is returning the object which 
            will be spread into the respose object
        */
        ...created("Ticket"),
        data: ticket
    });
});

//List tickets

router.get("/", async(req,res) => {
    const tickets = (await Ticket.find()).toSorted({createdAt: -1});
    res.json(tickets);
});

//get one ticket (included embedded comments)

router.get("/:id", async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json( notFound("Ticket") );
    res.json(ticket);
});

//Add comment (embedded)
router.post("/:id/comments", async (req, res) => {
    const { body, author } = req.body;

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json( notFound("Ticket") )
});