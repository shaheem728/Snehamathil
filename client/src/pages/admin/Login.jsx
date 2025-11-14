import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets"; // adjust the path if needed
import { Shield,LogIn } from "lucide-react"; // You can use this icon or replace with assets.ShieldIcon
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import { API_PATHS } from "../../utils/apiPaths";
const Login = () => {
   const[email,setEmail] = useState("");
      const[password,setPassword] = useState("");
      const navigate = useNavigate()
     //Handle Login Form Submit
    const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please enter both email and password");
    return;
  }

  try {
    const response = await axios.post(
      API_PATHS.AUTH.LOGIN,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { access } = response.data;

    if (access) {
      localStorage.setItem("token", access);
      toast.success("Successfully logged in");
      navigate("/dashboard");
    }
  } catch (error) {
    console.error("Login error:", error);

    // Handle backend-provided error messages
    if (error.response) {
      // Server responded with a status code (e.g., 400, 401, 500)
      const backendError =
        error.response.data?.error || error.response.data?.detail || "Login failed";

      toast.error(backendError);
    } else if (error.request) {
      // No response received (network error)
      toast.error("No response from server. Please try again.");
    } else {
      // Error while setting up the request
      toast.error("Something went wrong. Please try again.");
    }
  }
};
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex h-[350px] md:h-auto w-auto md:w-[900px] shadow-xl rounded-xl overflow-hidden bg-white">
        {/* Left Section */}
        <div
          className="w-1/2 bg-[#204E43] text-white flex flex-col justify-center items-center "
          style={{
            backgroundImage: `url(${assets.LoginBG})`, // e.g. adminBg: require('./admin-bg.jpg')
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#204E43]/90 w-full h-full flex flex-col justify-center items-center rounded-l-lg">
            <div className="flex flex-col items-center">
               <Shield className=" w-12 h-12 text-white mb-4" />
              <h1 className="text-2xl font-semibold mb-2">Snehamathil</h1>
              <p className="text-sm opacity-90">Admin Portal</p>
              <p className="text-xs opacity-75 mt-1">Manage your website</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex flex-col justify-center px-5 md:px-10  py-12">
          <div className="flex flex-col items-start md:mb-8">
            <Shield className=" w-8 h-8 text-[#2C5F4F] opacity-90" />
            <h2 className="md:text-2xl font-semibold text-gray-800">
              Welcome Back
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Sign in to access the admin dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-2 md:mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 md:mb-2"
              >
                Email Address
              </label>
              <input
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204E43]"
              />
            </div>

            <div className="mb-2 md:mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 md:mb-2"
              >
                Password
              </label>
              <input
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#204E43]"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#204E43] hover:bg-[#1c463b] text-white font-semibold py-2 rounded-lg transition"
            >
               <LogIn color="#ffffff" className="w-5 h-5  mr-2" />
               Sign In
            </button>
          </form>

          <p className="text-xs text-center text-gray-400 mt-6">
            Secure admin access only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
