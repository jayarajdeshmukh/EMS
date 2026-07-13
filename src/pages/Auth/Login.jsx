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
        "https://ems-backend-1-lhsi.onrender.com/employees",
      );

      const user = response.data.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        localStorage.setItem("isLoggedIn", "true");

        localStorage.setItem("user", JSON.stringify(user));

        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.log(error);

      setError("Server connection failed");
    }

    setLoading(false);
  };

  return (
    <div
      className="
min-h-screen
flex
items-center
justify-center

bg-gray-100

dark:bg-gray-950

px-4

relative
overflow-hidden
"
    >
      {/* Background */}

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

      {/* Card */}

      <div
        className="
relative

w-full
max-w-md

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
        {/* Logo */}

        <div
          className="
flex
justify-center
mb-6
"
        >
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

        {/* Heading */}

        <h1
          className="
text-center
text-3xl
font-bold

text-gray-800
dark:text-white

"
        >
          EMS Portal
        </h1>

        <p
          className="
text-center

text-gray-500
dark:text-gray-400

mt-2
mb-8

"
        >
          Employee Management System
        </p>

        {/* Email */}

        <div className="relative mb-5">
          <FaEnvelope
            className="
absolute
left-4
top-4

text-gray-400

"
          />

          <input
            type="email"
            placeholder="Corporate Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
w-full

pl-12
pr-4

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

        {/* Password */}

        <div className="relative mb-5">
          <FaLock
            className="
absolute
left-4
top-4

text-gray-400

"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

transition

"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="
absolute
right-4
top-4

text-gray-400

hover:scale-110

transition

"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Error */}

        {error && (
          <div
            className="
mb-4

p-3

rounded-lg

bg-red-100

text-red-600

text-center

text-sm

"
          >
            {error}
          </div>
        )}

        {/* Login Button */}

        <button
          onClick={handleLogin}
          disabled={loading}
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
          {loading ? "Authenticating..." : "Sign In"}
        </button>

        {/* Register */}

        <p
          className="
text-center

mt-6

text-gray-600

dark:text-gray-300

"
        >
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="
ml-1

text-blue-600

font-semibold

cursor-pointer

hover:underline

"
          >
            Create Account
          </span>
        </p>

        {/* Footer */}

        <p
          className="
text-center

text-xs

text-gray-400

mt-8

"
        >
          © 2026 EMS Technologies. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
