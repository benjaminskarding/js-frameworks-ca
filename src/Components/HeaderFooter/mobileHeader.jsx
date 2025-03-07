import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import { ProductContext } from "../../Context/productContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchText, setShowSearchText] = useState(false);

  // Attach ref to container that wraps both toggle and search results
  const searchContainerRef = useRef(null);
  const buttonRef = useRef(null);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { allProducts = [] } = useContext(ProductContext) || {};

  function handleProductsClick() {
    setIsDropdownOpen((prev) => !prev);
  }

  function toggleSearch() {
    if (isSearchOpen) {
      setSearchQuery("");
      setSearchResults([]);
    }
    setIsSearchOpen((prev) => !prev);
  }

  function handleSearchChange(e) {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  }

  // close search if click is outside the entire search container
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSearchOpen &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSearchOpen]);

  // Framer motion cycle animation between logo and "SEARCH..." text
  useEffect(() => {
    if (isSearchOpen) return;
    const interval = setInterval(() => {
      setShowSearchText((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, [isSearchOpen]);

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="relative 2xl:hidden flex flex-col bg-[#CFDADE] border-b border-black mx-0 z-50">
      <div className="flex items-center h-16">
        {/* Left Section: Products Button */}
        <div className="flex-1 flex justify-start">
          <button
            ref={buttonRef}
            onClick={handleProductsClick}
            className="flex items-center gap-1 text-xl font-semibold uppercase"
          >
            Products
          </button>
        </div>

        {/* Middle Section: Search */}
        <div
          ref={searchContainerRef}
          className="flex-1 flex justify-center relative"
        >
          <div className="cursor-pointer" onClick={toggleSearch}>
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
                className="text-center font-semibold uppercase text-xl bg-transparent py-1 focus:outline-none transition-all duration-300"
              />
            ) : (
              <AnimatePresence mode="wait">
                {showSearchText ? (
                  <motion.div
                    key="searchText"
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5 }}
                    className="text-xl font-semibold uppercase"
                  >
                    SEARCH...
                  </motion.div>
                ) : (
                  <motion.div
                    key="logo"
                    variants={fadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5 }}
                  >
                    <Link to="/">
                      <img
                        src="/logoIdea.svg"
                        alt="TIDVAR Logo"
                        className="h-8"
                      />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>

          {/* Search Results Dropdown */}
          {isSearchOpen && searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-[14px] bg-[#cfdade] border border-black shadow-lg max-h-60 overflow-y-auto z-50">
              <ul className="text-center uppercase">
                {searchResults.map((product) => (
                  <li key={product.id} className="p-2 hover:bg-gray-200">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Section: Cart */}
        <div className="flex-1 flex justify-end">
          <Link to="/cart" className="relative inline-flex items-center">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* PRODUCTS DROPDOWN */}
      <div
        className={`
          absolute left-0 top-full w-full transform transition-transform duration-300 origin-top overflow-hidden
          bg-[#cfdade] border border-black ${
            isDropdownOpen ? "scale-y-100" : "scale-y-0 pointer-events-none"
          }
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
