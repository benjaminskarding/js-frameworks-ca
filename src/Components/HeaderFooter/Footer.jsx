import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full text-[#4F4F4F] border border-[#4F4F4F] mx-auto mt-32">
      {/* Logo + Tagline Section */}
      <div className="border-b border-[#4F4F4F] p-6 flex flex-col items-center justify-center relative text-center">
        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rotate-90"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rotate-180"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-black rotate-0"></div>
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-black -rotate-90"></div>

        <img src="/logoIdea.svg" alt="tidvar logo" className="h-12 my-2" />
        <div className="w-64 lg:w-[30rem] border-t border-black mb-4"></div>
        <h2 className="text-lg lg:text-xl font-semibold">
          THE DESTINATION FOR ALL THINGS UNIQUE
        </h2>
      </div>

      {/* Contact & About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#4F4F4F]">
        <Link
          to="/contact"
          className="border-b lg:border-b-0 lg:border-r border-[#4F4F4F] p-4 relative group flex items-center justify-center overflow-hidden"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 text-lg lg:text-2xl font-semibold uppercase group-hover:text-white transition-colors duration-500 ease-in-out">
            CONTACT
          </span>
        </Link>

        <Link
          to="/about"
          className="p-4 relative group flex items-center justify-center overflow-hidden"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 text-lg lg:text-2xl font-semibold uppercase group-hover:text-white transition-colors duration-500 ease-in-out">
            ABOUT US
          </span>
        </Link>
      </div>

      {/* Bottom Links Section - Phone Layout at 1029px */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border-[#4F4F4F]">
        <Link
          to="/faq"
          className="border-b lg:border-b-0 lg:border-r border-[#4F4F4F] p-4 relative group flex items-center justify-center overflow-hidden"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 text-lg lg:text-2xl font-semibold uppercase group-hover:text-white transition-colors duration-500 ease-in-out">
            FAQ
          </span>
        </Link>

        <Link
          to="/delivery-returns"
          className="border-b lg:border-b-0 lg:border-r border-[#4F4F4F] p-4 relative group flex items-center justify-center overflow-hidden"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 text-lg lg:text-2xl font-semibold uppercase group-hover:text-white transition-colors duration-500 ease-in-out">
            DELIVERY & RETURNS
          </span>
        </Link>

        <Link
          to="/privacy-policy"
          className="p-4 relative group flex items-center justify-center overflow-hidden text-center"
        >
          <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
          <span className="relative z-10 text-lg lg:text-2xl font-semibold uppercase group-hover:text-white transition-colors duration-500 ease-in-out">
            PRIVACY POLICY
          </span>
        </Link>
      </div>
    </footer>
  );
}
