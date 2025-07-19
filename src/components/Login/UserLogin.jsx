import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessRegisterToken");
    console.log("Token", token);

    try {
      const response = await axios.post(
        "http://localhost:7000/api/v1/userAuth/registerLogin",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("isVerified", response.data.data.user.isVerified);
      localStorage.setItem("email", response.data.data.user.email);
      console.log(response.data);
      // Navigate to dashboard
      navigate("/");
    } catch (err) {
      console.log("Error for login admin User :-", err.message);
    }
  };

  return (
    <div className="min-h-screen bg-green-200 py-3 px-4 sm:px-6 lg:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full mx-auto space-y-8 bg-white p-8 rounded-xl shadow-2xl "
      >
        {/* Header Section */}
        <div className="text-center">
          <motion.h2
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="text-3xl font-extrabold text-gray-900"
          >
            Welcome
          </motion.h2>
          <p className="mt-2 text-sm text-gray-600">Please LogIn as an User</p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border 
                         border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 
                         focus:outline-none focus:ring-green-500 focus:border-green-500 
                         focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border 
                         border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 
                         focus:outline-none focus:ring-green-500 focus:border-green-500 
                         focus:z-10 sm:text-sm"
                placeholder="Enter your password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600  
                         border-gray-300 rounded cursor-pointer accent-green-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border 
                       border-transparent text-sm font-medium rounded-lg text-white 
                       bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-green-500 transition-colors 
                       duration-200"
            >
              Sign in
            </motion.button>
          </div>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-1 border border-gray-400 rounded-full hover:bg-gray-100 transition-colors">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            height={40}
            width={40}
            alt="Google-logo"
          />
          <span className="text-gray-600">Sign in with Google</span>
        </button>

        {/* Footer Section */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link
            to="/register"
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default UserLogin;
