import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const response = await axios.get(
      "https://ems-backend-1-lhsi.onrender.com/users"
    );


    console.log("Users API:", response.data);


    const user = response.data.find(
      (u) =>
        u.email.trim() === email.trim() &&
        u.password.trim() === password.trim()
    );


    if(user){

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );


      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );


      navigate("/dashboard");


    }else{

      setError("Invalid email or password");

    }


  } catch(error){

    console.log(error);

    setError("Server connection failed");

  }


  setLoading(false);

};
  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      px-4
    ">


      <div className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-xl
        p-8
      ">


        <div className="flex justify-center mb-6">

          <div className="
            h-20
            w-20
            rounded-2xl
            bg-blue-600
            flex
            items-center
            justify-center
          ">

            <FaBuilding className="
              text-white
              text-4xl
            "/>

          </div>

        </div>



        <h1 className="
          text-center
          text-3xl
          font-bold
        ">
          EMS Portal
        </h1>


        <p className="
          text-center
          text-gray-500
          mb-8
        ">
          Employee Management System
        </p>



        <div className="relative mb-5">

          <FaEnvelope className="
            absolute
            left-4
            top-4
            text-gray-400
          "/>


          <input

            type="email"

            placeholder="Email"

            value={email}

            onChange={(e)=>setEmail(e.target.value)}

            className="
              w-full
              pl-12
              py-3
              border
              rounded-xl
            "

          />

        </div>



        <div className="relative mb-5">


          <FaLock className="
            absolute
            left-4
            top-4
            text-gray-400
          "/>



          <input

            type={
              showPassword
              ? "text"
              : "password"
            }

            placeholder="Password"

            value={password}

            onChange={(e)=>setPassword(e.target.value)}

            className="
              w-full
              pl-12
              pr-12
              py-3
              border
              rounded-xl
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
            "

          >

            {
              showPassword
              ? <FaEyeSlash/>
              : <FaEye/>
            }


          </button>


        </div>



        {
          error &&

          <div className="
            bg-red-100
            text-red-600
            p-3
            rounded-lg
            mb-4
            text-center
          ">

            {error}

          </div>

        }



        <button

          onClick={handleLogin}

          disabled={loading}

          className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            font-semibold
          "

        >

          {
            loading
            ? "Authenticating..."
            : "Sign In"
          }


        </button>



      </div>


    </div>

  );

};


export default Login;