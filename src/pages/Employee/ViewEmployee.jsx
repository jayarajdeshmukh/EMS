import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ViewEmployee() {


  const { id } = useParams();

  const navigate = useNavigate();


  const [employee, setEmployee] = useState(null);



  // Get employee details
  useEffect(() => {


    const getEmployee = async () => {


      try {


        const response = await axios.get(
          `http://localhost:5000/employees/${id}`
        );


        setEmployee(response.data);


      } catch (error) {


        console.log(error);


      }


    };



    getEmployee();



  }, [id]);






  // Delete employee
  const handleDelete = async () => {


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );



    if(confirmDelete){


      try{


        await axios.delete(
          `http://localhost:5000/employees/${id}`
        );



        alert("Employee deleted successfully");



        navigate("/employees");



      }
      catch(error){


        console.log(error);


      }



    }



  };







  if(!employee){


    return (

      <div className="flex justify-center items-center min-h-screen">

        <h2 className="text-xl font-semibold">
          Loading...
        </h2>

      </div>

    );


  }







  return (


    <div className="
      min-h-screen 
      bg-gray-100 
      flex 
      justify-center 
      items-center 
      p-4 
      sm:p-6
    ">



      <div className="
        bg-white 
        shadow-xl 
        rounded-xl 
        w-full 
        max-w-md 
        sm:max-w-lg 
        p-5 
        sm:p-8
      ">




        <h2 className="
          text-2xl 
          sm:text-3xl 
          font-bold 
          text-center 
          mb-6 
          text-gray-800
        ">

          Employee Details

        </h2>






        <div className="space-y-4">





          <EmployeeInfo

            label="ID"

            value={employee.id}

          />





          <EmployeeInfo

            label="Name"

            value={employee.name}

          />





          <EmployeeInfo

            label="Role"

            value={employee.role}

          />





          <EmployeeInfo

            label="Email"

            value={employee.email}

          />





          <EmployeeInfo

            label="Phone"

            value={employee.phone}

          />





          <EmployeeInfo

            label="Address"

            value={employee.address}

          />





        </div>








        {/* Buttons */}

        <div className="
          flex 
          flex-col 
          sm:flex-row 
          gap-3 
          mt-8
        ">



          <button


            onClick={() =>
              navigate(`/employees/edit/${id}`)
            }


            className="
              flex-1
              bg-yellow-500
              hover:bg-yellow-600
              text-white
              py-2.5
              rounded-lg
              transition
            "


          >

            Edit


          </button>






          <button


            onClick={handleDelete}


            className="
              flex-1
              bg-red-600
              hover:bg-red-700
              text-white
              py-2.5
              rounded-lg
              transition
            "


          >

            Delete


          </button>





        </div>








        <button


          onClick={() =>
            navigate("/employees")
          }


          className="
            mt-4
            w-full
            bg-blue-600
            hover:bg-blue-700
            text-white
            py-2.5
            rounded-lg
            transition
          "


        >

          Back


        </button>





      </div>



    </div>



  );

}







// Reusable Detail Component

function EmployeeInfo({label,value}){


  return (

    <div className="
      flex 
      flex-col 
      sm:flex-row 
      sm:justify-between 
      gap-2
      border-b 
      pb-3
    ">


      <b className="text-gray-700">

        {label}

      </b>



      <span className="
        text-gray-600
        text-sm
        sm:text-right
        break-all
      ">

        {value || "-"}

      </span>



    </div>

  );


}





export default ViewEmployee;