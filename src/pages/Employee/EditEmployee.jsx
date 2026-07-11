import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  getEmployees, 
  updateEmployee 
} from "../../services/employeeService";


function EditEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();


  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    address: ""
  });



  useEffect(() => {

    loadData();

  }, []);



  const loadData = async () => {

    const res = await getEmployees();

    const emp = res.find(
      (e) => e.id === Number(id)
    );


    if(emp){
      setForm(emp);
    }

  };



  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    try {

      await updateEmployee(
        id,
        form
      );


      alert("Employee updated successfully");


      navigate(`/employees/${id}`);


    } catch(error) {

      console.log(error);

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
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Employee Name"
            className="w-full border p-2 mb-3 rounded"
          />



          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Employee Role"
            className="w-full border p-2 mb-3 rounded"
          />
   
           <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Employee Email"
            className="w-full border p-2 mb-3 rounded"
          />
            
             <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Employee phone"
            className="w-full border p-2 mb-3 rounded"
          />

           <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Employee Address"
            className="w-full border p-2 mb-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded"
          >
            Update
          </button>


        </form>


      </div>


    </div>

  );

}


export default EditEmployee;