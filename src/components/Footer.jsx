import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
      <p>&copy; {new Date().getFullYear()} Naima Uddin. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
