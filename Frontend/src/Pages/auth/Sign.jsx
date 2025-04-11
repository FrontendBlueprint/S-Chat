import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function Sign() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md p-3 mx-4 md:mx-0 md:p-8 rounded-lg shadow-xl bg-gray-800 text-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Create Account</h1>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input 
                type="text" 
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input 
                type="email" 
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input 
                type="password" 
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your password"
                required
                minLength="6"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-200 shadow-md hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-400">Already have an account? </span>
          <Link 
            to="/auth/login" 
            className="text-blue-400 hover:text-blue-300 hover:underline transition duration-200 font-medium"
          >
            Login
          </Link>
        </div>

        <footer className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Created by surajsavle
        </footer>
      </div>
    </div>
  );
}

export default Sign;