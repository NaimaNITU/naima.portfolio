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

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-primary mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skillList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded shadow hover:shadow-md transition"
                >
                  <span className="text-xl text-primary">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
