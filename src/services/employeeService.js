import api from "./axiosInstance";



// GET ALL EMPLOYEES

export const getEmployees = async()=>{

    const response = await api.get("/person/all");

    return response.data;

};





// GET EMPLOYEE BY ID

export const getEmployeeById = async(id)=>{


    const response = await api.get(`/person/${id}`);

    return response.data;


};





// ADD EMPLOYEE

export const addEmployee = async(employee)=>{


    const response = await api.post(
        "/person/save",
        employee
    );


    return response.data;


};





// UPDATE EMPLOYEE

export const updateEmployee = async(id,employee)=>{


    const response = await api.put(
        `/person/update/${id}`,
        employee
    );


    return response.data;


};





// DELETE EMPLOYEE

export const deleteEmployee = async(id)=>{


    const response = await api.delete(
        `/person/delete/${id}`
    );


    return response.data;


};