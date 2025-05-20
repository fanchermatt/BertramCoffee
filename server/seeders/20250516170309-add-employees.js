"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    //get 7 random employee ids, we will need these to seed the employee_drinks table
    //this is not how you should do this in production, but for the sake of this exercise it will suffice
    let employeeIds = [];
    for (let i = 0; i < 7; i++) {
      employeeIds.push(uuidv4());
    }
    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          id: employeeIds[0],
          name: "Bob Whiton",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: employeeIds[1],
          name: "Jeremy Crosbie",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: employeeIds[2],
          name: "Lucy Latte",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: employeeIds[3],
          name: "Matthew Mocha",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: employeeIds[4],
          name: "Edward Espresso",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: employeeIds[5],
          name: "Millie Macchiato",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: employeeIds[6],
          name: "Robin Ristretto",
          balance: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    //do thbe same for drinks
    let drinkIds = [];
    for (let i = 0; i < 7; i++) {
      drinkIds.push(uuidv4());
    }

    await queryInterface.bulkInsert(
      "Drinks",
      [
        {
          id: drinkIds[0],
          name: "Cappuccino",
          cost: 4.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: drinkIds[1],
          name: "Drip Coffee",
          cost: 2.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: drinkIds[2],
          name: "Latte",
          cost: 4.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: drinkIds[3],
          name: "Mocha",
          cost: 5.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: drinkIds[4],
          name: "Espresso",
          cost: 3.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: drinkIds[5],
          name: "Macchiato",
          cost: 4.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: drinkIds[6],
          name: "Ristretto",
          cost: 3.75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "Employee_Drinks",
      [
        {
          id: uuidv4(),
          employeeId: employeeIds[0],
          drinkId: drinkIds[0],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          employeeId: employeeIds[1],
          drinkId: drinkIds[1],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          employeeId: employeeIds[2],
          drinkId: drinkIds[2],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          employeeId: employeeIds[3],
          drinkId: drinkIds[3],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          employeeId: employeeIds[4],
          drinkId: drinkIds[4],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          employeeId: employeeIds[5],
          drinkId: drinkIds[5],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          employeeId: employeeIds[6],
          drinkId: drinkIds[6],
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
    await queryInterface.bulkDelete(
      "Drinks",
      {
        name: [
          "Cappuccino",
          "Drip Coffee",
          "Latte",
          "Mocha",
          "Espresso",
          "Macchiato",
          "Ristretto",
        ],
      },
      {}
    );
  },
};
