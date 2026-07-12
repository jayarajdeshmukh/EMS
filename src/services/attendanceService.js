import api from "./axiosInstance"; 

export const getAttendance = async () => {
    const res = await api.get("/attendance"); // Added endpoint path
    return res.data;
};

export const deleteAttendance = async (id) => {
    await api.delete(`/attendance/${id}`); // Added endpoint path
};