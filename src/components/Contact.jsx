import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="space-y-6 text-lg">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-primary text-xl" />
          <span>naimauddin23@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-primary text-xl" />
          <span>+8801XXXXXXXXX</span>
        </div>
        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-primary text-xl" />
          <span>+8801XXXXXXXXX (WhatsApp)</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
