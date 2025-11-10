import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex  items-center px-10 py-4 shadow-md bg-[#2F5D50] fixed w-full z-50">
      <h1 className="text-2xl font-bold text-white rochester-regular">Snehamathil</h1>
      <ul className="flex w-full justify-center gap-8 text-white ">
        <li><Link to="/home" className="hover:font-bold">Home</Link></li>
        <li><Link to="/about" className="hover:font-bold">About</Link></li>
        <li><Link to="/gallery" className="hover:font-bold">Gallery</Link></li>
        <li><Link to="/contact" className="hover:font-bold">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
