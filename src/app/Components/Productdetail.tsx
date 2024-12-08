// components/ProductDetail.js
"use client"
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const ProductDetail = () => {

  return (
    <div className='mb-[100px] mt-[100px]'>
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#FB2576]">
          Product Detail Page
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#DA0C81] inline-flex" />
        </div>
      </div>
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/A1.png"
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-extrabold mb-1">GRADIENT GRAPHIC <br />T-SHIRT</h1>
            <div className="flex mb-4">
              <span className="flex items-center text-yellow-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <span className="text-gray-600 ml-3">4.5/5</span>
              </span>
            </div>
            <div className="mb-4">
              <p className='text-black text-lg'>$260</p>
              <span className='text-gray-500 text-lg'><del>$300</del></span>
              <div className="bg-pink-200 text-pink-700 text-sm rounded-full px-2 py-1 inline-block ml-3">
                40% off
              </div>
            </div>
            <p className="leading-relaxed">A gradient graphic t-shirt features a smooth transition of colors, creating a visually appealing and trendy design. These t-shirts are perfect for both casual and stylish occasions, adding a modern and vibrant touch to your wardrobe.</p>
            <hr className="my-4 border-t border-gray-300" />
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Colors</span>
                <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>Small</option>
                    <option>Large</option>
                    <option>X-Large</option>
                    <option>3X-Large</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              {/* Quantity Button */}
              <div className="flex items-center space-x-2">
                <button
                  className="px-4 py-2 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300"
                >
                  -
                </button>
                <span className="text-lg font-semibold">1</span>
                <button
                  className="px-4 py-2 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className="px-6 py-2 bg-black text-white font-semibold rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProductDetail;
