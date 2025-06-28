import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: (
      <FaEnvelope className="text-blue-600 text-2xl group-hover:scale-110 transition-transform" />
    ),
    text: "naimauddin23@gmail.com",
  },
  {
    icon: (
      <FaPhoneAlt className="text-blue-600 text-2xl group-hover:scale-110 transition-transform" />
    ),
    text: "+8801884242851 (Phone)",
  },
  {
    icon: (
      <FaWhatsapp className="text-blue-600 text-2xl group-hover:scale-110 transition-transform" />
    ),
    text: "+8801884242851 (WhatsApp)",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-6xl mx-auto bg-white dark:bg-gray-900"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-14 text-blue-600 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Contact Me
        <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2 rounded animate-pulse" />
      </motion.h2>

      <div className="space-y-6 text-lg">
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-blue-300 dark:hover:shadow-blue-600 transition-shadow group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {info.icon}
            <span className="text-gray-700 dark:text-gray-300">
              {info.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
