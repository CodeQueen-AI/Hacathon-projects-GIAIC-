import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";

type NewArrData = {
  id: number;
  image: string;
  title: string;
  price: string;
  priceWas: string;
  rating: number;
};

const NewArrival = () => {
  const card: NewArrData[] = [
    {
      id: 1,
      image: "/A1.png", // Corrected path
      title: "T-shirt with Tape Details",
      price: "$120",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/A2.png", // Corrected path
      title: "Skinny Fit Jeans",
      price: "$240",
      priceWas: "$260",
      rating: 4.5,
    },
    {
      id: 3,
      image: "/A3.png", // Corrected path
      title: "Checkered Shirt",
      price: "$180",
      priceWas: "",
      rating: 4.5,
    },
    {
      id: 4,
      image: "/A4.png", // Corrected path
      title: "Sleeve Striped T-Shirt",
      price: "$130",
      priceWas: "$160",
      rating: 4.7,
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
          NEW ARRIVALS
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
                <>
                  <span className="text-sm line-through text-gray-500">
                    {item.priceWas}
                  </span>
                  <button className="bg-pink-100 text-red-600 text-xs py-1 px-2 rounded-full">
                    {Math.round(
                      ((parseFloat(item.priceWas.replace("$", "")) -
                        parseFloat(item.price.replace("$", ""))) /
                        parseFloat(item.priceWas.replace("$", ""))) *
                        100
                    )}
                    % OFF
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-full flex justify-center mt-8 mb-12">
   
        <Link href="./products">
          <button className="text-lg font-medium text-black px-16 py-2 border-2 border-gray-200 rounded-full">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewArrival;
