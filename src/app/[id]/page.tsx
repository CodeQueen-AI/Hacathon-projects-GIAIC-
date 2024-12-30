"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Tab from '../Components/tabs';
import Product from '../Components/product'
const ProductDetails = () => {
  const { id } = useParams(); 
  const [quantity, setQuantity] = useState(1); 

  const products = [
    { name: "Gradient Graphic T-shirt", price: "145", cutPrice: "200", discount: "30%", description: "A cool and stylish graphic t-shirt perfect for casual wear.", imageUrl: "/P1.png", id: "1" },
    { name: "Polo Shirt", price: "180", cutPrice: "220", discount: "18%", description: "A comfortable and versatile polo shirt suitable for various occasions.", imageUrl: "/P2.png", id: "2" },
    { name: "Black Tripped T-shirt", price: "120", cutPrice: "180", discount: "33%", description: "A trendy black t-shirt with unique stripes for a modern look.", imageUrl: "/P3.png", id: "3" },
    { name: "Skinny fit jeans", price: "240", cutPrice: "300", discount: "20%", description: "Stylish skinny-fit jeans that offer a sleek and fashionable fit.", imageUrl: "/P4.png", id: "4" },
    { name: "Checkered Shirt", price: "180", cutPrice: "230", discount: "22%", description: "A timeless checkered shirt, perfect for both casual and semi-formal settings.", imageUrl: "/P5.png", id: "5" },
    { name: "Sleeve Stripped T-shirt", price: "140", cutPrice: "180", discount: "22%", description: "A fashionable t-shirt with stripes on the sleeves, ideal for casual wear.", imageUrl: "/P6.png", id: "6" },
    { name: "Vertical T-Shirt", price: "214", cutPrice: "270", discount: "20%", description: "A modern vertical design t-shirt offering a unique and bold style.", imageUrl: "/P7.png", id: "7" },
    { name: "Courage Graphic T-shirt", price: "145", cutPrice: "190", discount: "24%", description: "A graphic t-shirt that inspires courage with bold design and messaging.", imageUrl: "/P8.png", id: "8" },
    { name: "Loose Fits Short", price: "80", cutPrice: "120", discount: "33%", description: "Comfortable loose-fit shorts, perfect for hot weather and relaxation.", imageUrl: "/P9.png", id: "9" },
  ];

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            <div className="lg:w-1/2 w-full h-[500px] relative shadow-lg rounded-xl mb-6 lg:mb-0">
              <Image
                alt={product.name}
                src={product.imageUrl}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-bold mb-3 font-serif relative inline-block group text-black">
                {product.name}
              </h1>

              {/* 5-star Rating */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Price and Discount */}
              <div className="mb-4">
                <div className="flex items-center space-x-4">
                  {/* Original Price */}
                  <span className="text-2xl font-bold text-gray-800">${product.price}</span>

                  {/* Cut Price */}
                  <span className="text-2xl line-through text-gray-500">${product.cutPrice}</span>

                  {/* Discount in a red rounded box */}
                  <span className="text-red-800 bg-red-300 text-sm font-semibold px-2 py-1 rounded-full">
                    {product.discount}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-gray-600 text-lg">{product.description || "No description available."}</p>
              </div>
              <hr className="mt-3 border-gray-300" />

              {/* Color Circles */}
              <div className="mb-4">
                <h2 className="text-1xl font-semibold text-gray-500 mb-4">Select the colors</h2>
                <div className="flex space-x-2">
                  <div className="w-10 h-10 rounded-full bg-red-500 border-2 border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-black"></div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-black"></div>
                </div>
                {/* Horizontal line */}
                <hr className="mt-3 border-gray-300" />
              </div>

              {/* Select the Size */}
              <div className="mb-6">
                <h2 className="text-1xl font-semibold text-gray-500 mb-4">Choose the size</h2>
                <div className="flex flex-wrap space-x-4">
                  {/* Static Size Buttons */}
                  <button className="w-32 h-12 border-2 border-gray-500 text-gray-500 font-semibold text-lg rounded-full bg-white hover:text-white hover:border-white hover:bg-black transition-all duration-300 ease-in-out">
                    Small
                  </button>
                  <button className="w-32 h-12 border-2 border-gray-500 text-gray-500 font-semibold text-lg rounded-full bg-white hover:text-white hover:border-white hover:bg-black transition-all duration-300 ease-in-out">
                    Medium
                  </button>
                  <button className="w-32 h-12 border-2 border-gray-500 text-gray-500 font-semibold text-lg rounded-full bg-white hover:text-white hover:border-white hover:bg-black transition-all duration-300 ease-in-out">
                    Large
                  </button>
                  <button className="w-32 h-12 border-2 border-gray-500 text-gray-500 font-semibold text-lg rounded-full bg-white hover:text-white hover:border-white hover:bg-black transition-all duration-300 ease-in-out">
                    X-Large
                  </button>
                </div>
                <hr className="mt-4 border-gray-300" />
              </div>

              <div className="flex flex-wrap items-center justify-between mb-6">
                {/* Quantity Box */}
                <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2">
                  {/* Minus Button */}
                  <button
                    className="w-8 h-8 flex items-center justify-center text-black"
                    onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                  >
                    <FaMinus />
                  </button>

                  {/* Quantity Input */}
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 h-8 text-center border-none focus:outline-none focus:ring-0 rounded-full"
                    min="1"
                  />

                  {/* Plus Button */}
                  <button
                    className="w-8 h-8 flex items-center justify-center text-black"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>

                {/* Add to Cart Btn */}
                <button className="w-60 text-black border border-black bg-white py-3 rounded-full shadow-md hover:text-white hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Tab/>
      <Product/>
    </div>
  );
};

export default ProductDetails;
