import React, { useState } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import logo from "../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
function Header() {
      const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-7">
        <div className="max-w-[1300px] mx-auto px-4">
            <div className="flex items-center justify-between">
      <div className="max-w-40">
        <img src={logo} alt="Epic group" />
      </div>

      <div className="hidden lg:block">
        <ul className="uppercase flex items-center gap-6 !lg:text-xl text-gray-500">
          <li>
            <a href="">our company</a>
          </li>
          <li>
            <a href="">our purpose</a>
          </li>
          <li>
            <a href="">our capabilities</a>
          </li>
          <li>
            <a href="">our career</a>
          </li>
        </ul>
      </div>
      {/* Social Icons */}
      <div>
        <ul className="flex items-center gap-3 lg:!text-2xl text-blue-950">
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagramSquare />
            </a>
          </li>
         
        </ul>
      </div>
       {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
    </div>

     {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-4 lg:hidden">
            <ul className="flex flex-col gap-4 uppercase text-gray-600 text-base">
              <li><a href="">our company</a></li>
              <li><a href="">our purpose</a></li>
              <li><a href="">our capabilities</a></li>
              <li><a href="">our careers</a></li>
            </ul>
          </div>
        )}
        </div>
    </header>
  );
}

export default Header;
