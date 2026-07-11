import { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaCalendar,
  FaLock,
  FaHistory
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
function Profile() {

  const [user, setUser] = useState(null);
const navigate = useNavigate();

  useEffect(() => {

    const loggedUser = JSON.parse(
      localStorage.getItem("user")
    );

    setUser(loggedUser);

  }, []);



  if(!user){

    return (
      <h2 className="text-xl font-bold">
        No User Found
      </h2>
    );

  }



  return (

    <div className="p-6 bg-gray-100 min-h-screen">


      {/* Profile Header */}

      <div className="bg-white rounded-xl shadow p-6 flex items-center gap-6">


        {/* Avatar */}

        <div

          className="w-24 h-24 rounded-full bg-indigo-600 
          flex items-center justify-center 
          text-white text-4xl font-bold"

        >

          {
            user.name
            ?
            user.name.charAt(0).toUpperCase()
            :
            "U"
          }


        </div>



        <div>

          <h2 className="text-3xl font-bold text-gray-800">

            {user.name}

          </h2>


          <p className="text-gray-500">

            Admin | HR Administrator

          </p>


          <span className="inline-block mt-2 px-3 py-1 
          bg-green-100 text-green-700 rounded-full text-sm">

            Active

          </span>


        </div>


      </div>






      {/* Information Section */}


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">


        {/* Personal Information */}

        <div className="bg-white rounded-xl shadow p-6">


          <h3 className="text-xl font-bold mb-5">

            Personal Information

          </h3>



          <Info 
            icon={<FaUser/>}
            title="Name"
            value={user.name}
          />


          <Info 
            icon={<FaEnvelope/>}
            title="Email"
            value={user.email}
          />


          <Info 
            icon={<FaPhone/>}
            title="Phone"
            value={user.phone || "Not Available"}
          />


          <Info 
            icon={<FaMapMarkerAlt/>}
            title="Address"
            value={user.address || "Not Available"}
          />


        </div>





        {/* Account Information */}

        <div className="bg-white rounded-xl shadow p-6">


          <h3 className="text-xl font-bold mb-5">

            Account Information

          </h3>



          <Info
            icon={<FaBuilding/>}
            title="Department"
            value={user.department || "IT"}
          />


          <Info
            icon={<FaUser/>}
            title="Role"
            value="Administrator"
          />


          <Info
            icon={<FaCalendar/>}
            title="Joined Date"
            value="01 January 2026"
          />



          <Info
            icon={<FaHistory/>}
            title="Last Login"
            value="Today"
          />


        </div>


      </div>






      {/* Statistics */}


      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">



        <StatCard

          icon={<FaUsers/>}

          title="Employees Managed"

          value="120"

        />



        <StatCard

          icon={<FaBuilding/>}

          title="Departments"

          value="8"

        />



        <StatCard

          icon={<FaCalendar/>}

          title="Attendance"

          value="98%"

        />


      </div>






      {/* Security Section */}


      <div className="bg-white rounded-xl shadow p-6 mt-6">


        <h3 className="text-xl font-bold mb-4">

          Security Settings

        </h3>



        <button

onClick={() => navigate("/change-password")}

className="flex items-center gap-3 
bg-indigo-600 text-white 
px-4 py-2 rounded-lg"

>

<FaLock/>

Change Password

</button>

      </div>






      {/* Recent Activity */}


      <div className="bg-white rounded-xl shadow p-6 mt-6">


        <h3 className="text-xl font-bold mb-4">

          Recent Activity

        </h3>



        <ul className="space-y-3 text-gray-600">


          <li>
            ✔ Added new employee Rahul Sharma
          </li>


          <li>
            ✔ Created IT Department
          </li>


          <li>
            ✔ Approved leave request
          </li>


          <li>
            ✔ Updated employee salary
          </li>


        </ul>


      </div>



    </div>

  );

}





// Reusable Info Component

function Info({icon,title,value}){

  return (

    <div className="flex items-center gap-4 mb-4">


      <div className="text-indigo-600 text-xl">

        {icon}

      </div>


      <div>

        <p className="text-sm text-gray-500">

          {title}

        </p>


        <p className="font-semibold">

          {value}

        </p>


      </div>


    </div>

  );

}






// Statistics Card

function StatCard({icon,title,value}){


return (

<div className="bg-white shadow rounded-xl p-5 flex items-center gap-5">


<div className="text-3xl text-indigo-600">

{icon}

</div>


<div>

<p className="text-gray-500">

{title}

</p>


<h2 className="text-3xl font-bold">

{value}

</h2>


</div>


</div>

);


}



export default Profile;