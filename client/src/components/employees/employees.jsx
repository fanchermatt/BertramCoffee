import { useState, useEffect } from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeEditModal from "./EmployeeEditModal"; // Adjust the import path as necessary
import EmployeeCreateModal from "./EmployeeCreateModal"; // Adjust the import path as necessary
import {
  getEmployees,
  deleteEmployee,
  updateDrink,
  updateEmployee,
  createNewEmployee,
} from "./EmployeeApi"; // Adjust the import path as necessary
import { Button, message } from "antd";

const Employee = ({ employees, setEmployees, dayAdvanced, setDayAdvanced }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [messageApi, contextHolder] = message.useMessage();

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const onEdit = (employee) => {
    setSelectedEmployee(employee);
    setModalVisible(true);
  };

  const onCancel = () => {
    setModalVisible(false);
    setCreateModalVisible(false);
    setSelectedEmployee(null);
  };

  const onDelete = async (employee) => {
    try {
      await deleteEmployee(employee.id);
      setEmployees((prev) => prev.filter((emp) => emp.id !== employee.id));
      messageApi.success("Employee deleted successfully");
    } catch (err) {
      setError(err);
      messageApi.error("Failed to delete employee");
    }
  };

  const saveDrink = async (id, drinkData) => {
    try {
      const updatedDrink = await updateDrink(id, drinkData);
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.employee_drinks.drinks.id === id
            ? {
                ...emp,
                employee_drinks: {
                  ...emp.employee_drinks,
                  drinks: updatedDrink,
                },
              }
            : emp
        )
      );
      messageApi.success("Drink updated successfully");
    } catch (err) {
      setError(err);
      messageApi.error("Failed to update drink");
    }
  };
  const saveEmployee = async (id, employeeData) => {
    try {
      const updatedEmployee = await updateEmployee(id, employeeData);
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === id ? { ...emp, ...updatedEmployee } : emp
        )
      );
      messageApi.success("Employee updated successfully");
    } catch (err) {
      setError(err);
      messageApi.error("Failed to update employee");
    }
  };

  const createEmployee = async (employeeData) => {
    try {
      const newEmployee = await createNewEmployee(employeeData);

      setEmployees((prev) =>
        [...prev, newEmployee].sort((a, b) => a.balance - b.balance)
      );

      messageApi.success("Employee created successfully");
      setCreateModalVisible(false);
    } catch (err) {
      setError(err);
      messageApi.error("Failed to create employee");
    }
  };

  useEffect(() => {
    if (loading) {
      fetchEmployees();
    }
    if (dayAdvanced) {
      fetchEmployees();
      setDayAdvanced(false);
    }
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {error && <p>Error fetching employees: {error.message}</p>}
          {loading && <p>Loading...</p>}
          {!loading && !error && <h1>Employees ({employees.length})</h1>}
          {!loading && !error && employees.length === 0 && (
            <p>No employees found.</p>
          )}
        </div>
        {contextHolder}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "1rem",
          }}
        >
          <Button
            type='primary'
            onClick={() => {
              setCreateModalVisible(true);
            }}
          >
            Add Employee
          </Button>
        </div>
      </div>
      {modalVisible && (
        <EmployeeEditModal
          visible={modalVisible}
          employee={selectedEmployee}
          onCancel={onCancel}
          saveDrink={saveDrink}
          saveEmployee={saveEmployee}
        />
      )}
      {createModalVisible && (
        <EmployeeCreateModal
          visible={createModalVisible}
          onCancel={onCancel}
          createEmployee={createEmployee}
        />
      )}

      <EmployeeTable data={employees} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Employee;
