import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/axiosInstance";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaBuilding,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleLogin = async () => {

  setError("");
  setLoading(true);

  try {

    const response = await api.post(
  "/person/login",
  {
    email: email,
    password: password
  }
);


    console.log(response.data);


    if(response.data){

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );


      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );


      navigate("/dashboard");

    }


  } catch(error){

    console.log(error);

    setError("Invalid email or password");

  }


  setLoading(false);

};
return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-gradient-to-br
from-gray-950
via-gray-900
to-black
px-4
">


<div className="
w-full
max-w-md
bg-gray-900
rounded-3xl
shadow-2xl
p-8
border
border-gray-700
">


{/* Logo */}

<div className="
flex
justify-center
mb-6
">

<div className="
h-24
w-24
rounded-3xl
bg-gradient-to-br
from-gray-700
to-black
border
border-gray-600
flex
items-center
justify-center
shadow-xl
">


<FaBuilding

className="
text-white
text-5xl
"

/>


</div>

</div>





<h1

className="
text-center
text-3xl
font-bold
text-white
"

>

EMS Portal

</h1>



<p

className="
text-center
text-gray-400
mt-2
mb-8
"

>

Employee Management System

</p>





{/* Email */}


<div className="
relative
mb-5
">


<FaEnvelope

className="
absolute
left-4
top-4
text-gray-500
"

/>



<input


type="email"


placeholder="Enter your email"


value={email}


onChange={(e)=>setEmail(e.target.value)}


className="
w-full
pl-12
py-3
bg-gray-800
text-white
placeholder-gray-500
border
border-gray-700
rounded-xl
outline-none
focus:border-gray-400
focus:ring-2
focus:ring-gray-600
transition
"

/>



</div>






{/* Password */}



<div className="
relative
mb-5
">


<FaLock

className="
absolute
left-4
top-4
text-gray-500
"

/>



<input


type={
showPassword
?
"text"
:
"password"
}


placeholder="Enter your password"


value={password}


onChange={(e)=>setPassword(e.target.value)}


className="
w-full
pl-12
pr-12
py-3
bg-gray-800
text-white
placeholder-gray-500
border
border-gray-700
rounded-xl
outline-none
focus:border-gray-400
focus:ring-2
focus:ring-gray-600
transition
"

/>




<button

type="button"

onClick={()=>
setShowPassword(!showPassword)
}


className="
absolute
right-4
top-4
text-gray-400
hover:text-white
transition
"

>

{
showPassword
?
<FaEyeSlash/>
:
<FaEye/>
}

</button>


</div>







{
error &&


<div

className="
bg-red-900/40
border
border-red-700
text-red-400
p-3
rounded-xl
mb-5
text-center
text-sm
"

>

{error}

</div>


}





{/* Login Button */}



<button


onClick={handleLogin}


disabled={loading}


className="
w-full
bg-white
text-black
py-3
rounded-xl
font-semibold
shadow-lg
hover:bg-gray-200
hover:scale-[1.02]
transition
duration-300
disabled:opacity-50
"


>

{

loading

?

"Authenticating..."

:

"Sign In"

}


</button>






{/* Register */}



<div

className="
mt-6
text-center
"

>


<p

className="
text-gray-400
text-sm
"

>


Don't have an account?


<Link


to="/register"


className="
ml-2
text-white
font-semibold
hover:text-gray-300
underline-offset-4
hover:underline
transition
"

>

Create Account

</Link>


</p>


</div>




</div>


</div>

);
}
export default Login;