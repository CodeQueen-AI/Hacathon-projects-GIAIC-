import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

type TopSellerData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const TopSeller = () => {
  const card: TopSellerData[] = [
    {
      id: 1,
      image: "/t1.png",
      title: "Vertical Striped Shirt",
      price: "$212",
      priceWas: "$232",
      rating: 4.7,
    },
    {
      id: 2,
      image: "/t2.png",
      title: "Courage Graphic T-Shirt",
      price: "$145",
      priceWas: "",
      rating: 4.0,
    },
    {
      id: 3,
      image: "/t3.png",
      title: "Loose Fit Bermuda shorts",
      price: "$80",
      priceWas: "",
      rating: 3.5,
    },
    {
      id: 4,
      image: "/t4.png",
      title: "Faded Skinny Jeans",
      price: "$210",
      priceWas: "",
      rating: 4.5,
    },
  ];

  return (
    <div>
      {/* NEW ARRIVALS Heading */}
      <div className="text-center mt-12 mb-6">
        <h1
          className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] text-center"
          style={{ textUnderlinePosition: "from-font" }}
        >
          TOP SELLING
        </h1>
      </div>

      {/* Card Section */}
      <div className="w-[90%] border-b-2 border-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-auto">
        {card.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-2 hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            <div className="relative w-full h-[300px] rounded-[20px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h2 className="text-sm font-semibold mt-2">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IoMdStar
                    key={index}
                    className={`${
                      index < Math.round(item.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    } text-lg`}
                  />
                ))}
              </div>
              <span className="text-sm">{item.rating}/5</span>
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg font-bold text-gray-800">{item.price}</span>
              {item.priceWas && (
                <span className="text-sm line-through text-gray-500">
                  {item.priceWas}
                </span>
              )}
            </div>
          </div>
        ))}

        {/* Centered View All Button Inside Card Section */}
        <div className="col-span-full flex justify-center mt-8 mb-12">
          <button className="text-lg font-Satoshi font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
