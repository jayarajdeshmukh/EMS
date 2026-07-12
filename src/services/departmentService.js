import axios from "axios";

const API_URL =
  "https://ems-backend-du9p.onrender.com/departments";

export const getDepartments = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addDepartment = async (department) => {
  const res = await axios.post(API_URL, department);
  return res.data;
};

export const deleteDepartment = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};