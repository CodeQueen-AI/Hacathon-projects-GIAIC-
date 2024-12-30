"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrash, FaTag } from "react-icons/fa6";

const CartPage = () => {
  const [quantities, setQuantities] = useState([1, 1, 1]);

  const updateQuantity = (index: number, value: number) => {
    setQuantities((prev) => {
      const updated = [...prev];
      updated[index] = Math.max(1, updated[index] + value);
      return updated;
    });
  };

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/P1.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/P2.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/P3.png",
    },
  ];

  const subtotal = products.reduce((total, product, index) => total + product.price * quantities[index], 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="px-8 py-6 font-sans bg-gray-50 min-h-screen">
      <div className="text-black font-extrabold text-4xl mb-8">YOUR CART</div>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Product List */}
        <div className="flex flex-col gap-4 flex-grow border border-gray-300 rounded-lg bg-white shadow-md">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-b last:border-none"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4">
                <Image src={product.image} alt={product.name} width={80} height={80} />
                <div>
                  <div className="text-lg font-bold">{product.name}</div>
                  <div className="text-sm text-gray-500">Size: {product.size}</div>
                  <div className="text-sm text-gray-500">Color: {product.color}</div>
                  <div className="text-xl text-black font-extrabold">${product.price}</div>
                </div>
              </div>

              {/* Price, Quantity, and Trash Icon */}
              <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                  <button
                    className="w-8 h-8 flex items-center justify-center text-black"
                    onClick={() => updateQuantity(index, -1)}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    value={quantities[index]}
                    onChange={(e) =>
                      setQuantities((prev) => {
                        const updated = [...prev];
                        updated[index] = Math.max(1, parseInt(e.target.value) || 1);
                        return updated;
                      })
                    }
                    className="w-16 h-8 text-center border-none focus:outline-none focus:ring-0"
                    min="1"
                  />
                  <button
                    className="w-8 h-8 flex items-center justify-center text-black"
                    onClick={() => updateQuantity(index, 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80 p-6 border border-gray-300 rounded-lg shadow-md bg-white mt-6 md:mt-0">
          <div className="text-xl font-bold mb-4">Order Summary</div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Discount (20%)</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Promo Code and Checkout Button */}
          <div className="mt-6 flex flex-col gap-2 items-center">
            <div className="flex items-center border border-gray-300 rounded-full px-1 py-2 flex-grow">
              <FaTag className="text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-grow pl-2 border-none focus:outline-none focus:ring-0"
              />
            </div>
            <button className="w-full bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800">
              Apply
            </button>
          </div>

          <button className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
