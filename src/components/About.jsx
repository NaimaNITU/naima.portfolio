import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto bg-white dark:bg-gray-900"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-blue-600 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        About Me
        <span className="block h-1 w-16 bg-blue-500 mx-auto mt-2 rounded animate-pulse" />
      </motion.h2>

      <motion.p
        className="text-lg leading-8 text-justify text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        I'm <span className="font-semibold text-blue-600">Naima Uddin</span>, a
        passionate{" "}
        <strong className="text-blue-600">MERN Stack Developer</strong> and
        Computer Science student at DIU. I started my programming journey
        through self-learning and coursework, quickly growing fond of building
        modern, scalable web applications. Over the past year, I’ve completed
        various full-stack projects using{" "}
        <strong className="text-blue-600">
          MongoDB, Express, React, and Node.js
        </strong>
        .
      </motion.p>

      <motion.p
        className="mt-6 text-lg leading-8 text-justify text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        I enjoy crafting user-friendly UIs, solving real-world problems with
        efficient code, and continuously exploring new technologies. Outside of
        development, I love painting, gathering creative inspiration from
        platforms like Dribbble, and watching insightful tech content.
      </motion.p>
    </section>
  );
};

export default About;
