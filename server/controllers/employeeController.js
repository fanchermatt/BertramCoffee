const models = require("../models");
const Employees = models.employees;
const Drink = models.drink;
const EmployeeDrink = models.employee_drinks;
const { Op } = require("sequelize");

// Get all employees
const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employees.findAll({
      where: {
        [Op.and]: [{ deletedAt: null }, { id: { [Op.ne]: null } }],
      },
    });

    res.json(employees);
  } catch (err) {
    next(err);
  }
};

// Get employee by ID
const getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employees.findById(req.params.id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// Create new employee
const createEmployee = async (req, res, next) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    next(err);
  }
};

// Update employee
const updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employees.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

// Delete employee
const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employees.findByIdAndDelete(req.params.id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
