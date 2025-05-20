const models = require("../models");
const Employee = models.employees;
const Drink = models.drinks;
const EmployeeDrink = models.employee_drinks;

const { trimToTwoDecimalPlaces, drinkIncludes } = require("../utils/utils");

const getAllEmployees = async (req, res) => {
  try {
    let employees = await Employee.findAll(drinkIncludes);

    //sort them by balance to return
    employees = employees.sort((a, b) => {
      return a.balance - b.balance;
    });

    res.json(employees);
  } catch (err) {
    console.error("Error fetching employees:", err);
    res
      .status(500)
      .json({ message: "An error occured while performing the operation" });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    console.error("Error fetching employee:", err);
    res
      .status(500)
      .json({ message: "An error occured while performing the operation" });
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const { name, balance, drinkName, drinkCost } = req.body;
    // create a new employee
    const employee = await Employee.create({
      name,
      balance,
    });

    // //create a new drink
    const drink = await Drink.create({
      name: drinkName,
      cost: drinkCost,
    });

    // //create a new employee_drink
    const employee_drink = await EmployeeDrink.create({
      employeeId: employee.dataValues.id,
      drinkId: drink.dataValues.id,
    });

    const returnEmployee = await Employee.findByPk(
      employee.dataValues.id,
      drinkIncludes
    );

    res.status(201).json(returnEmployee);
  } catch (err) {
    console.error("Error creating employee:", err);
    res
      .status(500)
      .json({ message: "An error occured while performing the operation" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    // trim req.body.balance to 2 decimal places
    if (req.body.balance) {
      req.body.balance = trimToTwoDecimalPlaces(req.body.balance);
    }
    await employee.update(req.body);
    await employee.save();

    res.json(employee);
  } catch (err) {
    console.error("Error updating employee:", err);
    res
      .status(500)
      .json({ message: "An error occured while performing the operation" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);

    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    await employee.destroy();

    // Delete the associated employee_drink records
    await EmployeeDrink.destroy({
      where: {
        employeeId: req.params.id,
      },
    });

    res.json({ message: "Employee deleted" });
  } catch (err) {
    console.error("Error deleting employee:", err);
    res
      .status(500)
      .json({ message: "An error occured while performing the operation" });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
