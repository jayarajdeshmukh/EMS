import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getEmployeeById,
  updateEmployee,
} from "../../services/employeeService";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    jobRole: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const data = await getEmployeeById(id);
      setForm(data);
    } catch (error) {
      console.log(error);
      alert("Failed to load employee.");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee(id, form);

      alert("Employee updated successfully");

      navigate("/employees");
    } catch (error) {
      console.log(error);
      alert("Failed to update employee.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5">
          Edit Employee
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Employee Name"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="text"
            name="jobRole"
            value={form.jobRole}
            onChange={handleChange}
            placeholder="Employee Role"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Employee Email"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Employee Phone"
            className="w-full border p-2 mb-3 rounded"
          />

          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Employee Address"
            className="w-full border p-2 mb-4 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;