import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg leading-7 text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        I'm Naima Uddin, a passionate{" "}
        <strong className="text-primary">MERN Stack Developer</strong> and
        Computer Science student at DIU. I started my programming journey
        through self-learning and coursework, quickly growing fond of building
        web applications. Over the past year, I've worked on a variety of
        full-stack projects using{" "}
        <strong className="text-primary">
          MongoDB, Express, React, and Node.js
        </strong>
        .
      </motion.p>

      <motion.p
        className="mt-4 text-lg leading-7 text-justify"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        I enjoy building clean UIs, solving real-world problems through code,
        and learning new technologies. Outside of coding, I enjoy painting,
        exploring design inspiration on Dribbble, and watching tech content.
      </motion.p>
    </section>
  );
};

export default About;
