import api from "./axiosInstance";

// GET ALL USERS
export const getEmployees = async () => {
  const res = await api.get("/users");
  return res.data.users;
};

// GET SINGLE USER
export const getEmployeeById = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// DummyJSON simulates these operations (not permanently saved)
export const addEmployee = async (data) => {
  const res = await api.post("/users/add", data);
  return res.data;
};

export const updateEmployee = async (id, data) => {
  const res = await api.put(`/users/${id}`, data);
  return res.data;
};

export const deleteEmployee = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};