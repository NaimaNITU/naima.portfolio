// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary dark:text-green-400">
          Naima Uddin
        </h1>
        <ul className="flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#about"
              className="hover:text-primary dark:hover:text-green-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-primary dark:hover:text-green-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="hover:text-primary dark:hover:text-green-400"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-primary dark:hover:text-green-400"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-primary dark:hover:text-green-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-primary dark:hover:text-green-400"
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-xl text-primary dark:text-yellow-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Hero.jsx
// (Add dark mode styles similarly when you implement Hero)
