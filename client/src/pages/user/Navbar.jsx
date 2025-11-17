import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between  px-10 py-4 shadow-md bg-[#2F5D50] fixed w-full z-50">
        <h1 className=" text-2xl  font-bold text-white rochester-regular">
          Sajina Construction
        </h1>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <Menu size={25} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-[60%] text-xl  gap-10 text-white">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-thin hover:font-bold"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-thin hover:font-bold"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-thin hover:font-bold"
              }
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-thin hover:font-bold"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#2F5D50] w-full fixed top-16 left-0 z-40 shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 py-6 px-8 text-white text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "font-bold" : ""
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-bold" : ""
              }
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "font-bold" : ""
              }
              onClick={() => setOpen(false)}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "font-bold" : ""
              }
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
