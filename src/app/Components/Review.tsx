import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function HappyCustomers() {
  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-left ml-8 mb-12 flex items-center justify-between">
        <div>OUR HAPPY CUSTOMERS</div>
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Box 1 */}
        <div className="w-full md:w-96 p-6 bg-white rounded-lg border-2 border-gray-200 text-center">
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/Review.png" 
              alt="Sarah M."
              width={48} 
              height={48} 
              className="rounded-full mr-4"
            />
            <div className="font-semibold text-xl">Sarah M.</div>
          </div>
          <div className="flex justify-center gap-1 mb-4 text-yellow-500">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada magna nec sem ullamcorper.
          </p>
        </div>

        {/* Box 2 */}
        <div className="w-full md:w-96 p-6 bg-white rounded-lg border-2 border-gray-200 text-center">
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/Review.png"
              alt="Alex K."
              width={48} 
              height={48} 
              className="rounded-full mr-4"
            />
            <div className="font-semibold text-xl">Alex K.</div>
          </div>
          <div className="flex justify-center gap-1 mb-4 text-yellow-500">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <p className="text-gray-500">
            Curabitur a nunc et ante posuere tristique. Nulla vel sem at odio cursus faucibus.
          </p>
        </div>

        {/* Box 3 */}
        <div className="w-full md:w-96 p-6 bg-white rounded-lg border-2 border-gray-200 text-center">
          <div className="flex items-center justify-center mb-2">
            <Image 
              src="/Review.png" 
              alt="James L."
              width={48} 
              height={48} 
              className="rounded-full mr-4"
            />
            <div className="font-semibold text-xl">James L.</div>
          </div>
          <div className="flex justify-center gap-1 mb-4 text-yellow-500">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </div>
          <p className="text-gray-500">
            Sed ac augue sit amet velit scelerisque tristique. Fusce sit amet nisi eu nisl vehicula.
          </p>
        </div>
      </div>
    </div>
  );
}
