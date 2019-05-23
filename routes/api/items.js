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

module.exports = router;