import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests

function Login({ setIsLoggedIn }) {
  // Accept setIsLoggedIn as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate hook to navigate to another page

  const handleChangeName = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8001/api/User/login",
        {
          Email: email,
          password: password,
        }
      );

      // Handle successful login (e.g., show success message, redirect to dashboard)
      alert("Login successful!");
      setIsLoggedIn(true); // This will update the login status
      navigate("/Product"); // Redirect to dashboard page
    } catch (error) {
      // Handle login error (e.g., display error message)
      console.error("Login error:", error.response.data.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Welcome back! Please login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            value={email}
            onChange={handleChangeName}
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
            onChange={handleChangePassword}
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </form>

      <p className="text-gray-600 mt-4">
        Not Signed up?{" "}
        <Link to="/signup" className="text-blue-500">
          Signup here
        </Link>
      </p>
    </div>
  );
}

export default Login;
