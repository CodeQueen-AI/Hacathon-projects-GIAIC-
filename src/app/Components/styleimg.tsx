import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-3xl text-[#074799]">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-[#074799] inline-flex" />
        </div>
      </div>
      <div className="w-full max-w-3xl bg-gray-100 rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-5 gap-4">
          {/* Casual */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-start col-span-2 relative">
            <div className="w-full h-60 relative">
              <Image
                src="/dress-style-1.png" 
                alt="Casual"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded font-semibold text-gray-800">Casual</div>
          </div>

          {/* Formal */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-start col-span-3 relative">
            <div className="w-full h-60 relative">
              <Image
                src="/dress-style-2.png" // Replace with the actual image URL or import path
                alt="Formal"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded font-semibold text-gray-800">Formal</div>
          </div>

          {/* Party */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-start col-span-3 relative">
            <div className="w-full h-60 relative">
              <Image
                src="/dress-style-3.png" // Replace with the actual image URL or import path
                alt="Party"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded font-semibold text-gray-800">Party</div>
          </div>

          {/* Gym */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col items-start col-span-2 relative">
            <div className="w-full h-60 relative">
              <Image
                src="/dress-style-4.png" // Replace with the actual image URL or import path
                alt="Gym"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white bg-opacity-75 px-2 py-1 rounded font-semibold text-gray-800">Gym</div>
          </div>
        </div>
      </div>
    </div>
  );
}
