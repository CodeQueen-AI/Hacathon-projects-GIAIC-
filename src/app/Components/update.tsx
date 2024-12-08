import { TfiEmail } from "react-icons/tfi";

export default function SubscribeSection() {
  return (
    <div className="bg-black text-white px-4 py-10 md:px-8 lg:px-16">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-start gap-6">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-left">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h1>

        {/* Search Bars */}
        <div className="flex flex-col w-full md:w-auto gap-4 md:ml-10">
          {/* First Search Bar with Icon on the Left */}
          <div className="relative flex items-center">
            <TfiEmail className="absolute left-20 text-gray-700" />
            <input
              type="email"
              placeholder="Enter your Gmail address"
              className="pl-12 py-3 text-black rounded-full outline-none w-full md:w-80 lg:w-96 text-center placeholder:text-gray-500"
            />
          </div>

          {/* Second Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Subscribe to our letter"
              className="pl-12 py-3 text-black rounded-full outline-none w-full md:w-80 lg:w-96 text-center placeholder:text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
