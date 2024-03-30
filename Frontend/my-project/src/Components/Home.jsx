import React, { useState, useEffect } from "react";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  // Use useEffect to delay the appearance of the welcome message
  useEffect(() => {
    setShowWelcome(true);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1
        className={`font-bold text-5xl text-white ${
          showWelcome
            ? "opacity-100 transition-opacity duration-500"
            : "opacity-0"
        }`}
      >
        Welcome to the E-commerce
      </h1>
    </div>
  );
};

export default Home;
