const express = require("express");
const router = express.Router();

const { updateDrinkMiddleware } = require("../middlewares/drinkMiddleware");

const { updateDrink } = require("../controllers/drinkController");

router.put("/update/:id", updateDrinkMiddleware, updateDrink);

module.exports = router;
