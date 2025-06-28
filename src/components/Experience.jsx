import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 max-w-6xl mx-auto bg-white dark:bg-gray-900"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-blue-200 dark:hover:shadow-blue-700 transition-all duration-300"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-blue-700 dark:text-blue-300 mb-2">
          Freelance MERN Stack Developer
        </h3>
        <p className="text-base md:text-lg text-blue-600 dark:text-blue-300 mb-1">
          Remote
        </p>
        <p className="text-sm md:text-base text-blue-500 dark:text-blue-400 mb-4">
          2023 - Present
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Worked on multiple freelance projects involving CRUD applications,
          admin dashboards, and REST API integration. Built fully responsive
          interfaces using React and Tailwind CSS.
        </p>
      </motion.div>
    </section>
  );
};

export default Experience;
