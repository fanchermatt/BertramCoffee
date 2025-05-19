import { API_BASE, headers } from "../common/constants";

const getEmployees = async () => {
  const res = await fetch(API_BASE + "employees/all", {
    method: "GET",
    headers: headers,
  });
  if (!res.ok) throw new Error("Failed to fetch employees");
  return res.json();
};

// export async function getEmployeeById(id) {
//     const res = await fetch(`${API_BASE}${id}`);
//     if (!res.ok) throw new Error('Failed to fetch employee');
//     return res.json();
// }

// export async function createEmployee(employeeData) {
//     const res = await fetch(API_BASE, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(employeeData),
//     });
//     if (!res.ok) throw new Error('Failed to create employee');
//     return res.json();
// }

const updateEmployee = async (id, employeeData) => {
  const res = await fetch(`${API_BASE}employees/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeeData),
  });
  if (!res.ok) throw new Error("Failed to update employee");
  return res.json();
};

const updateDrink = async (id, drinkData) => {
  const res = await fetch(`${API_BASE}drinks/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(drinkData),
  });
  if (!res.ok) throw new Error("Failed to update drink");
  return res.json();
};

const deleteEmployee = async (id) => {
  const res = await fetch(`${API_BASE}employees/delete/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Failed to delete employee");
  return res.json();
};

const createNewEmployee = async (employeeData) => {
  const res = await fetch(`${API_BASE}employees/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeeData),
  });
  if (!res.ok) throw new Error("Failed to create employee");
  return res.json();
};

export {
  getEmployees,
  deleteEmployee,
  updateEmployee,
  updateDrink,
  createNewEmployee,
};
