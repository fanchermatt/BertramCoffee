const { body, param, validationResult } = require("express-validator");

const updateDrinkMiddleware = (req, res, next) => {
  console.log("Middleware for updating drink");
  next();
};

module.exports = {
  updateDrinkMiddleware,
};
