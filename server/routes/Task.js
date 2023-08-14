const express = require("express");
const router = express.Router();

const { Task } = require("../models");

router.get("/" , async (req, res) => {
    const lists = await Task.findAll();
    res.send(lists);
    // res.send( {data: "Tasks are displayed here"})
});

router.post("/" , async (req, res) => {
    const post = req.body;  //get all content from frontend
    await Task.create(post);

    // res.send( {data: "Task uploaded"})
    res.json( post);
});

router.put("/" , (req, res) => {
    res.send( {data: "Task updated"})
});

router.delete("/" , (req, res) => {
    res.send( {data: "Tasks deleted"})
});

module.exports = router;
