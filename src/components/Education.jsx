import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 max-w-6xl mx-auto bg-white dark:bg-gray-900"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 border-l-4 border-blue-500 rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-blue-200 dark:hover:shadow-blue-700 transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
          BSc in Computer Science & Engineering
        </h3>
        <p className="text-sm text-blue-600 dark:text-blue-300 mb-1">
          Daffodil International University (DIU)
        </p>
        <p className="text-sm text-blue-500 dark:text-blue-400">
          2021 - Present
        </p>
      </motion.div>
    </section>
  );
};

export default Education;
