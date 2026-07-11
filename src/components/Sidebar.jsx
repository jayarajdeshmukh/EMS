import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";


function Sidebar() {

  const navigate = useNavigate();

  const { darkMode } = useContext(ThemeContext);

  const [userName, setUserName] = useState("");

  const [open, setOpen] = useState(false);



  useEffect(() => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if(user){
      setUserName(user.name);
    }

  }, []);




  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    navigate("/");

  };



  const linkStyle = ({isActive}) => ({

    display:"flex",
    alignItems:"center",
    gap:"12px",
    padding:"10px",
    margin:"5px 0",
    textDecoration:"none",

    color:isActive 
      ? "#fff" 
      : "#D1D5DB",

    background:isActive 
      ? "#4f46e5" 
      : "transparent",

    borderRadius:"8px",

  });




return (

<>


{/* Mobile Menu Button */}

<button

onClick={()=>setOpen(true)}

className="md:hidden fixed top-4 left-4 z-50 
bg-indigo-600 text-white p-3 rounded-lg"

>

<FaBars/>

</button>





{/* Overlay */}

{

open && (

<div

onClick={()=>setOpen(false)}

className="md:hidden fixed inset-0 bg-black/50 z-40"

/>

)

}






{/* Sidebar */}

<div

className={`
fixed top-0 left-0 z-50
h-screen w-[250px]
p-5
transition-transform duration-300

${open 
? "translate-x-0" 
: "-translate-x-full"}

md:translate-x-0

`}

style={{

background: darkMode 
? "#0F172A"
: "#111827",

color:"#fff",

display:"flex",

flexDirection:"column"

}}

>





{/* Close Button Mobile */}

<button

onClick={()=>setOpen(false)}

className="md:hidden absolute right-4 top-4 text-xl"

>

<FaTimes/>

</button>







{/* Logo */}

<h2

className="text-2xl font-bold mb-6"

>

EMS Panel

</h2>







{/* Menu */}

<div

className="flex-1 overflow-y-auto"

>



<NavLink 
to="/dashboard"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Dashboard

</NavLink>




<NavLink 
to="/employees"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Employees

</NavLink>




<NavLink 
to="/employees/add"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Add Employee

</NavLink>




<NavLink 
to="/department"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Department

</NavLink>




<NavLink 
to="/attendance"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Attendance

</NavLink>




<NavLink 
to="/salary"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Salary

</NavLink>




<NavLink 
to="/leave-list"
style={linkStyle}
onClick={()=>setOpen(false)}
>

Leaves

</NavLink>



</div>








{/* Profile */}

<div

className="border-t border-gray-600 pt-4"

>



<NavLink

to="/profile"

style={linkStyle}

onClick={()=>setOpen(false)}

>


<div

className="
w-10 h-10 
rounded-full
bg-indigo-600
flex items-center justify-center
font-bold text-lg
"

>

{

userName

?

userName.charAt(0).toUpperCase()

:

"U"

}

</div>




<div>

<p className="font-semibold">

{userName || "User"}

</p>


<span className="text-xs text-gray-400">

Admin

</span>


</div>



</NavLink>







{/* Logout */}

<button

onClick={handleLogout}

className="
w-full mt-3
p-3
bg-red-600
rounded-lg
flex items-center
gap-3
hover:bg-red-700
"

>

<FaSignOutAlt/>

Logout


</button>



</div>






</div>



</>

);

}


export default Sidebar;