const express = require("express");
const router = express.Router();

const Item = require("../models/Item");

router.get("/", (req, res, next) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

router.post("/", (req, res, next) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

router.delete("/:id", (req, res, next) => {
  Item.findById(req.params.id)
    .then((item) =>
      item.remove().then(() =>
        res.json({
          success: true,
        })
      )
    )
    .catch((err) => res.json({ success: false }));
});

module.exports = router;
