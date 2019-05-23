const express = require("express");
const router = express.Router();

//Item Model
const Item = require("../../models/Items");

// @route GET api/items
// @desc GET all items
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a Post
router.post("/", (req, res) => {
  const newItem = new Item();
});

module.exports = router;
