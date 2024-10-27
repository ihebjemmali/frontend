import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ setActiveCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white text-blue-900 shadow-md border border-gray-200 rounded-md mx-4">
      <div className="text-xl font-bold flex items-center">
        <img
          src="src/assets/images/logo.png"
          alt="HandyPro"
          className="h-8 mr-2"
        />
      </div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Find A Professional</Link>
        </li>
        <li className="relative" onMouseEnter={handleMouseEnter}>
          <span className="cursor-pointer" onClick={toggleDropdown}>
            All Category
          </span>
          {dropdownOpen && (
            <div
              className="absolute top-full mt-2 w-40 bg-white text-black border border-gray-200 shadow-lg rounded-md"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <ul className="flex flex-col">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/categories/outdoor"
                    onClick={() => handleCategoryClick("Outdoor")}
                  >
                    Outdoor
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/categories/indoor"
                    onClick={() => handleCategoryClick("Indoor")}
                  >
                    Indoor
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/categories/plumbing"
                    onClick={() => handleCategoryClick("Plumbing")}
                  >
                    Plumbing
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/categories/kitchen"
                    onClick={() => handleCategoryClick("Kitchen")}
                  >
                    Kitchen
                  </Link>
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  <Link
                    to="/categories/renovation"
                    onClick={() => handleCategoryClick("Renovation")}
                  >
                    Renovation
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
          Sign In
        </button>
        <FaUserCircle className="text-blue-900 text-3xl" />
      </div>
    </nav>
  );
};

export default Navbar;