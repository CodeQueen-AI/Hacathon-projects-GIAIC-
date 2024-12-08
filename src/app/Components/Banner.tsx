import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/B1.svg",
  },
  {
    id: "zara",
    srcUrl: "/B2.svg",
  },
  {
    id: "gucci",
    srcUrl: "/B3.svg",
  },
  {
    id: "prada",
    srcUrl: "/B4.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/B5.svg",
  },
];

const Brands = () => {
  return (
    <div className="bg-black">
      <div className="max-w-frame mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-0 space-x-7">
        {brandsData.map((brand) => (
          <Image
            key={brand.id}
            priority
            src={brand.srcUrl}
            height={0}
            width={0}
            alt={brand.id}
            className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;