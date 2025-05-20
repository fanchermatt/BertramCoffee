const models = require("../models");
const Drink = models.drinks;
const { trimToTwoDecimalPlaces } = require("../utils/utils");

// Update a drink by ID
const updateDrink = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedDrink = await Drink.findByPk(id);

    if (!updatedDrink) {
      return res.status(404).json({ message: "Drink not found" });
    }

    //trim req.body.cost to 2 decimal places
    if (req.body.cost) {
      req.body.cost = trimToTwoDecimalPlaces(req.body.cost);
      console.log("Trimmed cost:", req.body.cost);
    }
    await updatedDrink.update(req.body);
    // Assuming you want to return the updated drink
    res.json(updatedDrink);
  } catch (error) {
    console.error("Error updating drink:", error);
    res.status(500).json({ message: "An error occured during the operation" });
  }
};

module.exports = {
  updateDrink,
};
