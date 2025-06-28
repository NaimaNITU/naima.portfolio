import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import myImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 px-4 max-w-5xl mx-auto text-center"
    >
      <motion.img
        src={myImg}
        alt="Naima Uddin"
        className="w-32 h-32 mx-auto rounded-full border-1 border-blue-500 shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-800 transition duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm Naima Uddin
      </motion.h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
        MERN Stack Developer
      </p>

      <div className="mt-4 flex justify-center gap-5">
        <a
          href="https://www.linkedin.com/in/naima-uddin-202145287/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-transform hover:scale-110 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NaimaNITU"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-transform hover:scale-110 text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      <div className="mt-6">
        <a
          href="/resume.pdf"
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 font-semibold"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
