import { useState } from "react";
import { addEmployee } from "../../services/employeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    address: ""
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    await addEmployee(form);

    navigate("/employees");
  };


  return (

    <div className="min-h-screen bg-gray-100 p-6">


      {/* Header */}
      <div className="flex justify-center mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Add Employee
        </h2>

      </div>



      {/* Form Card */}
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-8">


        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* Name */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Employee Name
            </label>

            <input
              name="name"
              placeholder="Enter employee name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>



          {/* Role */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Role
            </label>

            <input
              name="role"
              placeholder="Enter employee role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>



          {/* Email */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>




          {/* Phone */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>

            <input
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>




          {/* Address */}
          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>

            <textarea
              name="address"
              placeholder="Enter address"
              value={form.address}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>




          {/* Buttons */}
          <div className="flex justify-end gap-4">


            <button
              type="button"
              onClick={() => navigate("/employees")}
              className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>



            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow"
            >
              Save Employee
            </button>


          </div>



        </form>


      </div>


    </div>

  );
}

export default AddEmployee;