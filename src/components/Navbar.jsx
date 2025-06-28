import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Naima Uddin</h1>
        <ul className="flex gap-6 font-medium text-gray-700 dark:text-gray-200">
          <li>
            <a href="#about" className="hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-primary">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-primary">
              Education
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
