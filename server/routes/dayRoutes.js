const express = require("express");

const router = express.Router();

const { getPayer, advanceDay } = require("../controllers/dayController");

const {
  getPayerMiddleware,
  advanceDayMiddleware,
} = require("../middlewares/dayMiddleware");

router.get("/payer", getPayerMiddleware, getPayer);

router.post("/advanceDay", advanceDayMiddleware, advanceDay);

module.exports = router;
