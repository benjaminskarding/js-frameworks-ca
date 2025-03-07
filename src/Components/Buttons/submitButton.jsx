import React from "react";
import { Link } from "react-router-dom";
import DecorativeCornersSmall from "../../Utilities/decorativeCornersSmall";

const SubmitButton = ({
  text = "ALL PRODUCTS",
  className = "",
  type = "button",
  href,
  onClick,
}) => {
  if (href) {
    return (
      <Link
        to={href}
        className={`relative flex items-center justify-center border border-black w-72 h-16 cursor-pointer overflow-hidden group select-none ${className}`}
      >
        <span className="absolute inset-0 pointer-events-none" />

        {/* Background fill animation */}
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

        <span className="relative z-10 text-xl font-semibold text-black group-hover:text-white transition-colors duration-500 select-none">
          {text}
        </span>

        <DecorativeCornersSmall />
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`relative flex items-center justify-center border border-black w-72 h-16 cursor-pointer overflow-hidden group select-none ${className}`}
      onClick={onClick}
    >
      <span className="absolute inset-0 pointer-events-none" />

      {/* Background fill animation */}
      <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

      <span className="relative z-10 text-xl font-semibold text-black group-hover:text-white transition-colors duration-500 select-none">
        {text}
      </span>

      <DecorativeCornersSmall />
    </button>
  );
};

export default SubmitButton;
