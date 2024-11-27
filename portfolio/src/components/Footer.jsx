// Footer.jsx

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
  const date = new Date();
  const year = date.getFullYear();

const Footer = () => (
  <footer className=" bg-gray-100 dark:bg-gray-900 text-center w-full">
    <div className="flex justify-center space-x-4 mb-4 pt-4">
      <a
        href="https://github.com/chrisbanya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200  hover:text-black ease-in duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/christian-adabanya-764a01278/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 ease-in duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://twitter.com/0xchristian12"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 dark:text-gray-200  hover:text-blue-600 ease-in duration-300 hover:-translate-y-1 hover:scale-110"
      >
        <FaTwitter size={24} />
      </a>
    </div>
    <p className="text-gray-700 dark:text-gray-300">
      &copy; {year} Chrisbanya. All rights reserved.
    </p>
  </footer>
);

export default Footer;
