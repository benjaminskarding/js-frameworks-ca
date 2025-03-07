import React from "react";
import { Link } from "react-router-dom";
import DecorativeCornersSmall from "../../Utilities/decorativeCornersSmall";
import { motion, AnimatePresence } from "framer-motion";

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

        {/* Smooth text transition */}
        <AnimatePresence mode="wait">
          <motion.span
            key={text} // animation on text change
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 text-xl font-semibold text-black group-hover:text-white transition-colors duration-500 select-none"
          >
            {text}
          </motion.span>
        </AnimatePresence>

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

      {/* Smooth text transition */}
      <AnimatePresence mode="wait">
        <motion.span
          key={text} // animation on text change
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 text-xl font-semibold text-black group-hover:text-white transition-colors duration-500 select-none"
        >
          {text}
        </motion.span>
      </AnimatePresence>

      <DecorativeCornersSmall />
    </button>
  );
};

export default SubmitButton;
