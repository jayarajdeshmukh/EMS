import {
  useContext,
  useEffect,
  useState,
  useRef
} from "react";

import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../context/ThemeContext";

import {
  FaBell,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaBars,
  FaSignOutAlt,
  FaUserCircle
} from "react-icons/fa";


function Navbar({ setSidebarOpen }) {


  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();


  const [userName,setUserName] = useState("");

  const [openProfile,setOpenProfile] = useState(false);


  const profileRef = useRef();





  useEffect(()=>{

    const user = JSON.parse(
      localStorage.getItem("user")
    );


    if(user){

      setUserName(user.name);

    }


  },[]);






  // Outside click close

  useEffect(()=>{


    const closeDropdown=(e)=>{


      if(
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ){

        setOpenProfile(false);

      }


    };


    document.addEventListener(
      "mousedown",
      closeDropdown
    );


    return()=>{

      document.removeEventListener(
        "mousedown",
        closeDropdown
      );

    };


  },[]);








  const handleLogout=()=>{


    localStorage.removeItem(
      "isLoggedIn"
    );


    localStorage.removeItem(
      "user"
    );


    navigate("/");


  };







return (

<header

className={`
sticky
top-0
z-40
h-16

flex
items-center
justify-between

px-3
xs:px-4
sm:px-5
md:px-6

border-b

transition-all


${
darkMode

?

"bg-gray-900 border-gray-700 text-white"

:

"bg-white border-gray-200 text-gray-800"

}

`}

>







{/* LEFT SIDE */}


<div className="
flex
items-center
gap-2
sm:gap-4
min-w-0
">


{/* Mobile Menu */}

<button

onClick={()=>setSidebarOpen(true)}

className="
md:hidden
text-xl
p-2
hover:scale-110
transition-transform
"

>

<FaBars/>

</button>





<div className="min-w-0">


<h1 className="
font-bold
text-sm
sm:text-lg
md:text-xl
truncate
">

EMS Portal

</h1>



<p className="
hidden
lg:block
text-xs
text-gray-400
">

Employee Management System

</p>


</div>



</div>









{/* RIGHT SIDE */}


<div className="
flex
items-center
gap-1
sm:gap-2
md:gap-4
">







{/* Notification */}

<button

className="
p-2
hover:scale-110
transition-transform
relative
"

>

<FaBell className="
text-sm
sm:text-base
"/>


<span

className="
absolute
top-1
right-1
h-2
w-2
bg-red-500
rounded-full
"

></span>


</button>








{/* Theme */}

<button

onClick={toggleTheme}

className="
p-2
hover:scale-110
transition-transform
"

>


{

darkMode

?

<FaSun className="
text-yellow-400
"/>

:

<FaMoon/>

}


</button>









{/* Profile */}


<div

className="
relative
"

ref={profileRef}

>


<button

onClick={()=>setOpenProfile(!openProfile)}

className="
flex
items-center
gap-1
sm:gap-2
hover:scale-105
transition-transform
"

>




{/* Avatar */}

<div

className="
h-8
w-8

sm:h-10
sm:w-10

rounded-full

bg-gradient-to-r
from-blue-500
to-indigo-600

text-white

flex
items-center
justify-center

font-bold

text-sm
sm:text-base
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







{/* Name desktop only */}

<div

className="
hidden
lg:block
max-w-[120px]
text-left
"

>


<p className="
font-semibold
text-sm
truncate
">

{userName || "User"}

</p>


<p className="
text-xs
text-gray-400
">

Admin

</p>


</div>





<FaChevronDown

className="
hidden
sm:block
text-xs
"

/>


</button>









{/* Dropdown */}

{

openProfile && (


<div

className={`

absolute

right-0

top-12

w-48

sm:w-56

rounded-xl

shadow-xl

p-3

z-50


${
darkMode

?

"bg-gray-800 text-white"

:

"bg-white text-gray-800"

}


`}

>





<button

onClick={()=>{

navigate("/profile");

setOpenProfile(false);

}}

className="
flex
items-center
gap-3
w-full
p-2
hover:scale-105
transition-transform
"

>

<FaUserCircle/>

My Profile


</button>







<button

onClick={handleLogout}

className="
flex
items-center
gap-3
w-full
p-2
mt-2

text-red-500

hover:scale-105

transition-transform

"

>


<FaSignOutAlt/>

Logout


</button>





</div>


)

}



</div>






</div>





</header>

);


}


export default Navbar;