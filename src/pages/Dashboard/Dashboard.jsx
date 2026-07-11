import StatCard from "../components/StatCard";
import {
  FaUsers,
  FaUserCheck,
  FaCalendarTimes,
  FaBuilding
} from "react-icons/fa";

function Dashboard() {

  const cards = [
    {
      title: "Total Employees",
      value: "120",
      color: "bg-indigo-600",
      icon: <FaUsers />
    },
    {
      title: "Present Today",
      value: "98",
      color: "bg-green-500",
      icon: <FaUserCheck />
    },
    {
      title: "On Leave",
      value: "12",
      color: "bg-yellow-500",
      icon: <FaCalendarTimes />
    },
    {
      title: "Departments",
      value: "5",
      color: "bg-red-500",
      icon: <FaBuilding />
    }
  ];


  return (

    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Header */}

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h2>

        <p className="text-gray-500 mt-1">
          Welcome back! Here's your employee overview.
        </p>

      </div>



      {/* Stats Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


        {
          cards.map((card, index) => (

            <div
              key={index}
              className={`
                ${card.color}
                text-white 
                rounded-xl 
                shadow-lg 
                p-5 
                flex 
                justify-between 
                items-center
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
                hover:font-bold
                cursor-pointer
              `}
            >


              <div>


                <p className="
                  text-sm 
                  opacity-90
                  transition-all
                  duration-300
                ">
                  {card.title}
                </p>



                <h3 className="
                  text-3xl 
                  font-bold 
                  mt-2
                  transition-all
                  duration-300
                ">
                  {card.value}
                </h3>


              </div>



              <div className="
                text-4xl 
                opacity-80
                transition-all
                duration-300
                hover:scale-125
              ">
                {card.icon}
              </div>


            </div>

          ))
        }


      </div>





      {/* Welcome Section */}


      <div className="
        mt-8 
        bg-white 
        rounded-xl 
        shadow-md 
        p-6
        transition-all
        duration-300
        hover:shadow-xl
      ">


        <h3 className="
          text-2xl 
          font-bold 
          text-gray-800
        ">
          Welcome to EMS Dashboard
        </h3>



        <p className="
          text-gray-600 
          mt-3
        ">
          Manage employees, attendance, leave, salary and departments
          from one centralized system.
        </p>


      </div>






      {/* Quick Actions */}


      <div className="
        mt-8 
        grid 
        grid-cols-1 
        md:grid-cols-3 
        gap-5
      ">



        <div className="
          bg-white 
          p-5 
          rounded-xl 
          shadow 
          transition-all
          duration-300
          hover:shadow-xl
          hover:scale-105
          hover:font-bold
          cursor-pointer
        ">

          <h4 className="font-bold text-lg">
            Employee Management
          </h4>


          <p className="
            text-gray-500 
            mt-2
          ">
            Add, edit and manage employee details.
          </p>


        </div>





        <div className="
          bg-white 
          p-5 
          rounded-xl 
          shadow
          transition-all
          duration-300
          hover:shadow-xl
          hover:scale-105
          hover:font-bold
          cursor-pointer
        ">


          <h4 className="font-bold text-lg">
            Attendance Tracking
          </h4>


          <p className="
            text-gray-500 
            mt-2
          ">
            Monitor daily attendance records.
          </p>


        </div>







        <div className="
          bg-white 
          p-5 
          rounded-xl 
          shadow
          transition-all
          duration-300
          hover:shadow-xl
          hover:scale-105
          hover:font-bold
          cursor-pointer
        ">


          <h4 className="font-bold text-lg">
            Leave Management
          </h4>


          <p className="
            text-gray-500 
            mt-2
          ">
            Manage employee leave requests.
          </p>


        </div>




      </div>



    </div>

  );
}

export default Dashboard;