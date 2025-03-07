import HeroSection from "../Components/Homepage/heroSection";
import ProductSection from "../Components/Homepage/ProductsDisplay/ProductSection1";
import StoryTime from "../Components/Homepage/StoryTimeSection";
import ProductSection2 from "../Components/Homepage/ProductsDisplay/ProductSection2";
import HorizontalBarText1 from "../Components/Homepage/horizontalBarText1";
import { motion } from "framer-motion";
import React from "react";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-2 space-y-12 md:space-y-52"
    >
      <HeroSection />
      <HorizontalBarText1 />
      <ProductSection />
      <StoryTime />
      <ProductSection2 />
    </motion.main>
  );
}
