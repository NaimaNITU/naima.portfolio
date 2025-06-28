import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  Tools: [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Dev Tools", icon: <FaTools /> },
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center rounded-2xl  px-6 md:px-10 max-w-6xl mx-auto  dark:from-gray-600 dark:to-gray-800"
    >
      <motion.h2
        className="text-4xl font-bold mb-10 text-center text-primary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      {Object.entries(skills).map(([category, skillList], index) => (
        <motion.div
          key={category}
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <h3 className="text-2xl font-semibold text-primary  mb-6 border-l-4 border-primary pl-3">
            {category}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {skillList.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-4 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 duration-300"
              >
                <span className="text-2xl text-primary">{skill.icon}</span>
                <span className="text-base font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Skills;
