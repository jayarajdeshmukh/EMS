import axios from "axios";

const api = axios.create({
  baseURL: "https://ems-backend-1-lhsi.onrender.com",
});

export default api;