import api from "./axiosInstance"; 

export const getDepartments = async () => {
  const res = await api.get("/departments"); // Added endpoint path
  return res.data;
};

export const addDepartment = async (department) => {
  const res = await api.post("/departments", department); // Added endpoint path
  return res.data;
};