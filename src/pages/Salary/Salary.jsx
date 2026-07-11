import {
  FaMoneyBillWave,
  FaUsers,
  FaCalendarCheck,
  FaClock
} from "react-icons/fa";


function Salary() {


  const salaryCards = [
    {
      title: "Total Salary",
      value: "₹ 8,50,000",
      icon: <FaMoneyBillWave />,
      color: "bg-green-500"
    },
    {
      title: "Employees Paid",
      value: "95",
      icon: <FaUsers />,
      color: "bg-indigo-600"
    },
    {
      title: "Pending Salary",
      value: "15",
      icon: <FaClock />,
      color: "bg-yellow-500"
    },
    {
      title: "Pay Date",
      value: "30 July",
      icon: <FaCalendarCheck />,
      color: "bg-red-500"
    }
  ];



  const salaryData = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      salary: "₹45,000",
      status: "Paid"
    },
    {
      id: 2,
      name: "Priya Patil",
      role: "HR Manager",
      salary: "₹55,000",
      status: "Paid"
    },
    {
      id: 3,
      name: "Amit Joshi",
      role: "Backend Developer",
      salary: "₹50,000",
      status: "Pending"
    }
  ];



  return (

    <div className="
      min-h-screen
      bg-gray-100
      p-4
      md:p-6
    ">



      {/* Header */}

      <div className="mb-6">

        <h1 className="
          text-3xl
          font-bold
          text-gray-800
        ">
          Salary Management
        </h1>


        <p className="
          text-gray-500
          mt-1
        ">
          Manage employee salary details and payments.
        </p>


      </div>





      {/* Salary Cards */}


      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
      ">


        {
          salaryCards.map((card,index)=>(

            <div
              key={index}
              className={`
                ${card.color}
                text-white
                rounded-xl
                p-5
                shadow-lg
                flex
                justify-between
                items-center
                transition
                duration-300
                hover:scale-105
              `}
            >

              <div>

                <p className="text-sm opacity-90">
                  {card.title}
                </p>


                <h2 className="
                  text-2xl
                  font-bold
                  mt-2
                ">
                  {card.value}
                </h2>

              </div>


              <div className="text-4xl opacity-80">
                {card.icon}
              </div>


            </div>

          ))
        }


      </div>







      {/* Salary Table */}


      <div className="
        mt-8
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
      ">


        <div className="
          p-5
          border-b
        ">

          <h2 className="
            text-xl
            font-bold
            text-gray-800
          ">
            Employee Salary Details
          </h2>

        </div>





        <div className="
          overflow-x-auto
        ">


          <table className="
            w-full
            text-left
          ">


            <thead className="
              bg-gray-200
            ">


              <tr>


                <th className="p-4">
                  ID
                </th>


                <th className="p-4">
                  Employee Name
                </th>


                <th className="p-4">
                  Role
                </th>


                <th className="p-4">
                  Salary
                </th>


                <th className="p-4">
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {
                salaryData.map((employee)=>(

                  <tr
                    key={employee.id}
                    className="
                      border-b
                      hover:bg-gray-50
                    "
                  >


                    <td className="p-4">
                      {employee.id}
                    </td>


                    <td className="p-4 font-medium">
                      {employee.name}
                    </td>


                    <td className="p-4">
                      {employee.role}
                    </td>


                    <td className="p-4">
                      {employee.salary}
                    </td>


                    <td className="p-4">


                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-semibold

                          ${
                            employee.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                          }
                        `}
                      >

                        {employee.status}

                      </span>


                    </td>


                  </tr>

                ))
              }


            </tbody>


          </table>


        </div>


      </div>



    </div>

  );

}


export default Salary;