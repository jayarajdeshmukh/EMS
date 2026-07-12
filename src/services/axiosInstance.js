import axios from "axios";

const api = axios.create({
  baseURL: "https://ems-backend-du9p.onrender.com",
});

export default api;