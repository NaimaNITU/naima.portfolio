import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Recipe Sharing App",
    image: "/recipeBook.png",
    description:
      "Users can share, edit, and delete recipes with real-time updates. Top recipes are sorted by likes of users.",
    stack: ["React", "Firebase", "Tailwind"],
    live: "https://recipe-appfrontend.vercel.app/",
    github: "https://github.com/NaimaNITU/recipe-book.frontend.git",
    challenges:
      "Multi-filtering options implementation, like count system, sorting by like count, search by title and category",
    details: `
- Real-time recipe updates using Firebase.
- Search and filter by title/category.
- Like system with sorting.
- Firebase Auth, Firestore.
`,
    futurePlans: `
- Add user profile pages.
- Enable recipe commenting.
- Develop a mobile app version.
`,
  },
  {
    title: "Volunteer Connect App",
    image: "/volunteerConnect.png",
    description:
      "Responsive platform to manage and join volunteer events seamlessly.",
    stack: ["React", "Tailwind", "Framer Motion"],
    live: "https://volunteermanagement-gules.vercel.app/",
    github: "https://github.com/NaimaNITU/volunteer-management-client.git",
    challenges: "JWT Auth, view/manage volunteer requests",
    details: `
- Users can join and track events.
- Admin can manage requests.
- JWT-secured dashboard and state management.
- Responsive UI with smooth motion effects.
`,
    futurePlans: `
- Add event notification system.
- Improve volunteer analytics dashboard.
- Integrate calendar syncing.
`,
  },
  {
    title: "JobTrack – Smart Job Portal",
    image: "/jobPortal.png",
    description:
      "Portal for job seekers and companies to post and apply for jobs.",
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
    live: "https://job-hunt-7328a.web.app",
    github: "https://github.com/NaimaNITU/job-hunt-frontend.git",
    challenges: "Multi-role auth, dashboard protection",
    details: `
- Roles: Admin, Applicant.
- Protected dashboard routes.
- REST API with Node & MongoDB.
- Real-time job posting & application.
`,
    futurePlans: `
- Add interview scheduling feature.
- Improve job recommendation algorithm.
- Implement resume parsing.
`,
  },
];

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.2 }, // soft fade
  exit: { opacity: 0 },
};

const modalContent = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-14 text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-blue-400 dark:border-blue-700 shadow-lg overflow-hidden cursor-pointer
                       hover:shadow-blue-400 dark:hover:shadow-blue-700
                       hover:-translate-y-1 hover:scale-[1.04]
                       transition-transform transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 relative inline-block mb-3">
                {project.title}
                <span className="block h-1 w-12 bg-blue-500 rounded mt-1 animate-[underline_1.5s_ease-in-out_infinite_alternate]" />
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Site
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full p-8 md:p-10 relative shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {selectedProject.title}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {selectedProject.description}
              </p>

              {/* Technology Stack */}
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Technology Stack:
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live & GitHub Links */}
              <div className="flex gap-2 flex-wrap mb-6">
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-semibold transition"
                >
                  GitHub
                </a>
              </div>

              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Challenges:
              </h4>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                {selectedProject.challenges}
              </p>

              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Details:
              </h4>
              <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {selectedProject.details}
              </pre>

              {/* Potential improvements & future plans */}
              {selectedProject.futurePlans && (
                <>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Potential Improvements & Future Plans:
                  </h4>
                  <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {selectedProject.futurePlans}
                  </pre>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @keyframes underline {
            0% { width: 0; opacity: 0; }
            100% { width: 3rem; opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
