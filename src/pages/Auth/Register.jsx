import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaLock,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";


const Register = () => {


const navigate = useNavigate();


const API = "https://ems-backend-1-lhsi.onrender.com";



const [formData,setFormData] = useState({

name:"",
email:"",
phone:"",
address:"",
department:"IT",
password:""

});



const [message,setMessage] = useState("");

const [showPassword,setShowPassword] = useState(false);




const handleChange = (e)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};






const handleSubmit = async(e)=>{


e.preventDefault();



const {
name,
email,
phone,
address,
password
}=formData;



if(!name || !email || !phone || !address || !password){

setMessage("All fields are required");

return;

}




try{


// Check existing email

const usersResponse = await axios.get(
`${API}/person/all`
);



const existingUser = usersResponse.data.find(

(user)=>user.email === email

);



if(existingUser){

setMessage("Account already exists");

return;

}




// Create account

await axios.post(

`${API}/person/save`,

formData

);



setMessage(
"Account created successfully"
);



setTimeout(()=>{

navigate("/");

},1500);



}

catch(error){


console.log(error.response);



setMessage(
"Registration failed"
);


}



};








return(


<div

className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
dark:bg-gray-950
px-4
py-10
relative
overflow-hidden
"

>


<div

className="
absolute
w-96
h-96
bg-blue-400
rounded-full
blur-[140px]
opacity-20
top-0
left-0
"

></div>



<div

className="
absolute
w-96
h-96
bg-indigo-500
rounded-full
blur-[140px]
opacity-20
bottom-0
right-0
"

></div>





<div

className="
relative
w-full
max-w-lg
bg-white/80
dark:bg-gray-900/80
backdrop-blur-xl
border
border-gray-200
dark:border-gray-700
rounded-2xl
shadow-2xl
p-6
sm:p-8
"

>




<div className="
flex
justify-center
mb-6
">


<div

className="
h-20
w-20
rounded-2xl
bg-gradient-to-r
from-blue-600
to-indigo-600
flex
items-center
justify-center
shadow-lg
"

>


<FaBuilding

className="
text-white
text-4xl
"

/>


</div>


</div>






<h1

className="
text-3xl
font-bold
text-center
text-gray-800
dark:text-white
"

>

Create Account

</h1>




<p

className="
text-center
text-gray-500
dark:text-gray-400
mt-2
mb-7
"

>

Join Employee Management System

</p>







{

[

{
name:"name",
icon:<FaUser/>,
placeholder:"Full Name",
type:"text"
},

{
name:"email",
icon:<FaEnvelope/>,
placeholder:"Company Email",
type:"email"
},

{
name:"phone",
icon:<FaPhone/>,
placeholder:"Mobile Number",
type:"text"
},

{
name:"address",
icon:<FaMapMarkerAlt/>,
placeholder:"Address",
type:"text"
}


].map((field,index)=>(


<div

key={index}

className="
relative
mb-4
"

>


<span

className="
absolute
left-4
top-4
text-gray-400
"

>

{field.icon}

</span>



<input

name={field.name}

type={field.type}

placeholder={field.placeholder}

value={formData[field.name]}

onChange={handleChange}


className="
w-full
pl-12
py-3
rounded-xl
bg-gray-50
dark:bg-gray-800
border
border-gray-300
dark:border-gray-700
text-gray-800
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
transition
"

/>


</div>


))

}






<select

name="department"

value={formData.department}

onChange={handleChange}


className="
w-full
mb-4
px-4
py-3
rounded-xl
bg-gray-50
dark:bg-gray-800
border
border-gray-300
dark:border-gray-700
text-gray-800
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
"

>


<option>IT</option>
<option>HR</option>
<option>Finance</option>
<option>Sales</option>


</select>







<div

className="
relative
mb-5
"

>


<FaLock

className="
absolute
left-4
top-4
text-gray-400
"

/>




<input

name="password"

type={
showPassword
?
"text"
:
"password"
}


placeholder="Password"


value={formData.password}


onChange={handleChange}



className="
w-full
pl-12
pr-12
py-3
rounded-xl
bg-gray-50
dark:bg-gray-800
border
border-gray-300
dark:border-gray-700
text-gray-800
dark:text-white
outline-none
focus:ring-2
focus:ring-blue-500
"

/>




<button

type="button"

onClick={()=>setShowPassword(!showPassword)}


className="
absolute
right-4
top-4
text-gray-400
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







<button


type="submit"

onClick={handleSubmit}


className="
w-full
py-3
rounded-xl
bg-gradient-to-r
from-blue-600
to-indigo-600
text-white
font-semibold
shadow-lg
hover:scale-[1.02]
transition
duration-300
"

>


Create Account


</button>






{

message &&

<p

className={`
text-center
mt-4
font-medium
${
message.includes("success")
?
"text-green-600"
:
"text-red-500"
}
`}

>

{message}

</p>


}







<p

className="
text-center
mt-7
text-gray-600
dark:text-gray-300
text-sm
"

>


Already have an account?


<span

onClick={()=>navigate("/")}


className="
ml-2
text-blue-600
font-semibold
cursor-pointer
hover:underline
"

>

Sign In

</span>


</p>




</div>



</div>


);


};


export default Register;