"use client";
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoSearch, IoCartOutline } from 'react-icons/io5';
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi"; 
import Link from 'next/link';
import Top from './Top'
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  return (
    <div>
      <Top/>
      <nav className="bg-white">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-extrabold text-xl">SHOP.CO</Link>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu className="text-gray-900 text-3xl" />
            </button>
          </div>

          {/* Main Navbar Links*/}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-900 flex items-center"
              >
                Shop
                <IoIosArrowDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Women Clothes</Link>
                  <Link href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Men Clothes</Link>
                </div>
              )}
            </div>
            <Link href="#" className="text-gray-900">On Sale</Link>
            <Link href="#" className="text-gray-900">New Arrival</Link>
            <Link href="#" className="text-gray-900">Brands</Link>
          </div>

          {/* Search icon, Cart and User icons*/}
          <div className="hidden lg:flex items-center space-x-6">
            <IoSearch className="text-gray-500 text-2xl" />
            <Link href="/Product" className="text-gray-700 hover:text-gray-900 text-2xl">
              <IoCartOutline />
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-2xl">
              <FaRegUserCircle />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <Link href="#" className="text-gray-700">Shop</Link>
              <Link href="#" className="text-gray-700">On Sale</Link>
              <Link href="#" className="text-gray-700">New Arrival</Link>
              <Link href="#" className="text-gray-700">Brands</Link>
              
              {/* Search icon, Cart and User icons */}
              <div className="flex items-center space-x-6">
                <IoSearch className="text-gray-500 text-2xl" />
                <Link href="#" className="text-gray-700 hover:text-gray-900 text-2xl">
                  <IoCartOutline />
                </Link>
                <Link href="#" className="text-gray-700 hover:text-gray-900 text-2xl">
                  <FaRegUserCircle />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
