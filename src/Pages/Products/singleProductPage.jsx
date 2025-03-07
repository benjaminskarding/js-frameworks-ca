import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SubmitButton from "../../Components/Buttons/submitButton";
import { fetchProductById } from "../../API/fetch";
import DecorativeCornersSmall from "../../Utilities/decorativeCornersSmall";
import { CartContext } from "../../Context/cartContext";
import { findCategoryForProduct } from "../../Utilities/findCategoryForProduct";
import MobileProductLayout from "../../Components/singleProductPageMobileLayoutComp";
import { motion } from "framer-motion";

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [buttonText, setButtonText] = useState("ADD TO CART");
  const [animateText, setAnimateText] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        const data = await fetchProductById(productId);
        if (data) {
          setProduct(data);
        } else {
          setError("Product not found.");
        }
      } catch (err) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [productId]);

  // Window resize check
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading)
    return <div className="pt-56 text-center">Loading product...</div>;
  if (error)
    return <div className="pt-56 text-center text-red-500">{error}</div>;
  if (!product)
    return <div className="pt-56 text-center">No product found.</div>;

  function handleAddToCart() {
    const category = findCategoryForProduct(product);

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice || null,
      image: product.image?.url,
      category,
    });

    // Change button text to "ADDED TO CART"
    setAnimateText(true);
    setButtonText("ADDED TO CART");

    setTimeout(() => {
      setButtonText("ADD TO CART");
      setAnimateText(false);
    }, 2000);
  }

  const isMobile = windowWidth < 1350;

  return (
    <motion.div
      className="min-h-screen" // adjust as needed
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isMobile ? (
        <MobileProductLayout
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <div className="flex justify-center items-center px-auto pt-56">
          <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-x-12 mx-auto">
            {/* Main Product Image */}
            <div className="flex justify-center items-center">
              <img
                src={product.image?.url || "/fallback-image.jpg"}
                alt={product.title}
                className="w-auto max-h-[45rem] border border-black shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div className="max-w-3xl relative">
              {/* Top rectangle */}
              <div className="relative flex justify-center items-center w-1/3 border border-black p-4 mb-[-1px] h-[6rem]">
                <p className="text-xl font-semibold uppercase">
                  {product.title}
                </p>
                <DecorativeCornersSmall />
              </div>

              {/* Middle rectangle */}
              <div className="border border-black p-8">
                <p className="text-base">{product.description}</p>
              </div>

              {/* Bottom rectangles container */}
              <div className="flex justify-end ml-72">
                {/* Price rectangle */}
                <div className="flex flex-col items-center justify-center w-3/4 border border-black border-t-0 p-4">
                  {/* Display Discounted Price */}
                  <p className="text-lg font-semibold text-center">
                    {product.discountedPrice}KR
                  </p>

                  {/* Show Original Price & Discount % if applicable */}
                  {product.price > product.discountedPrice && (
                    <div className="flex flex-col items-center">
                      <p className="line-through text-gray-500">
                        {product.price}KR
                      </p>
                    </div>
                  )}
                </div>

                <SubmitButton
                  className="border-t-0 border-l-0 h-[6rem]"
                  text={buttonText}
                  onClick={handleAddToCart}
                />
              </div>

              {/*  bottom-right square dot */}
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-black"></div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default SingleProductPage;
