import React from "react";
import { motion } from "framer-motion";

function DeliveryPage() {
  return (
    <motion.div
      className="flex flex-col items-center text-center pt-28 md:pt-56"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section class="max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-9xl leading-[1.2] pb-24">
          DELIVERIES & RETURNS
        </h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Delivery Information</h2>
          <p>
            At Tidvar, we strive to make your shopping experience seamless.
            Below, you'll find all the details about our shipping times, costs,
            and policies.
          </p>

          <h3 class="text-xl font-medium mt-4">Shipping Times & Costs</h3>
          <ul class="list-disc pl-6 mt-2">
            <li>
              <strong>Standard Delivery:</strong> 5–7 business days (Free on all
              orders)
            </li>
            <li>
              <strong>Express Delivery:</strong> 2–3 business days (Additional
              cost calculated at checkout)
            </li>
            <li>
              <strong>International Shipping:</strong> 7–14 business days
              (Varies by destination)
            </li>
          </ul>
          <p class="mt-2">
            We process and ship all orders within 1-2 business days. Once your
            order has shipped, you’ll receive a confirmation email with tracking
            details.
          </p>

          <h3 class="text-xl font-medium mt-4">Where We Ship</h3>
          <p>
            We currently ship to most countries in Europe. If you're unsure
            whether we deliver to your location, please contact us before
            placing your order.
          </p>

          <h3 class="text-xl font-medium mt-4">Customs & Import Fees</h3>
          <p>
            For international orders, customs duties and taxes may apply. These
            charges are determined by your local customs authority and are the
            responsibility of the customer.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Returns & Exchanges</h2>
          <p>
            We want you to be happy with your purchase! If you need to return or
            exchange an item, please follow the guidelines below.
          </p>

          <h3 class="text-xl font-medium mt-4">Return Policy</h3>
          <ul class="list-disc pl-6 mt-2">
            <li>
              Items can be returned within <strong>30 days</strong> of receiving
              your order.
            </li>
            <li>
              Products must be{" "}
              <strong>
                unused, in original condition, and with all tags attached
              </strong>
              .
            </li>
            <li>
              Returns are <strong>free within Europe</strong>, but international
              return shipping costs are the responsibility of the customer.
            </li>
          </ul>
          <p class="mt-2">
            To initiate a return, please contact our support team with your
            order number and reason for return. We’ll provide you with the
            necessary instructions.
          </p>

          <h3 class="text-xl font-medium mt-4">Refunds</h3>
          <p>
            Once we receive your return, please allow up to{" "}
            <strong>5 business days</strong> for processing. Refunds will be
            issued to your original payment method.
          </p>

          <h3 class="text-xl font-medium mt-4">Exchanges</h3>
          <p>
            If you’d like to exchange an item for a different size or color,
            please follow the return process and place a new order for the
            desired item.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            Damaged or Incorrect Items
          </h2>
          <p>
            If you receive a damaged, defective, or incorrect item, please
            contact us immediately with a photo and order details. We will
            resolve the issue as quickly as possible by sending a replacement or
            issuing a refund.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            For any delivery or return-related questions, reach out to our
            support team at{" "}
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            . We're happy to help!
          </p>
        </section>
      </section>
    </motion.div>
  );
}

export default DeliveryPage;
