const express = require("express");
const router = express.Router();
const mongoDB = require("../db");

router.post("/foodData", async (req, res) => {
  try {
    await mongoDB(); 
    console.log(global.food_items);
    res.send([global.food_items]);
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
