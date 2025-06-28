import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 px-4 max-w-5xl mx-auto text-center"
    >
      <motion.img
        src="https://i.ibb.co/ZG0mftq/profile.png"
        alt="Naima Uddin"
        className="w-32 h-32 mx-auto rounded-full border-4 border-primary mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm Naima Uddin
      </motion.h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        MERN Stack Developer
      </p>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/naima-uddin-202145287/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-primary hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://github.com/naimauddin23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl text-primary hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://dribbble.com/naimauddin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble className="text-2xl text-primary hover:scale-110 transition-transform" />
        </a>
      </div>
      <div className="mt-6">
        <a
          href="/resume.pdf"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-green-700 transition"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
