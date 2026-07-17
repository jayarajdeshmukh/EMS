import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

import {
    getEmployeeById,
    deleteEmployee
} from "../../services/employeeService";



function ViewEmployee(){


    const {id}=useParams();

    const navigate=useNavigate();


    const [employee,setEmployee]=useState(null);





    useEffect(()=>{

        loadEmployee();

    },[]);





    const loadEmployee=async()=>{


        try{

            const data=await getEmployeeById(id);

            setEmployee(data);


        }
        catch(error){

            console.log(error);

        }

    };







    const handleDelete=async()=>{


        const confirmDelete =
        window.confirm(
            "Are you sure you want to delete?"
        );



        if(confirmDelete){


            try{


                await deleteEmployee(id);


                alert(
                    "Employee Deleted Successfully"
                );


                navigate("/employees");


            }
            catch(error){

                console.log(error);

            }


        }


    };








    if(!employee){


        return(

            <div className="flex justify-center items-center h-screen">

                <h2 className="text-xl font-semibold">

                    Loading...

                </h2>

            </div>

        )


    }








    return(


        <div className="min-h-screen bg-gray-100 p-5 md:p-8">



            <h2 className="text-3xl font-bold text-gray-800 mb-6">

                Employee Details

            </h2>







            <div className="
            max-w-2xl 
            mx-auto 
            bg-white 
            rounded-2xl 
            shadow-lg 
            p-6
            ">



                {/* Profile */}

                <div className="flex justify-center mb-6">


                    <div className="
                    w-24
                    h-24
                    rounded-full
                    bg-blue-500
                    flex
                    items-center
                    justify-center
                    text-white
                    text-4xl
                    font-bold
                    ">


                        {employee.name?.charAt(0)}


                    </div>


                </div>







                {/* Details */}


                <div className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-4
                ">



                    <Info
                    title="Name"
                    value={employee.name}
                    />


                    <Info
                    title="Job Role"
                    value={employee.jobRole}
                    />


                    <Info
                    title="Email"
                    value={employee.email}
                    />


                    <Info
                    title="Phone"
                    value={employee.phone}
                    />


                    <div className="md:col-span-2">

                    <Info
                    title="Address"
                    value={employee.address}
                    />

                    </div>



                </div>







                {/* Buttons */}


                <div className="
                flex
                flex-col
                md:flex-row
                gap-4
                mt-8
                ">



                    <button

                    onClick={()=>
                    navigate(`/employees/edit/${id}`)
                    }

                    className="
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    "

                    >

                    ✏️ Edit

                    </button>







                    <button

                    onClick={handleDelete}

                    className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    "

                    >

                    🗑 Delete

                    </button>








                    <button

                    onClick={()=>
                    navigate("/employees")
                    }

                    className="
                    bg-blue-500
                    hover:bg-blue-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    "

                    >

                    ← Back

                    </button>



                </div>




            </div>


        </div>


    )


}






function Info({title,value}){


    return(

        <div className="
        bg-gray-50
        p-4
        rounded-lg
        ">


            <p className="text-sm text-gray-500 font-semibold">

                {title}

            </p>


            <p className="text-gray-800 font-medium break-all">

                {value}

            </p>


        </div>

    )


}



export default ViewEmployee;