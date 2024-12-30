"use client";
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi"; 
import { FiSearch } from "react-icons/fi";
import Link from 'next/link';
import Top from './Top';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); 

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Top />
      <nav className="bg-white shadow-md relative z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-extrabold text-xl text-gray-900">SHOP.CO</Link>
          {/* Hamburger */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="mr-4">
              <GiHamburgerMenu className="text-gray-900 text-3xl" />
            </button>
            <Link href="/cart" className="text-gray-700 hover:text-white text-2xl p-2 rounded-full transition transform hover:scale-110 hover:bg-black hover:shadow-lg">
              <IoCartOutline />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-white text-2xl p-2 rounded-full transition transform hover:scale-110 hover:bg-black hover:shadow-lg">
              <FaRegUserCircle />
            </Link>
          </div>

          {/* Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-900 flex items-center hover:text-black"
              >
                Shop
                <IoIosArrowDown className={`ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Men Clothes</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Womens Clothes</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Kids Clothes</Link>
                </div>
              )}
            </div>
            <Link href="#" className="text-gray-900 hover:text-black hover:underline">On Sale</Link>
            <Link href="#" className="text-gray-900 hover:text-black hover:underline">New Arrival</Link>
            <Link href="#" className="text-gray-900 hover:text-black hover:underline">Brand</Link>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative flex items-center border rounded-full w-80 overflow-hidden">
              <button className="pl-3">
                <FiSearch className="text-gray-500 text-xl" />
              </button>
              <input 
                type="text" 
                className="py-1 px-3 w-full focus:outline-none placeholder-gray-500" 
                placeholder="Search for products..."
              />
            </div>
            <Link href="/cart" className="text-gray-700 hover:text-white text-2xl p-2 rounded-full transition transform hover:scale-110 hover:bg-black hover:shadow-lg">
              <IoCartOutline />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-white text-2xl p-2 rounded-full transition transform hover:scale-110 hover:bg-black hover:shadow-lg">
              <FaRegUserCircle />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-start">
            <div className="bg-white w-full sm:w-96 p-6 mt-12 shadow-lg">
              <div className="flex flex-col space-y-4">
                {/* Close Button (X) */}
                <button onClick={closeMobileMenu} className="text-white text-2xl absolute top-4 right-4">
                  X
                </button>

                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="text-gray-900 flex items-center hover:text-black"
                >
                  Shop
                  <IoIosArrowDown className={`ml-1 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdownOpen && (
                  <div className="mt-2 pl-4">
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Men Clothes</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Womens Clothes</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Kids Clothes</Link>
                  </div>
                )}
                <Link href="#" className="text-gray-700 hover:text-black hover:underline">On Sale</Link>
                <Link href="#" className="text-gray-700 hover:text-black hover:underline">New Arrival</Link>
                <Link href="#" className="text-gray-700 hover:text-black hover:underline">Brands</Link>
                
                {/* Search bar */}
                <div className="flex items-center border rounded-full py-1 px-3 bg-white w-full overflow-hidden">
                  <button className="pl-3">
                    <FiSearch className="text-gray-500 text-xl" />
                  </button>
                  <input 
                    type="text" 
                    className="flex-grow focus:outline-none pl-2 placeholder-gray-500" 
                    placeholder="Search for products..."
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
