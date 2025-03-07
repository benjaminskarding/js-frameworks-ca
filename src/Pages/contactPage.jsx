import React, { useState } from "react";
import ConceptButton from "../Components/Buttons/navigateButton";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (formData.subject.trim().length < 3) {
      setError("Subject must be at least 3 characters.");
      return;
    }
    if (formData.firstName.trim().length < 3) {
      setError("First name must be at least 3 characters.");
      return;
    }
    if (formData.lastName.trim().length < 3) {
      setError("Last name must be at least 3 characters.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (formData.message.trim().length < 3) {
      setError("Message must be at least 3 characters.");
      return;
    }

    // If validations pass
    console.log("Form submitted successfully:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        subject: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <motion.div
      className="flex flex-col items-center text-center pt-16 sm:pt-56  md:pt-56"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-5xl px-10 sm:px-6 py-24 sm:py-16 border border-black relative">
        <h2 className="text-5xl sm:text-5xl md:text-7xl leading-[1.2] mb-10 sm:mb-6">
          <span className="header-1 block">CONTACT</span>
        </h2>

        <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-black rotate-90"></div>
        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rotate-180"></div>
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-black rotate-0"></div>
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-black -rotate-90"></div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form className="grid grid-cols-1 w-full gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="subject"
            placeholder="SUBJECT *"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-black p-3 sm:p-2 bg-transparent placeholder-black focus:outline-none w-full"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="FIRSTNAME *"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-black p-3 sm:p-2 bg-transparent placeholder-black focus:outline-none w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="LASTNAME *"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-black p-3 sm:p-2 bg-transparent placeholder-black focus:outline-none w-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="PHONE *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-black p-3 sm:p-2 bg-transparent placeholder-black focus:outline-none w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="ADDRESS *"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-black p-3 sm:p-2 bg-transparent placeholder-black focus:outline-none w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL *"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-black p-3 sm:p-2 bg-transparent placeholder-black focus:outline-none w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="YOUR MESSAGE *"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-black p-3 sm:p-2 bg-transparent h-32 placeholder-black focus:outline-none w-full"
          ></textarea>

          <ConceptButton
            type="submit"
            className="w-full"
            text={isSubmitted ? "WE'LL GET IN TOUCH" : "SEND"}
          />
        </form>
      </div>
    </motion.div>
  );
}

export default ContactPage;
