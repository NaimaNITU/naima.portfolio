import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>
      <div className="bg-white dark:bg-gray-800 rounded shadow p-6">
        <h3 className="text-xl font-semibold">
          BSc in Computer Science & Engineering
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Daffodil International University (DIU)
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          2021 - Present
        </p>
      </div>
    </section>
  );
};

export default Education;
