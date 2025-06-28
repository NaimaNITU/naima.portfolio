import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <h3 className="text-xl font-semibold">
          Freelance MERN Stack Developer
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">Remote</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          2023 - Present
        </p>
        <p>
          Worked on multiple freelance projects involving CRUD applications,
          admin dashboards, and REST API integration. Built fully responsive
          interfaces using React and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Experience;
