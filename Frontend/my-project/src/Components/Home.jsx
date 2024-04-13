import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Laptop", category: "laptop/pc" },
  { id: 2, name: "Monitor", category: "monitors" },
  { id: 3, name: "Keyboard", category: "keyboards" },
  { id: 4, name: "Mouse", category: "mice" },
  { id: 5, name: "Headphones", category: "audio" },
  { id: 6, name: "Headphones", category: "audio" },
  { id: 7, name: "console", category: "audio" },
  // Add more items as needed
];

function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Home page</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <Link to={`/category/${item.category}`}>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 underline">View {item.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
