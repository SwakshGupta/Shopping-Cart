import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Filter Options</h2>
      {/* Filter options */}
      <div className="mb-4">
        <h3 className="font-semibold">Category</h3>
        <ul>
          <li className="cursor-pointer">Category 1</li>
          <li className="cursor-pointer">Category 2</li>
          <li className="cursor-pointer">Category 3</li>
          {/* Add more categories as needed */}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Price Range</h3>
        <ul>
          <li className="cursor-pointer">Under $50</li>
          <li className="cursor-pointer">$50 - $100</li>
          <li className="cursor-pointer">Over $100</li>
          {/* Add more price range options as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
