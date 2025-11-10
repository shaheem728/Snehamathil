import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="flex  items-center justify-between md:justify-center px-10 py-4 shadow-md bg-[#2F5D50] fixed w-full z-50">
      <h1 className="text-2xl font-bold text-white rochester-regular">Snehamathil</h1>
       {/* Mobile Toggle Button */}
        <button className="lg:hidden  bg-white py-1 px-3 text-gray-400 rounded-md" onClick={() => setOpen(!open)}>
              <Menu size={30}  />
        </button>
        {/* Menu Items */}
  
      <ul className="hidden md:flex  w-full justify-center gap-8 text-white ">
        <li><Link to="/home" className="hover:font-bold">Home</Link></li>
        <li><Link to="/about" className="hover:font-bold">About</Link></li>
        <li><Link to="/gallery" className="hover:font-bold">Gallery</Link></li>
        <li><Link to="/contact" className="hover:font-bold">Contact</Link></li>
      </ul>
    </nav>
   
     {/* ✅ Mobile Dropdown Smooth */}
      <div
        className={`md:hidden bg-[#2F5D50] w-full fixed top-16 left-0 z-40 shadow-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 py-6 px-8 text-white text-lg">
          <li>
            <Link to="/home" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
