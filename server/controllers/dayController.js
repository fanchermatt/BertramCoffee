const models = require("../models");
const Employee = models.employees;
const drinkIncludes = require("../utils/utils").drinkIncludes;
const { getPayerLogic, getMessage } = require("../utils/dayUtils");

const getPayer = async (req, res) => {
  const Employees = await Employee.findAll(drinkIncludes);

  //get the payer
  const payer = getPayerLogic(Employees);

  //get a message to send to the front end
  const message = getMessage(payer.name);

  return res.status(200).json({
    message: message,
    employee: Employees[0],
  });
};

const advanceDay = async (req, res) => {
  try {
    const employees = await Employee.findAll(drinkIncludes);

    //get the payer
    const payer = getPayerLogic(employees);

    //filter out the payer from the employees
    const otherEmployees = employees.filter(
      (employee) => employee.id !== payer.id
    );

    let totalCost = 0;
    //get the cost of the drinks of the other employees (the payer doesn't get credit for paying for their own drinks)
    otherEmployees.forEach((employee) => {
      totalCost += parseFloat(employee.employee_drinks.drinks.cost);
    });

    //update the payer's balance
    await Employee.update(
      {
        balance: parseFloat(payer.balance) + parseFloat(totalCost),
      },
      {
        where: {
          id: payer.id,
        },
      }
    );

    //update the other employees' balance, deducting just the cost of their own drink
    await Promise.all(
      otherEmployees.map((employee) => {
        return employee.update({
          balance:
            parseFloat(employee.balance) -
            parseFloat(employee.employee_drinks.drinks.cost),
        });
      })
    );

    //get the new employee list and payer to return
    const updatedEmployees = await Employee.findAll(drinkIncludes);
    const newPayer = getPayerLogic(updatedEmployees);
    const message = getMessage(newPayer.name);

    return res.status(200).json({
      message: "Day advanced successfully",
      employees: updatedEmployees,
      payer: message,
    });
  } catch (error) {
    console.error("Error advancing day:", error);
    return res.status(500).json({
      message: "An error occurred while advancing the day",
    });
  }
};

module.exports = {
  getPayer,
  advanceDay,
};
