import api from "./axiosInstance";

// GET ALL EMPLOYEES
export const getEmployees = async () => {
  const res = await api.get("/employees");
  return res.data;
};

// GET SINGLE EMPLOYEE
export const getEmployeeById = async (id) => {
  const res = await api.get(`/employees/${id}`);
  return res.data;
};

// ADD EMPLOYEE
export const addEmployee = async (employee) => {
  const res = await api.post("/employees", employee);
  return res.data;
};

// UPDATE EMPLOYEE
export const updateEmployee = async (id, employee) => {
  const res = await api.put(`/employees/${id}`, employee);
  return res.data;
};

// DELETE EMPLOYEE
export const deleteEmployee = async (id) => {
  const res = await api.delete(`/employees/${id}`);
  return res.data;
};