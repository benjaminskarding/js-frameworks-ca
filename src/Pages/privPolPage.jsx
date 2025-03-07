import React from "react";
import { motion } from "framer-motion";

function PrivPolPage() {
  return (
    <motion.div
      className="flex flex-col items-center text-center pt-28 md:pt-56"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section class="max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-9xl leading-[1.2] pb-24">PRIVACY POLICY</h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            At Tidvar, we are committed to protecting your privacy and ensuring
            that your personal data is handled securely and transparently. This
            Privacy Policy explains how we collect, use, and safeguard your
            information when you visit our website and make a purchase.
          </p>
          <p class="mt-2">
            By using our website, you agree to the terms outlined in this
            policy. If you have any questions, feel free to contact us at
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Information We Collect</h2>

          <h3 class="text-xl font-medium mt-4">Personal Information</h3>
          <p>
            When you make a purchase or create an account, we collect certain
            personal details, including:
          </p>
          <ul class="list-disc pl-6 mt-2">
            <li>Full name</li>
            <li>Email address</li>
            <li>Shipping and billing addresses</li>
            <li>Phone number</li>
            <li>
              Payment details (processed securely via our payment providers)
            </li>
          </ul>

          <h3 class="text-xl font-medium mt-4">Non-Personal Information</h3>
          <p>
            We also collect non-personal data to improve our website experience,
            including:
          </p>
          <ul class="list-disc pl-6 mt-2">
            <li>Browser type and device information</li>
            <li>IP address and location data</li>
            <li>Pages visited and time spent on our site</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p>We use the collected data to:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Process and fulfill your orders</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Improve our website, products, and services</li>
            <li>
              Send order confirmations, updates, and promotional emails (if
              subscribed)
            </li>
            <li>Prevent fraud and ensure security</li>
          </ul>
          <p class="mt-2">
            We do not sell or rent your personal data to third parties. However,
            we may share certain details with trusted service providers (such as
            payment processors and shipping partners) to fulfill your order.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Cookies & Tracking</h2>

          <h3 class="text-xl font-medium mt-4">What Are Cookies?</h3>
          <p>
            Cookies are small files stored on your device that help us improve
            your browsing experience. They allow us to remember preferences,
            analyze site traffic, and enhance functionality.
          </p>

          <h3 class="text-xl font-medium mt-4">How We Use Cookies</h3>
          <p>We use cookies to:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Recognize returning visitors and their preferences</li>
            <li>Track shopping cart activity</li>
            <li>Measure website performance and analytics</li>
            <li>Provide targeted marketing based on browsing behavior</li>
          </ul>

          <h3 class="text-xl font-medium mt-4">Managing Cookies</h3>
          <p>
            You can control and delete cookies through your browser settings.
            However, disabling cookies may affect certain functionalities on our
            website.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>
            Tidvar may use third-party services for payments, shipping, and
            analytics. These providers have their own privacy policies that
            govern how they handle your data.
          </p>
          <p class="mt-2">
            We currently work with trusted partners, including:
          </p>
          <ul class="list-disc pl-6 mt-2">
            <li>Payment processors (e.g., Klarna, PayPal, Stripe)</li>
            <li>Shipping and logistics providers</li>
            <li>Analytics tools (e.g., Google Analytics)</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">
            Data Protection & Security
          </h2>
          <p>
            We take security seriously and implement strict measures to protect
            your personal data. Our website uses encryption, secure payment
            gateways, and strict access controls to safeguard your information.
          </p>
          <p class="mt-2">
            However, no online transaction is 100% secure. We encourage
            customers to use strong passwords and be cautious when sharing
            personal information.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul class="list-disc pl-6 mt-2">
            <li>Request access to the personal data we hold about you</li>
            <li>Correct or update inaccurate information</li>
            <li>
              Request deletion of your data (unless required for legal purposes)
            </li>
            <li>Opt out of marketing emails</li>
          </ul>
          <p class="mt-2">
            To exercise any of these rights, contact us at
            <a href="mailto:support@tidvar.com" class="underline">
              support@tidvar.com
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any significant
            changes will be communicated via our website or email notifications.
          </p>
          <p class="mt-2">
            We encourage you to review this policy periodically to stay informed
            about how we protect your data.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please reach out to us at
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

export default PrivPolPage;
