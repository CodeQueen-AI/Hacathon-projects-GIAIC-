"use client"
import { useState } from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Link from "next/link"; 
import { FiSliders } from "react-icons/fi";

export default function SidebarWithProducts() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initially hidden on small screens
  const [priceRange, setPriceRange] = useState(50);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isDressStyleOpen, setIsDressStyleOpen] = useState(true);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePriceChange = (event: any) => {
    const { value } = event.target;
    setPriceRange(Number(value));
  };

  const products = [
    {
      name: "Gradient Graphic T-shirt",
      price: "$145",
      imageUrl: "/P1.png", 
      id: "1",
    },
    {
      name: "Polo Shirt",
      price: "$180",
      imageUrl: "/P2.png", 
      id: "2",
    },
    {
      name: "Black Tripped T-shirt",
      price: "$120",
      imageUrl: "/P3.png", 
      id: "3",
    },
    {
      name: "Skinny fit jeans",
      price: "$240",
      imageUrl: "/P4.png", 
      id: "4",
    },
    {
      name: "Checkered Shirt",
      price: "$180",
      imageUrl: "/P5.png", 
      id: "5",
    },
    {
      name: "Sleeve Stripped T-shirt",
      price: "$140",
      imageUrl: "/P6.png", 
      id: "6",
    },
    {
      name: "Vertical T-Shirt",
      price: "$214",
      imageUrl: "/P7.png", 
      id: "7",
    },
    {
      name: "Courage Graphic T-shirt",
      price: "$145",
      imageUrl: "/P8.png", 
      id: "8",
    },
    {
      name: "Loose Fits Short",
      price: "$80",
      imageUrl: "/P9.png", 
      id: "9",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Filter Button for Small Screens */}
      {/* <div className="md:hidden fixed top-4 right-4 z-50">
        <div 
          onClick={toggleSidebar} 
          className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-400 cursor-pointer"
        >
          <FiSliders className="text-white text-2xl" />
        </div> */}
        <div className="md:hidden top-48 left-4 z-50">
  <div
    onClick={toggleSidebar}
    className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-200 cursor-pointer"
  >
    <FiSliders className="text-black text-2xl" />
  </div>
</div>


    

      {/* Sidebar */}
      <div
        className={`h-full w-full md:w-64 bg-gray-100 p-5 shadow-lg md:rounded-lg border border-gray-300 md:ml-10 mt-10 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block transition-all duration-300 ease-in-out`}
      >
        <div className="filter-section">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Filter</h2>
            <FiSliders className="cursor-pointer" />
          </div>
          <hr className="my-4 border-t border-gray-300" />

          {/* Clothes Category */}
          <div className="clothes-category">
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-base text-gray-700">
                T-Shirts <IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Shorts <IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Shirts <IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Hoodie <IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Jeans <IoIosArrowForward />
              </li>
            </ul>
          </div>
          <hr className="my-4 border-t border-gray-300" />

          {/* Price Range */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Price</h2>
            <IoIosArrowDown
              className="cursor-pointer"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            />
          </div>
          {isPriceOpen && (
            <div className="flex flex-col items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={priceRange}
                onChange={handlePriceChange}
                className="w-full bg-black h-2 appearance-none cursor-pointer rounded-lg"
              />
              <div className="flex justify-between mt-2 w-full">
                <span>{priceRange}%</span>
              </div>
            </div>
          )}
          <hr className="my-4 border-t border-gray-300" />

          {/* Size Selection */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Size</h2>
            <IoIosArrowDown
              className="cursor-pointer"
              onClick={() => setIsSizeOpen(!isSizeOpen)}
            />
          </div>
          {isSizeOpen && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {[
                "XX-Small",
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large",
                "3X-Large",
                "4X-Large",
              ].map((size) => (
                <div
                  key={size}
                  className="h-12 flex justify-center items-center border rounded-full border-gray-300 text-black hover:bg-black hover:text-white cursor-pointer"
                >
                  {size}
                </div>
              ))}
            </div>
          )}
          <hr className="my-4 border-t border-gray-300" />

          {/* Dress Style */}
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dress Style</h2>
            <IoIosArrowDown
              className="cursor-pointer"
              onClick={() => setIsDressStyleOpen(!isDressStyleOpen)}
            />
          </div>
          {isDressStyleOpen && (
            <ul className="space-y-3 mt-3">
              <li className="flex justify-between items-center text-base text-gray-700">
                Casual<IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Formal<IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Party<IoIosArrowForward />
              </li>
              <li className="flex justify-between items-center text-base text-gray-700">
                Gym<IoIosArrowForward />
              </li>
            </ul>
          )}
          <hr className="my-4 border-t border-gray-300" />

          {/* Apply Filter Button */}
          <div className="mt-8 flex justify-center">
            <button className="w-full h-12 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="w-full md:w-3/4 mt-10 md:ml-10">

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Product Image with Link */}
              <Link href={`/${product.id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500} 
                  height={250} 
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
              </Link>
              {/* Product Description */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>

                {/* Static 5 Star Rating */}
                <div className="flex mt-2">
                  <IoIosStar className="text-yellow-500" />
                  <IoIosStar className="text-yellow-500" />
                  <IoIosStar className="text-yellow-500" />
                  <IoIosStar className="text-yellow-500" />
                  <IoIosStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex flex-col justify-between items-center mt-6">
          <div className="flex justify-between items-center w-full">
            <button className="px-4 py-2 bg-white rounded-md text-black transition duration-300 border-2 border-gray-300 flex items-center">
              <IoIosArrowRoundBack className="w-5 h-5 mr-2" />
              Previous
            </button>
            <button className="px-4 py-2 bg-white text-black rounded-md transition duration-300 border-2 border-gray-300 flex items-center">
              Next
              <IoIosArrowRoundForward className="w-5 h-5 ml-2" />
            </button>
          </div>
          <hr className="w-full mt-4 border-t-2 border-gray-400" />
        </div>
      </div>
    </div>
  );
}
