import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-[#4F46E5] p-4">
        <div class="container mx-auto grid grid-cols-[20%_auto]  text-[15px] md:text-[18px] items-center">
          <div class="logo">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="Logo"
              class="h-9 "
            />
          </div>
          <nav class="flex items-center md:space-x-[50px] space-x-[15px]">
            <Link
              to="/"
              class="text-white hover:text-gray-300  transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/Transaction"
              class="text-white hover:text-gray-300 transition duration-300"
            >
              Transaction
            </Link>
            <Link
              to="/Data"
              class="text-white hover:text-gray-300 transition duration-300"
            >
              Data
            </Link>
            <a
              href="#"
              class="text-white hover:text-gray-300 transition duration-300"
            >
              Contact us
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
