"use client"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
          ENJOY WITH THE SHOPPING
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
        </div>
      </div>
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Section */}
      <div
        className={`h-full w-full md:w-64 bg-gray-100 p-5 shadow-lg md:rounded-lg border border-gray-300 md:ml-10 mt-10 ${isSidebarOpen ? "block" : "hidden"} md:block`}
      >
        <div className="filter-section">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Filter</h2>
            <IoIosArrowDown className="cursor-pointer" />
          </div>
          <hr className="my-4 border-t border-gray-300" />
          
          {/* Clothes Category */}
          <div className="clothes-category">
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-base text-gray-700">T-Shirts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Shorts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Shirts <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Hoodie <IoIosArrowForward /></li>
              <li className="flex justify-between items-center text-base text-gray-700">Jeans <IoIosArrowForward /></li>
            </ul>
          </div>
          
          <hr className="my-4 border-t border-gray-300" />
          
          {/* Colors */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Colors</h2>
            <IoIosArrowDown />
          </div>
          <div className="mt-4 grid grid-cols-5 gap-4">
            <div className="h-8 w-8 rounded-full bg-black"></div>
            <div className="h-8 w-8 rounded-full bg-pink-500"></div>
            <div className="h-8 w-8 rounded-full bg-red-500"></div>
            <div className="h-8 w-8 rounded-full bg-blue-500"></div>
            <div className="h-8 w-8 rounded-full bg-yellow-500"></div>
            <div className="h-8 w-8 rounded-full bg-green-500"></div>
            <div className="h-8 w-8 rounded-full bg-purple-500"></div>
            <div className="h-8 w-8 rounded-full bg-indigo-500"></div>
            <div className="h-8 w-8 rounded-full bg-teal-500"></div>
            <div className="h-8 w-8 rounded-full bg-gray-500"></div>
          </div>

          <hr className="my-4 border-t border-gray-300" />
          
          {/* Size */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Size</h2>
            <IoIosArrowDown />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              XX-Small
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              X-Small
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              Small
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              Medium
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              X-Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              XX-Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              3X-Large
            </div>
            <div className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer">
              4X-Large
            </div>
          </div>

          <hr className="my-4 border-t border-gray-300" />
          
          {/* Dress Style */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dress Style</h2>
            <IoIosArrowDown />
          </div>
          <ul className="space-y-3 mt-3">
            <li className="flex justify-between items-center text-base text-gray-700">Casual<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-gray-700">Formal<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-gray-700">Party<IoIosArrowForward /></li>
            <li className="flex justify-between items-center text-base text-gray-700">Gym<IoIosArrowForward /></li>
          </ul>

          <div className="mt-8 flex justify-center">
            <button className="w-full h-12 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Sidebar Button on Mobile */}
      <div className="md:hidden flex justify-end p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-black text-white rounded-full"
        >
          {isSidebarOpen ? "Close" : "Open"} Sidebar
        </button>
      </div>

      <div className="flex-1 p-5 md:ml-10 mt-10">
        <h1 className="font-bold text-2xl mb-5 flex justify-between items-center">
          Casual
          <span className="text-sm font-normal text-gray-400">
            Show 1-10 of 100 Products Short By : <span className="text-black font-semibold">Most Popular</span>
          </span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product Boxes */}
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Link href="/Product">
                <Image 
                  src={`/P${index + 1}.png`} 
                  alt={`Product ${index + 1}`} 
                  width={300} 
                  height={200} 
                  className="w-full h-36 object-cover rounded-md" 
                />
              </Link>
              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold">Product {index + 1}</h3>
                <div className="flex items-center space-x-1 mt-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-gray-400" />
                </div>
                <p className="text-base text-gray-700 mt-2">Brand</p>
                <p className="text-xl font-bold text-gray-700 mt-2">$145</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-300 hover:text-black transition duration-300">
            Previous
          </button>

          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              1
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              2
            </button>
            <button className="px-3 py-1 bg-gray-300 text-black rounded-full hover:bg-black hover:text-white transition duration-300">
              3
            </button>
          </div>

          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-300 hover:text-black transition duration-300">
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
