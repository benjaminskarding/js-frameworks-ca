import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart } from "lucide-react";
import { findMatchingProduct } from "../../Utilities/findMatchingProduct";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import MobileHeader from "./mobileHeader";
import { ProductContext } from "../../Context/productContext";

const ITEM_CATEGORIES = [
  { name: "All Products", apiName: "", marqueeText: "ALL PRODUCTS" },
  { name: "Fragrances", apiName: "perfume", marqueeText: "FRAGRANCES" },
  { name: "Toys", apiName: "toy", marqueeText: "TOYS" },
  { name: "Headsets", apiName: "headphones", marqueeText: "HEADSETS" },
  { name: "Harddrives", apiName: "hard drive", marqueeText: "HARDDRIVES" },
  { name: "Bags", apiName: "bag", marqueeText: "BAGS" },
  { name: "Hairdryers", apiName: "hairdryer", marqueeText: "HAIRDRYERS" },
  { name: "Oils", apiName: "serum", marqueeText: "OILS" },
  { name: "Shoes", apiName: "shoes", marqueeText: "SHOES" },
  { name: "Speakers", apiName: "speaker", marqueeText: "SPEAKERS" },
  { name: "Sunglasses", apiName: "sunglasses", marqueeText: "SUNGLASSES" },
  { name: "Watches", apiName: "watch", marqueeText: "WATCHES" },
  { name: "Earrings", apiName: "earrings", marqueeText: "EARRINGS" },
  { name: "Keyboards", apiName: "keyboard", marqueeText: "KEYBOARDS" },
  { name: "Mice", apiName: "mouse", marqueeText: "MICE" },
  { name: "Chargers", apiName: "Type-C", marqueeText: "CHARGERS" },
];

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(ITEM_CATEGORIES[0]);
  const [defaultProduct, setDefaultProduct] = useState(null);
  const [featuredProduct, setFeaturedProduct] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { cart } = useContext(CartContext);
  const { allProducts } = useContext(ProductContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1536);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    async function fetchDefaultProduct() {
      const defaultCategory = ITEM_CATEGORIES[1];
      const product = await findMatchingProduct(defaultCategory);
      if (product) setDefaultProduct(product);
    }

    fetchDefaultProduct();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  function handleProductsClick() {
    if (!isDropdownOpen) {
      // Opening
      setIsDropdownOpen(true);
    } else {
      // Closing: Keep z-50 during animation
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
      }, 500); // Matches dropdown animation duration
      setIsDropdownOpen(false);
    }
  }

  async function handleCategoryHover(category) {
    setHoveredCategory(category);
    const product = await findMatchingProduct(category);
    setFeaturedProduct(product);
  }

  function handleSearchChange(e) {
    const query = e.target.value;
    setSearchQuery(query);

    if (!query) {
      setSearchResults([]);
      return;
    }

    // Filter allProducts by title matching the query
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  }

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header
      className={`absolute mt-16 px-20 w-full top-0 left-0 
      ${isHomePage ? "z-50" : isDropdownOpen || closing ? "z-50" : "z-1"}`}
    >
      <div className="grid">
        {/* ---- TOP ROW (NAV) ---- */}
        <div
          className="
            grid grid-cols-8 items-stretch
            border-l border-r border-t border-b border-black
            bg-[#CFDADE]
          "
        >
          {/* Logo */}
          <Link to="/" onClick={() => setIsDropdownOpen(false)}>
            <div className="col-span-1 border-r border-black flex items-center justify-center h-[6rem]">
              <img src="/logoIdea.svg" alt="Site Logo" className="w-auto h-8" />
            </div>
          </Link>

          {/* PRODUCTS */}
          <div className="col-span-1 border-r border-black flex">
            <button
              ref={buttonRef}
              onClick={handleProductsClick}
              className={`
                relative w-full h-full
                flex items-center justify-center gap-1
                text-2xl font-semibold uppercase
                overflow-hidden group
              `}
            >
              {/* Background fill on hover / open */}
              <span
                className={`
                  absolute inset-0 bg-black
                  transition-transform duration-500 ease-in-out
                  ${
                    isDropdownOpen
                      ? /* If dropdown menu open, fill is constantly up */
                        "translate-y-0"
                      : /* If closed, fill slides up on hover */
                        "translate-y-full group-hover:translate-y-0"
                  }
                `}
              />

              {/* Products Text */}
              <span
                className={`
                  relative z-10
                  transition-colors duration-500 ease-in-out
                  ${isDropdownOpen ? "text-white" : "group-hover:text-white"}
                `}
              >
                Products
              </span>

              {/* Chevron with delayed color transition */}
              <ChevronDown
                stroke="currentColor"
                className={`
                  chevron-icon h-6 w-6 relative z-10
                  transition-transform transition-colors duration-500 ease-in-out
                  ${
                    isDropdownOpen
                      ? /* If open, flip + white */
                        "scale-y-[-1] text-white"
                      : /* If closed, flip + white on hover */
                        "group-hover:scale-y-[-1] group-hover:text-white"
                  }
                `}
                style={{
                  // Delayed color transition for chevron
                  transitionProperty: "transform, color",
                  transitionDuration: "500ms, 500ms",
                  transitionTimingFunction: "ease-in-out, ease-in-out",
                  transitionDelay: isDropdownOpen ? "0ms, 500ms" : "0ms, 0ms",
                }}
              />
            </button>
          </div>

          {/* Middle (blankspace) */}
          <div className="relative col-span-4 border-r border-black flex items-center justify-center h-[6rem]">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 bg-transparent text-2xl font-semibold text-center uppercase focus:outline-none w-full h-full"
            />
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div
                className="absolute top-full mt-0 left-[-1px]
    w-[calc(100%+2px)] bg-[#cfdade] border border-black z-10 text-center text-2xl uppercase"
              >
                {searchResults.slice(0, 8).map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    onClick={() => {
                      // Clear the search when user clicks a result
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <div className="col-span-1 border-r border-black flex">
            <Link
              to="/contact"
              onClick={() => setIsDropdownOpen(false)}
              className="
                relative w-full h-full
                flex items-center justify-center
                text-2xl font-semibold uppercase
                overflow-hidden group
              "
            >
              <span
                className="
                  absolute inset-0 bg-black
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out
                "
              />
              <span
                className="
                  relative z-10
                  transition-colors duration-500 ease-in-out
                  group-hover:text-white
                "
              >
                Contact
              </span>
            </Link>
          </div>

          {/* CART */}
          <div className="col-span-1 flex">
            <Link
              to="/cart"
              onClick={() => setIsDropdownOpen(false)}
              className="
                relative w-full h-full
                flex items-center justify-center gap-2
                text-2xl font-semibold uppercase
                overflow-hidden group
              "
            >
              <span
                className="
                  absolute inset-0 bg-black
                  translate-y-full group-hover:translate-y-0
                  transition-transform duration-500 ease-in-out
                "
              />
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 ease-in-out">
                Cart
              </span>
              <ShoppingCart
                className="
                  relative h-5 w-5
                  group-hover:text-white
                  transition-colors duration-500 ease-in-out
                "
              />
              <span
                className="
                  absolute top-2 right-2 text-black text-lg font-normal
                  w-5 h-5 flex items-center justify-center rounded-full
                  group-hover:text-white
                  transition-colors duration-500 ease-in-out
                "
              >
                {totalItems}
              </span>
            </Link>
          </div>
        </div>

        {/* ---- BOTTOM ROW (DROPDOWN) ---- */}
        <div
          ref={dropdownRef}
          className={`
            grid grid-cols-8
            border-l border-r border-b border-black
            transform origin-top
            overflow-hidden
            transition-all duration-500 ease-in-out
            bg-[#CFDADE]
            ${
              isDropdownOpen
                ? // OPEN State
                  "scale-y-100 max-h-[500px] opacity-100 pointer-events-auto"
                : // CLOSED State
                  "scale-y-0 max-h-0 opacity-0 pointer-events-none"
            }
          `}
        >
          {/* CATEGORIES LIST */}
          <div className="col-span-2 border-r border-black p-4">
            <div className="grid grid-cols-2 gap-4">
              {/* First Column */}
              <ul className="flex flex-col gap-2 text-lg font-medium">
                {ITEM_CATEGORIES.slice(
                  0,
                  Math.ceil(ITEM_CATEGORIES.length / 2)
                ).map((category) => (
                  <li
                    key={category.name}
                    onMouseEnter={() => handleCategoryHover(category)}
                  >
                    <Link
                      to={`/products/${category.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Second Column */}
              <ul className="flex flex-col gap-2 text-lg font-medium">
                {ITEM_CATEGORIES.slice(
                  Math.ceil(ITEM_CATEGORIES.length / 2)
                ).map((category) => (
                  <li
                    key={category.name}
                    onMouseEnter={() => handleCategoryHover(category)}
                  >
                    <Link
                      to={`/products/${category.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MIDDLE CONTENT*/}
          <div className="col-span-4 border-r border-black flex items-center relative overflow-hidden">
            {hoveredCategory ? (
              <div className="absolute whitespace-nowrap animate-marquee text-[20rem] transition-opacity duration-500 ease-in-out">
                <span className="inline-block mr-16">
                  {hoveredCategory.marqueeText}
                </span>
                <span className="inline-block mr-16">
                  {hoveredCategory.marqueeText}
                </span>
                <span className="inline-block mr-16">
                  {hoveredCategory.marqueeText}
                </span>
                <span className="inline-block mr-16">
                  {hoveredCategory.marqueeText}
                </span>
              </div>
            ) : (
              <span className="text-lg text-gray-500">All Categories</span>
            )}
          </div>

          {/* CURRENT HOVERED PRODUCT CATEGORY IMAGE */}
          <div className="col-span-2 w-full aspect-[4/3] overflow-hidden relative">
            {featuredProduct || defaultProduct ? (
              <img
                src={(featuredProduct || defaultProduct).image.url}
                alt={
                  (featuredProduct || defaultProduct).image.alt ||
                  "Product Image"
                }
                className="w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out opacity-100"
              />
            ) : (
              <span className="text-gray-500">Loading product image...</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
