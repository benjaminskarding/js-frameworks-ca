import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../Context/cartContext";
import SubmitButton from "../Components/Buttons/submitButton";
import { Link } from "react-router-dom";

// Mobile version of a single cart item
function MobileCartItem({ item, incrementQuantity, removeFromCartOneItem }) {
  return (
    <div className="border border-black w-full p-4">
      <div className="grid grid-rows-3 h-full">
        {/* Row 1: Title and Quantity */}
        <div className="flex justify-between items-center">
          <h1 className="text-md font-bold uppercase">{item.title}</h1>
          <span className="text-sm">(x{item.quantity})</span>
        </div>
        {/* Row 2: Price */}
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold">
            {(item.price * item.quantity).toFixed(2)} KR
          </p>
        </div>
        {/* Row 3: Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            className="text-sm font-semibold uppercase"
            onClick={() => incrementQuantity(item.id)}
          >
            ADD ONE MORE
          </button>
          <button
            className="text-sm font-semibold uppercase text-red-600"
            onClick={() => removeFromCartOneItem(item.id)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPage() {
  const {
    cart,
    removeFromCartOneItem,
    totalPrice,
    tax,
    totalWithTax,
    incrementQuantity,
  } = useContext(CartContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Listen to window resize events
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use mobile layout when window width is below 1350px
  const isMobile = windowWidth < 1350;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    window.location.href = "/checkout";
  };

  if (isMobile) {
    // Mobile version
    return (
      <motion.div
        className="flex flex-col gap-4 mt-12 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Cart Items */}
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="my-56 text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <MobileCartItem
                key={item.id}
                item={item}
                incrementQuantity={incrementQuantity}
                removeFromCartOneItem={removeFromCartOneItem}
              />
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="border border-black p-4 space-y-6 mt-8">
          <div className="grid grid-cols-2 gap-4 border-b border-black pb-4">
            <p className="font-bold uppercase">Expected Delivery</p>
            <p className="text-right">2 weeks</p>
            <p className="font-bold uppercase">Tax</p>
            <p className="text-right uppercase">{tax.toFixed(2)} KR</p>
            <p className="font-bold uppercase">Shipping</p>
            <p className="text-right uppercase">Free</p>
          </div>
          <div className="border-b border-black pb-6 flex items-center justify-between">
            <p className="text-left font-bold uppercase text-2xl">Subtotal</p>
            <p className="text-right font-bold text-2xl">
              {totalPrice.toFixed(2)} KR
            </p>
          </div>
          <div className="border-b border-black pb-6 flex items-center justify-between">
            <p className="text-left font-bold uppercase text-2xl">Total</p>
            <p className="text-right font-bold text-2xl">
              {totalWithTax.toFixed(2)} KR
            </p>
          </div>
          <div className="text-sm border-b border-black pb-4">
            <p>
              We deliver in Europe! Enjoy seamless shipping. See our{" "}
              <a href="/delivery-returns" className="underline">
                deliveries &amp; returns
              </a>{" "}
              page for more information.
            </p>
          </div>
          <div className="text-sm border-b border-black pb-4">
            <p>
              Need special delivery options? Contact us for assistance with bulk
              orders, custom shipping arrangements, or any questions regarding
              your delivery. We're here to help!
            </p>
          </div>
          <SubmitButton
            className="w-full"
            text="Checkout"
            onClick={handleCheckout}
          />
        </div>
      </motion.div>
    );
  } else {
    // Desktop version (original)
    return (
      <motion.div
        className="grid grid-cols-2 gap-4 mt-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LEFT COLUMN: Cart Items */}
        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className="my-56 text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="grid border border-black w-full">
                {/* Top Section */}
                <div className="grid grid-cols-2 border-b border-black">
                  {/* Image Section */}
                  <div className="border-r border-black">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image || "/fallback-image.jpg"}
                        alt={item.title}
                        className="w-full h-auto object-cover"
                      />
                    </Link>
                  </div>

                  {/* Right Top Section */}
                  <div className="grid grid-rows-2">
                    {/* Row 1: Title + Category */}
                    <div className="flex flex-col md:flex-row justify-between items-center border-b border-black pb-2 p-4">
                      <h2 className="font-bold uppercase text-sm md:text-lg">
                        Category
                      </h2>
                      <p className="capitalize text-right">
                        {item.category || "Uncategorized"}
                      </p>
                    </div>
                    {/* Row 2: Name/Price */}
                    <div className="flex justify-between items-center pt-2 p-4">
                      <div>
                        <h1 className="text-md md:text-2xl font-bold uppercase">
                          {item.title}
                        </h1>
                        <span className="text-sm">(x{item.quantity})</span>
                      </div>
                      <p className="text-2xl font-bold">
                        {(item.price * item.quantity).toFixed(2)} KR
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 p-4">
                  {/* Left Column: ADD ONE MORE */}
                  <div className="flex items-center">
                    <button
                      className="text-sm font-semibold uppercase"
                      onClick={() => incrementQuantity(item.id)}
                    >
                      ADD ONE MORE
                    </button>
                  </div>
                  {/* Right Column: REMOVE */}
                  <div className="flex items-center justify-end text-right">
                    <button
                      className="text-sm font-semibold uppercase text-red-600"
                      onClick={() => removeFromCartOneItem(item.id)}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="border border-black p-4 space-y-6">
          {/* Delivery Section */}
          <div className="grid grid-cols-2 gap-4 border-b border-black pb-4">
            <p className="font-bold uppercase">Expected Delivery</p>
            <p className="text-right">2 weeks</p>
            <p className="font-bold uppercase">Tax</p>
            <p className="text-right uppercase">{tax.toFixed(2)} KR</p>
            <p className="font-bold uppercase">Shipping</p>
            <p className="text-right uppercase">Free</p>
          </div>
          {/* Subtotal Section */}
          <div className="border-b border-black pb-6 flex items-center justify-between">
            <p className="text-left font-bold uppercase text-2xl">Subtotal</p>
            <p className="text-right font-bold text-2xl">
              {totalPrice.toFixed(2)} KR
            </p>
          </div>
          {/* Total Section */}
          <div className="border-b border-black pb-6 flex items-center justify-between">
            <p className="text-left font-bold uppercase text-2xl">Total</p>
            <p className="text-right font-bold text-2xl">
              {totalWithTax.toFixed(2)} KR
            </p>
          </div>
          {/* Shipping Message */}
          <div className="text-sm border-b border-black pb-4">
            <p>
              We deliver in Europe! Enjoy seamless shipping. See our{" "}
              <a href="/delivery-returns" className="underline">
                deliveries &amp; returns
              </a>{" "}
              page for more information.
            </p>
          </div>
          {/* Delivery Message */}
          <div className="text-sm border-b border-black pb-4">
            <p>
              Need special delivery options? Contact us for assistance with bulk
              orders, custom shipping arrangements, or any questions regarding
              your delivery. We're here to help!
            </p>
          </div>
          {/* Payment Section */}
          <SubmitButton
            className="w-full"
            text="Checkout"
            onClick={handleCheckout}
          />
        </div>
      </motion.div>
    );
  }
}

export default CartPage;
