import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CartContext } from "../Context/cartContext";
import SubmitButton from "../Components/Buttons/submitButton";

function CheckoutPage() {
  const { cart, totalPrice, tax, totalWithTax, clearCart } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [deliveryFormData, setDeliveryFormData] = useState({ ...formData });
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Listen for window resize events
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use mobile layout when width is below 1350px
  const isMobile = windowWidth < 1350;

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeliveryFormChange = (e) => {
    setDeliveryFormData({
      ...deliveryFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "postalCode",
      "country",
    ];
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert("Please fill in all required billing fields.");
        return;
      }
    }
    for (let field of requiredFields) {
      if (!deliveryFormData[field]) {
        alert("Please fill in all required delivery fields.");
        return;
      }
    }
    if (selectedPayment === null) {
      alert("Please select a payment option.");
      return;
    }
    clearCart();
    window.location.href = "/checkout-success";
  };

  const paymentOptions = [
    { name: "klarna", src: "/icons/klarna.svg" },
    { name: "visa", src: "/icons/vipps.svg" },
    { name: "mastercard", src: "/icons/mastercard.svg" },
    { name: "bitcoin", src: "/icons/bitcoin.svg" },
  ];

  if (isMobile) {
    // Mobile layout
    return (
      <motion.div
        className="flex flex-col gap-4 mt-12 md:mt-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Billing Address Form */}
        <form className="grid grid-cols-1 gap-6 p-6 border border-black">
          <h2 className="text-xl font-bold">Billing Address</h2>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleFormChange}
              className="border border-black p-2 bg-transparent"
              required
            >
              <option value="">Select your country</option>
              <option value="Norway">Norway</option>
              <option value="Sweden">Sweden</option>
              <option value="Denmark">Denmark</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
          </div>
        </form>

        {/* Delivery Address Form */}
        <form className="grid grid-cols-1 gap-6 p-6 border border-black">
          <h2 className="text-xl font-bold">Delivery Address</h2>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={deliveryFormData.firstName}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={deliveryFormData.lastName}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={deliveryFormData.email}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Phone</label>
            <input
              type="tel"
              name="phone"
              value={deliveryFormData.phone}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Address</label>
            <input
              type="text"
              name="address"
              value={deliveryFormData.address}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">City</label>
            <input
              type="text"
              name="city"
              value={deliveryFormData.city}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={deliveryFormData.postalCode}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-sm">Country</label>
            <select
              name="country"
              value={deliveryFormData.country}
              onChange={handleDeliveryFormChange}
              className="border border-black p-2 bg-transparent"
              required
            >
              <option value="">Select your country</option>
              <option value="Norway">Norway</option>
              <option value="Sweden">Sweden</option>
              <option value="Denmark">Denmark</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
            </select>
          </div>
        </form>

        {/* Order Summary Section */}
        <div className="border border-black p-4 space-y-6">
          <div className="space-y-2 border-b border-black pb-4">
            <div className="flex justify-between">
              <p className="font-bold uppercase">Expected delivery</p>
              <p>2 weeks</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase">Tax</p>
              <p className="uppercase">{tax.toFixed(2)} KR</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase">Shipping</p>
              <p className="uppercase">Free</p>
            </div>
          </div>
          <div className="border-b border-black pb-6">
            <div className="flex justify-between items-center">
              <p className="text-left font-bold uppercase text-2xl">Subtotal</p>
              <p className="text-right font-bold text-2xl">
                {totalPrice.toFixed(2)} KR
              </p>
            </div>
          </div>
          <div className="border-b border-black pb-6">
            <div className="flex justify-between items-center">
              <p className="text-left font-bold uppercase text-2xl">Total</p>
              <p className="text-right font-bold text-2xl">
                {totalWithTax.toFixed(2)} KR
              </p>
            </div>
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
          <div className="flex justify-around items-center mb-4">
            {paymentOptions.map((payment, index) => (
              <img
                key={index}
                src={payment.src}
                alt={payment.name}
                onClick={() => setSelectedPayment(index)}
                className={`w-14 h-14 cursor-pointer transition-transform duration-200 transform ${
                  selectedPayment === index ? "scale-125" : "hover:scale-125"
                }`}
              />
            ))}
          </div>
          <SubmitButton
            className="w-full"
            text="PLACE ORDER"
            onClick={handleCheckout}
          />
        </div>
      </motion.div>
    );
  } else {
    // Desktop layout
    return (
      <motion.div
        className="grid grid-cols-2 gap-4 mt-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* LEFT COLUMN */}
        <div className="space-y-4">
          {/* Billing Address Form */}
          <form className="grid grid-cols-2 gap-6 p-6 border border-black">
            <h2 className="col-span-2 text-xl font-bold">Billing Address</h2>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="font-semibold text-sm">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="font-semibold text-sm">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleFormChange}
                className="border border-black p-2 bg-transparent"
                required
              >
                <option value="">Select your country</option>
                <option value="Norway">Norway</option>
                <option value="Sweden">Sweden</option>
                <option value="Denmark">Denmark</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
            </div>
          </form>

          {/* Delivery Address Form */}
          <form className="grid grid-cols-2 gap-6 p-6 border border-black">
            <h2 className="col-span-2 text-xl font-bold">Delivery Address</h2>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">First Name</label>
              <input
                type="text"
                name="firstName"
                value={deliveryFormData.firstName}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={deliveryFormData.lastName}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={deliveryFormData.email}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Phone</label>
              <input
                type="tel"
                name="phone"
                value={deliveryFormData.phone}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="font-semibold text-sm">Address</label>
              <input
                type="text"
                name="address"
                value={deliveryFormData.address}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">City</label>
              <input
                type="text"
                name="city"
                value={deliveryFormData.city}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-sm">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={deliveryFormData.postalCode}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label className="font-semibold text-sm">Country</label>
              <select
                name="country"
                value={deliveryFormData.country}
                onChange={handleDeliveryFormChange}
                className="border border-black p-2 bg-transparent"
                required
              >
                <option value="">Select your country</option>
                <option value="Norway">Norway</option>
                <option value="Sweden">Sweden</option>
                <option value="Denmark">Denmark</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="border border-black p-4 space-y-6">
          <div className="grid grid-cols-1 gap-4 border-b border-black pb-4">
            <div className="flex justify-between">
              <p className="font-bold uppercase">Expected delivery</p>
              <p>2 weeks</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase">Tax</p>
              <p className="uppercase">{tax.toFixed(2)} KR</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase">Shipping</p>
              <p className="uppercase">Free</p>
            </div>
          </div>
          <div className="border-b border-black pb-6">
            <div className="flex justify-between items-center">
              <p className="text-left font-bold uppercase text-2xl">Subtotal</p>
              <p className="text-right font-bold text-2xl">
                {totalPrice.toFixed(2)} KR
              </p>
            </div>
          </div>
          <div className="border-b border-black pb-6">
            <div className="flex justify-between items-center">
              <p className="text-left font-bold uppercase text-2xl">Total</p>
              <p className="text-right font-bold text-2xl">
                {totalWithTax.toFixed(2)} KR
              </p>
            </div>
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
          <div className="flex justify-around items-center mb-4">
            {paymentOptions.map((payment, index) => (
              <img
                key={index}
                src={payment.src}
                alt={payment.name}
                onClick={() => setSelectedPayment(index)}
                className={`w-20 h-20 cursor-pointer transition-transform duration-200 transform ${
                  selectedPayment === index ? "scale-125" : "hover:scale-125"
                }`}
              />
            ))}
          </div>
          <SubmitButton
            className="w-full"
            text="PLACE ORDER"
            onClick={handleCheckout}
          />
        </div>
      </motion.div>
    );
  }
}

export default CheckoutPage;
