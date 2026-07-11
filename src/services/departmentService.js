import axios from "axios";

const API_URL = "http://localhost:5000/departments";


export const getDepartments = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};


export const addDepartment = async (department) => {
  const res = await axios.post(API_URL, department);
  return res.data;
};