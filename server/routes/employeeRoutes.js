const express = require("express");
const router = express.Router();

const {
  getAllEmployeesMiddleware,
  getEmployeeByIdMiddleware,
  createEmployeeMiddleware,
  updateEmployeeMiddleware,
  deleteEmployeeMiddleware,
} = require("../middlewares/employeeMiddleware");

const {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.get("/all", getAllEmployeesMiddleware, getAllEmployees);
router.get("/:id", getEmployeeByIdMiddleware, getEmployeeById);
router.post("/create", createEmployeeMiddleware, createEmployee);
router.put("/update/:id", updateEmployeeMiddleware, updateEmployee);
router.delete("/delete/:id", deleteEmployeeMiddleware, deleteEmployee);

module.exports = router;
