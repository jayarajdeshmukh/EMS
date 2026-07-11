import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDepartment } from "../../services/departmentService";

function AddDepartment() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    code: "",
    head: "",
    employees: 0,
    status: "Active"
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDepartment(form);

    navigate("/department");
  };


  return (
    <div className="p-6">

      <h2 className="text-3xl font-bold mb-6">
        Add Department
      </h2>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 max-w-xl"
      >


        <input
          name="name"
          placeholder="Department Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />


        <input
          name="code"
          placeholder="Department Code"
          value={form.code}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />


        <input
          name="head"
          placeholder="Department Head"
          value={form.head}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />


        <input
          name="employees"
          type="number"
          placeholder="Number of Employees"
          value={form.employees}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        />


        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full border p-3 mb-4 rounded"
        >

          <option>
            Active
          </option>

          <option>
            Inactive
          </option>

        </select>


        <button
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Save Department
        </button>


      </form>


    </div>
  );
}

export default AddDepartment;