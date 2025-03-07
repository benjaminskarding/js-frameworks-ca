import React from "react";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      className="flex flex-col items-center text-center pt-28 md:pt-56"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section class="max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-9xl leading-[1.2] pb-24">ABOUT TIDVAR</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
          <p>
            Tidvar was founded with a simple yet powerful vision: to create
            high-quality, timeless essentials that blend functionality with
            style. We believe in craftsmanship, sustainability, and products
            designed to last.
          </p>
          <p class="mt-2">
            Inspired by Scandinavian design and European heritage, we focus on
            clean aesthetics, premium materials, and attention to detail. Every
            product we create is meant to be a staple in your everyday
            life—simple, practical, and effortlessly stylish.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            At Tidvar, we believe in doing things differently. We are committed
            to delivering quality over quantity, ensuring that every item we
            produce meets the highest standards. Our mission is to provide
            thoughtfully designed pieces that enhance the way you live, work,
            and express yourself.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            Sustainability & Responsibility
          </h2>

          <h3 class="text-xl font-medium mt-4">Ethical Production</h3>
          <p>
            We partner with responsible manufacturers who share our commitment
            to ethical production. Our products are crafted in small batches to
            reduce waste and ensure quality.
          </p>

          <h3 class="text-xl font-medium mt-4">Sustainable Materials</h3>
          <p>
            Sustainability is at the core of what we do. We carefully source
            materials that are durable, environmentally friendly, and ethically
            produced. From organic fabrics to recycled packaging, we are
            continuously working to minimize our impact on the planet.
          </p>

          <h3 class="text-xl font-medium mt-4">Minimal Waste</h3>
          <p>
            By embracing a slow fashion approach, we create timeless pieces that
            are designed to last. Our goal is to move away from disposable
            trends and instead focus on longevity, reducing excess production
            and unnecessary waste.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Why Tidvar?</h2>

          <h3 class="text-xl font-medium mt-4">Quality That Lasts</h3>
          <p>
            We prioritize quality over everything else. From premium fabrics to
            expert craftsmanship, every Tidvar product is made to stand the test
            of time.
          </p>

          <h3 class="text-xl font-medium mt-4">Timeless Design</h3>
          <p>
            We believe in simplicity and elegance. Our designs are minimal,
            modern, and made to complement any style.
          </p>

          <h3 class="text-xl font-medium mt-4">Customer-First Approach</h3>
          <p>
            Your satisfaction is our priority. We are committed to providing
            exceptional service, from seamless shopping experiences to reliable
            customer support.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Join the Tidvar Community</h2>
          <p>
            Tidvar is more than just a brand—it’s a mindset. We invite you to be
            part of a community that values quality, sustainability, and
            timeless design.
          </p>
          <p class="mt-2">
            Follow us on social media and subscribe to our newsletter for
            exclusive updates, special offers, and a closer look at our journey.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>
            Have questions or just want to say hello? Reach out to us at{" "}
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            .
          </p>
        </section>
      </section>
    </motion.div>
  );
}

export default AboutPage;
