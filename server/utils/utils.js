const models = require("../models");
const EmployeeDrink = models.employee_drinks;
const Drink = models.drinks;

const trimToTwoDecimalPlaces = (value) => {
  if (typeof value === "number") {
    return parseFloat(value.toFixed(2));
  }
  return value;
};

// use this to standardize the way we include drinks in our queries
const drinkIncludes = {
  include: [
    {
      model: EmployeeDrink,
      as: "employee_drinks",
      include: [
        {
          model: Drink,
          as: "drinks",
        },
      ],
    },
  ],
};

module.exports = {
  trimToTwoDecimalPlaces,
  drinkIncludes,
};
