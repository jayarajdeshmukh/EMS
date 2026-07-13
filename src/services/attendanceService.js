import axios from "axios";

const API_URL =
  "https://ems-backend-1-lhsi.onrender.com/attendance";

export const getAttendance = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteAttendance = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};