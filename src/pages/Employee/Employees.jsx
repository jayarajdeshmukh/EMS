import { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

import {
  getEmployees,
  deleteEmployee
} from "../../services/employeeService";

import { useNavigate } from "react-router-dom";


function Employees() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    loadEmployees();
  }, []);



  const loadEmployees = async () => {

    try {

      setLoading(true);

      const res = await getEmployees();

      setData(res);

    } catch(error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };




  const handleDelete = async(id)=>{

    try{

      await deleteEmployee(id);

      loadEmployees();

    }
    catch(error){

      console.log(error);

    }

  };




  if(loading){

    return (

      <h3 className="
        text-center
        text-xl
        font-semibold
        mt-10
      ">

        Loading...

      </h3>

    );

  }





  return (

    <div className="w-full">


      {/* Header */}

      <div className="
        flex
        flex-col
        sm:flex-row
        justify-between
        items-center
        gap-4
        mb-6
      ">


        <h2 className="
          text-2xl
          sm:text-3xl
          font-bold
          text-gray-800
        ">

          Employees

        </h2>



        <button

          onClick={()=>navigate("/employees/add")}

          className="
            w-full
            sm:w-auto
            bg-blue-600
            text-white
            px-5
            py-2
            rounded-lg
            hover:bg-blue-700
            transition
          "

        >

          + Add Employee

        </button>


      </div>






      {/* ================= DESKTOP TABLE ================= */}



      <div className="
        hidden
        md:block
        overflow-x-auto
        bg-white
        rounded-xl
        shadow-lg
      ">


        <table className="w-full">


          <thead className="
            bg-gray-800
            text-white
          ">


            <tr>


              <th className="px-6 py-3 text-left">
                ID
              </th>


              <th className="px-6 py-3 text-left">
                Name
              </th>


              <th className="px-6 py-3 text-left">
                Role
              </th>


              <th className="px-6 py-3 text-center">
                Actions
              </th>


            </tr>


          </thead>



          <tbody>


          {
            data.map((emp)=>(


              <tr

                key={emp.id}

                className="
                  border-b
                  hover:bg-gray-50
                "

              >



                <td className="px-6 py-4">

                  {emp.id}

                </td>



                <td className="
                  px-6
                  py-4
                  font-medium
                ">


                  {emp.firstName} {emp.lastName}


                </td>



                <td className="px-6 py-4">


                  {emp.company?.title || "N/A"}


                </td>



                <td className="px-6 py-4">


                  <ActionButtons
                    id={emp.id}
                    navigate={navigate}
                    handleDelete={handleDelete}
                  />


                </td>



              </tr>


            ))
          }


          </tbody>



        </table>



      </div>









      {/* ================= MOBILE CARD VIEW ================= */}



      <div className="
        md:hidden
        space-y-4
      ">


        {
          data.map((emp)=>(


            <div

              key={emp.id}

              className="
                bg-white
                rounded-xl
                shadow-md
                p-4
              "

            >


              <div className="
                flex
                justify-between
                mb-2
              ">


                <span className="font-semibold">

                  ID

                </span>


                <span>

                  {emp.id}

                </span>


              </div>





              <div className="
                flex
                justify-between
                mb-2
              ">


                <span className="font-semibold">

                  Name

                </span>


                <span>

                  {emp.firstName} {emp.lastName}

                </span>


              </div>





              <div className="
                flex
                justify-between
                mb-4
              ">


                <span className="font-semibold">

                  Role

                </span>


                <span>

                  {emp.company?.title || "N/A"}

                </span>


              </div>




              <ActionButtons

                id={emp.id}

                navigate={navigate}

                handleDelete={handleDelete}

              />


            </div>


          ))
        }



      </div>




    </div>

  );

}






// Reusable Action Buttons Component

function ActionButtons({
  id,
  navigate,
  handleDelete
}){


return (

<div className="
  flex
  justify-center
  gap-3
">


<button

onClick={()=>navigate(`/employees/${id}`)}

className="
w-8
h-8
rounded-full
bg-blue-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

title="View"

>

<FaEye size={13}/>

</button>




<button

onClick={()=>navigate(`/employees/edit/${id}`)}

className="
w-8
h-8
rounded-full
bg-yellow-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

title="Edit"

>

<FaEdit size={13}/>

</button>





<button

onClick={()=>handleDelete(id)}

className="
w-8
h-8
rounded-full
bg-red-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"

title="Delete"

>

<FaTrash size={13}/>

</button>



</div>

);


}



export default Employees;