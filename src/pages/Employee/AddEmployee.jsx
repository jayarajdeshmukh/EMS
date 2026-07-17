import { useState } from "react";
import { addEmployee } from "../../services/employeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

  const [form, setForm] = useState({
    name: "",
    jobRole: "",
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

    try {

      await addEmployee(form);

      alert("Employee Added Successfully");

      navigate("/employees");

    } catch(error) {

      console.log(error);

      alert("Failed to add employee");

    }

  };


  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-center mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Add Employee
        </h2>

      </div>


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

              className="w-full border border-gray-300 p-3 rounded-lg"

            />

          </div>



          {/* Job Role */}

          <div>

            <label className="block text-gray-700 font-medium mb-2">
              Job Role
            </label>


            <input

              name="jobRole"

              placeholder="Enter employee role"

              value={form.jobRole}

              onChange={handleChange}

              className="w-full border border-gray-300 p-3 rounded-lg"

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

              className="w-full border border-gray-300 p-3 rounded-lg"

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

              className="w-full border border-gray-300 p-3 rounded-lg"

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

              className="w-full border border-gray-300 p-3 rounded-lg"

            />

          </div>




          <div className="flex justify-end gap-4">


            <button

              type="button"

              onClick={() => navigate("/employees")}

              className="px-5 py-2 bg-gray-300 rounded-lg"

            >

              Cancel

            </button>



            <button

              type="submit"

              className="px-6 py-2 bg-blue-600 text-white rounded-lg"

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