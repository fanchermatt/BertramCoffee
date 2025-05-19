const { body, param, validationResult } = require("express-validator");

const getAllEmployeesMiddleware = [
  (req, res, next) => {
    next();
  },
];

const getEmployeeByIdMiddleware = [
  (req, res, next) => {
    next();
  },
];

const createEmployeeMiddleware = [
  (req, res, next) => {
    next();
  },
];

const updateEmployeeMiddleware = [
  (req, res, next) => {
    next();
  },
];

const deleteEmployeeMiddleware = [
  param("id").isUUID().withMessage("Invalid ID"),
  (req, res, next) => {
    const errors = validationResult(req).array();
    const errorString = errors.map((e) => e.msg).join(", ");
    if (errors.length > 0) {
      return res.status(400).json({ success: false, message: errorString });
    }
    next();
  },
];

module.exports = {
  getAllEmployeesMiddleware,
  getEmployeeByIdMiddleware,
  createEmployeeMiddleware,
  updateEmployeeMiddleware,
  deleteEmployeeMiddleware,
};
