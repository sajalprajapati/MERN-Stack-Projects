import React from 'react';
import Brand from "../assets/Brand.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-[72px] w-full flex items-center justify-between px-10 bg-white border-b border-gray-300">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Brand} alt="Brand Logo" className="h-[42px] w-auto" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-800 text-[14px] font-medium tracking-wide">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-[2px] border-black pb-1"
                  : "hover:text-gray-500 transition"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-[2px] border-black pb-1"
                  : "hover:text-gray-500 transition"
              }
            >
              Location
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-[2px] border-black pb-1"
                  : "hover:text-gray-500 transition"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black border-b-[2px] border-black pb-1"
                  : "hover:text-gray-500 transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Login Button */}
      <div>
        <NavLink to="/login">
          <button className="px-6 py-2 bg-black text-white text-[14px] font-medium rounded-full hover:bg-gray-800 transition">
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
