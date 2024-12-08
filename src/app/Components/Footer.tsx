import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-10 pb-6 border-t">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">SHOP.CO</h2>
            <p className="text-gray-600">
              We have clothes that suit your style and make you proud to wear, from women to men.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">YouTube Playlist</a></li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-600">
          {/* Copyright */}
          <p>Shop.co © 2024, All Rights Reserved</p>

          {/* Payment Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Image src="/Footer.png" alt="footer" width={300} height={300}/>
          </div>
        </div>
      </div>
    </footer>
  );
}
