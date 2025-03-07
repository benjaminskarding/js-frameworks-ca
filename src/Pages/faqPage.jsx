import React from "react";
import { motion } from "framer-motion";

function FaqPage() {
  return (
    <motion.div
      className="flex flex-col items-center text-center pt-28 md:pt-56"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section class="max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-9xl leading-[1.2] pb-24">FAQ</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Ordering</h2>
          <h3 class="text-xl font-medium mt-4">How do I place an order?</h3>
          <p>
            Simply browse our collection, add your favorite items to the cart,
            and proceed to checkout. Follow the on-screen instructions to
            complete your purchase.
          </p>

          <h3 class="text-xl font-medium mt-4">
            Can I modify or cancel my order?
          </h3>
          <p>
            Once an order is placed, we start processing it immediately to
            ensure quick shipping. If you need to make changes, contact us as
            soon as possible at
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            . We’ll do our best, but modifications or cancellations may not
            always be possible.
          </p>

          <h3 class="text-xl font-medium mt-4">
            What payment methods do you accept?
          </h3>
          <p>
            We accept major credit and debit cards, Klarna, PayPal, and other
            secure payment options available at checkout.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Shipping & Delivery</h2>

          <h3 class="text-xl font-medium mt-4">Where do you ship?</h3>
          <p>
            We currently ship to most countries in Europe. If you’re unsure
            whether we deliver to your location, feel free to reach out before
            placing your order.
          </p>

          <h3 class="text-xl font-medium mt-4">How long does shipping take?</h3>
          <p>
            Our standard shipping takes <strong>5–7 business days</strong>,
            while express shipping takes <strong>2–3 business days</strong>.
            International orders may take <strong>7–14 business days</strong>{" "}
            depending on the destination.
          </p>

          <h3 class="text-xl font-medium mt-4">How can I track my order?</h3>
          <p>
            Once your order has shipped, you will receive a tracking number via
            email. You can use this number to track your package's journey to
            your doorstep.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Returns & Refunds</h2>

          <h3 class="text-xl font-medium mt-4">What is your return policy?</h3>
          <p>
            We accept returns within <strong>30 days</strong> of receiving your
            order. Items must be unused, in their original condition, and with
            all tags attached.
          </p>

          <h3 class="text-xl font-medium mt-4">How do I start a return?</h3>
          <p>
            To initiate a return, contact us at
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>{" "}
            with your order number and reason for return. We’ll guide you
            through the process.
          </p>

          <h3 class="text-xl font-medium mt-4">
            When will I receive my refund?
          </h3>
          <p>
            Once we receive and inspect your returned item, refunds are
            processed within <strong>5 business days</strong>. The funds will be
            credited back to your original payment method.
          </p>

          <h3 class="text-xl font-medium mt-4">Can I exchange an item?</h3>
          <p>
            If you’d like to exchange an item for a different size or color,
            please follow the return process and place a new order for the
            desired item.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Product & Stock</h2>

          <h3 class="text-xl font-medium mt-4">Will an item be restocked?</h3>
          <p>
            Some of our products are limited editions and may not be restocked.
            However, if an item is returning, we will update our website and
            notify customers through our newsletter.
          </p>

          <h3 class="text-xl font-medium mt-4">How can I find my size?</h3>
          <p>
            Our size guide is available on each product page. If you need
            further assistance, feel free to reach out to us for personalized
            sizing advice.
          </p>

          <h3 class="text-xl font-medium mt-4">How do I care for my items?</h3>
          <p>
            Specific care instructions can be found on the product tags or
            descriptions. We recommend following these guidelines to maintain
            the quality and longevity of your items.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Support & Contact</h2>

          <h3 class="text-xl font-medium mt-4">How can I contact Tidvar?</h3>
          <p>
            You can reach our customer support team via email at
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            . We’re happy to assist you with any inquiries.
          </p>

          <h3 class="text-xl font-medium mt-4">What are your support hours?</h3>
          <p>
            Our support team is available Monday to Friday, 9 AM – 5 PM (CET).
            We aim to respond to all inquiries within 24 hours.
          </p>

          <h3 class="text-xl font-medium mt-4">
            Do you have a physical store?
          </h3>
          <p>
            No, Tidvar is an online-only store. This allows us to provide
            high-quality products at the best possible prices.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Still Have Questions?</h2>
          <p>
            If you didn’t find the answer you were looking for, feel free to
            contact us at
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            . We’re here to help!
          </p>
        </section>
      </section>
    </motion.div>
  );
}

export default FaqPage;
