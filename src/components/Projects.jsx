import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Job Portal Website",
    image: "https://via.placeholder.com/400x200",
    description:
      "A full-stack job portal with user auth, dashboard, and employer features.",
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
    live: "https://job-portal.example.com",
    github: "https://github.com/naimauddin23/job-portal-client",
    challenges:
      "Managing multi-role authentication, dashboard route protection.",
    improvements: "Add email notifications and pagination.",
  },
  {
    title: "Recipe Sharing App",
    image: "https://via.placeholder.com/400x200",
    description:
      "Users can share, edit, and delete recipes with real-time updates.",
    stack: ["React", "Firebase", "Tailwind"],
    live: "https://recipe-share.example.com",
    github: "https://github.com/naimauddin23/recipe-client",
    challenges: "State management and image upload.",
    improvements: "Integrate rating and comments.",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x200",
    description:
      "A personal portfolio with animations and full responsiveness.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://naima-portfolio.example.com",
    github: "https://github.com/naimauddin23/portfolio",
    challenges: "Smooth animations and responsive layout.",
    improvements: "Add project filter and dark mode toggle.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded shadow overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-primary">
                {project.title}
              </h3>
              <p className="text-sm mt-2 mb-4">{project.description}</p>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-primary px-3 py-1 rounded mr-2"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white bg-gray-700 px-3 py-1 rounded"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
