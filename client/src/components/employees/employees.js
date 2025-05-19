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
import { Button } from "antd";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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
    } catch (err) {
      setError(err);
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
    } catch (err) {
      setError(err);
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
    } catch (err) {
      setError(err);
    }
  };

  const createEmployee = async (employeeData) => {
    try {
      const newEmployee = await createNewEmployee(employeeData);

      console.log("newEmployee", newEmployee);
      setEmployees((prev) => [...prev, newEmployee]);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (loading) {
      fetchEmployees();
    }
  }, [loading]);

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
          onRefresh={fetchEmployees}
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
