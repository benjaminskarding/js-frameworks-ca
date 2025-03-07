import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./Layout";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/aboutPage";
import ContactPage from "./Pages/contactPage";
import SingleProductPage from "./Pages/Products/singleProductPage";
import ProductCategoryPage from "./Pages/Products/productCategoryPage.jsx";
import CartPage from "./Pages/cartPage.jsx";
import CheckoutPage from "./Pages/checkoutPage.jsx";
import CheckoutSuccessPage from "./Pages/checkoutSuccessPage.jsx";
import DeliveryPage from "./Pages/deliveryPage.jsx";
import FaqPage from "./Pages/faqPage.jsx";
import PrivPolPage from "./Pages/privPolPage.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/delivery-returns" element={<DeliveryPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivPolPage />} />
          <Route
            path="/products/:categoryName"
            element={<ProductCategoryPage />}
          />
          <Route path="/product/:productId" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
