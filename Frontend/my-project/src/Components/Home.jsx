import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black rounded-md shadow-md text-center text-white">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Home page</h1>
      <div className="flex justify-center mb-4">
        {" "}
        {/* Center the buttons */}
        <Link
          to="/signup"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="inline-block bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;
