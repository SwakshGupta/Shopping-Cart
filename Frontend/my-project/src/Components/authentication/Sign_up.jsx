import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import axios

function Sign_up() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate hook to navigate to another page

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleChange2 = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8001/api/User/add", {
        Email: email,
        password: password,
      });

      // Handle successful sign-up (e.g., show success message, redirect to login page)
      alert("Sign up successful! Please login to continue.");
      navigate("/Login"); // Redirect to login page
    } catch (error) {
      // Handle sign-up error (e.g., display error message)
      console.error("Sign up error:", error.response.data.message);
      alert("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome to the signup page</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text" // Change input type to "text"
            value={email}
            onChange={handleChange}
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handleChange2}
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>

      <p className="text-gray-600 mt-4">
        Already signed up?{" "}
        <Link to="/Login" className="text-blue-500">
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Sign_up;
