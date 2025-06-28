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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 backdrop-blur bg-opacity-70 dark:bg-opacity-80">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          Naima Uddin
        </h1>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-medium text-gray-700 dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 relative after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl text-blue-600 dark:text-yellow-300 transition duration-300 hover:scale-110"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="animate-pulse" /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
