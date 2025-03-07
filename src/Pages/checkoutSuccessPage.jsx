import React from "react";
import { motion } from "framer-motion";
import NavigateButton from "../Components/Buttons/navigateButton";

function CheckoutSuccessPage() {
  return (
    <motion.div
      className="flex flex-col items-center text-center py-52"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-9xl leading-[1.2] pb-36">
        <span className="header-1 block">Checkout Successfull</span>
      </h2>

      {/* Back to Store Link */}
      <NavigateButton text="BACK TO STORE" href="/" />
    </motion.div>
  );
}

export default CheckoutSuccessPage;
