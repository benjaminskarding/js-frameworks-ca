import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";

const ITEM_CATEGORIES = [
  { name: "All Products", path: "/products/all-products" },
  { name: "Fragrances", path: "/products/fragrances" },
  { name: "Toys", path: "/products/toys" },
  { name: "Headsets", path: "/products/headsets" },
  { name: "Harddrives", path: "/products/harddrives" },
  { name: "Bags", path: "/products/bags" },
  { name: "Hairdryers", path: "/products/hairdryers" },
  { name: "Oils", path: "/products/oils" },
  { name: "Shoes", path: "/products/shoes" },
  { name: "Speakers", path: "/products/speakers" },
  { name: "Sunglasses", path: "/products/sunglasses" },
  { name: "Watches", path: "/products/watches" },
  { name: "Earrings", path: "/products/earrings" },
  { name: "Keyboards", path: "/products/keyboards" },
  { name: "Mice", path: "/products/mice" },
  { name: "Chargers", path: "/products/chargers" },
];

export default function MobileHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  function handleProductsClick() {
    setIsDropdownOpen((prev) => !prev);
  }

  return (
    <div className="relative 2xl:hidden flex flex-col bg-[#CFDADE] border-b border-black px-4 z-50">
      <div className="flex items-center justify-between h-16">
        {/* PRODUCTS Button */}
        <button
          ref={buttonRef}
          onClick={handleProductsClick}
          className="flex items-center gap-1 text-xl font-semibold uppercase"
        >
          Products
        </button>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/logoIdea.svg" alt="Site Logo" className="h-8" />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="text-xl font-semibold uppercase">
          Cart {totalItems > 0 && `(${totalItems})`}
        </Link>
      </div>

      {/* Always Rendered Dropdown Menu - absolutely positioned */}
      <div
        className={`
          absolute left-0 top-full w-full transform transition-transform duration-300 origin-top overflow-hidden
          bg-[#d0d9dd] border-t border-black shadow-md
          ${isDropdownOpen ? "scale-y-100" : "scale-y-0 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col gap-2 text-lg font-medium p-4">
          {ITEM_CATEGORIES.map((category) => (
            <li key={category.name}>
              <Link to={category.path} onClick={() => setIsDropdownOpen(false)}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
