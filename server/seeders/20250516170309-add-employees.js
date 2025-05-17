"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          id: uuidv4(),
          name: "Bob Whiton",
          favoriteDrink: "Cappuccino",
          favoriteDrinkCost: 4.5,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Jeremy Crosbie",
          favoriteDrink: "Black",
          favoriteDrinkCost: 2.5,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Lucy Latte",
          favoriteDrink: "Latte",
          favoriteDrinkCost: 5.0,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Mark Mocha",
          favoriteDrink: "Mocha",
          favoriteDrinkCost: 5.25,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Edward Espresso",
          favoriteDrink: "Espresso",
          favoriteDrinkCost: 3.5,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Millie Macchiato",
          favoriteDrink: "Macchiato",
          favoriteDrinkCost: 4.75,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: "Robin Ristretto",
          favoriteDrink: "Ristretto",
          favoriteDrinkCost: 3.0,
          debtOwed: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "Employees",
      {
        name: [
          "Bob Whiton",
          "Jeremy Crosbie",
          "Lucy Latte",
          "Mark Mocha",
          "Edward Espresso",
          "Millie Macchiato",
          "Robin Ristretto",
        ],
      },
      {}
    );
  },
};
