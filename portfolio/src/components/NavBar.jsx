
// import { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import DarkMode from "./DarkMode";
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="bg-gray-100 dark:bg-gray-900 shadow-md w-full fixed">
//       <div className="container mx-auto flex justify-between items-center p-5">
//         {/* Brand / Logo */}
//         <Link
//           to="/"
//           className="  text-2xl font-bold text-gray-900
//           dark:text-gray-100"
//         >
//         logo
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-900 dark:text-gray-100">
//           <li>
//             <Link to="/" className="hover:text-blue-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-500">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className="hover:text-blue-500">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-500">
//               Contact
//             </Link>
//           </li>
//           {!isMobile && (
//             <li>
//               <DarkMode className="top-6" iconSize="text-2xl "/>
//             </li>
//           )}
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div
//           className="md:hidden text-gray-900 dark:text-gray-100"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobile && <DarkMode className="right-14 top-6" iconSize="text-2xl" />}
//       {isOpen && (
//         <ul className="md:hidden bg-gray-100 dark:bg-gray-900 text-center space-y-6 py-6 text-gray-900 dark:text-gray-100">
//           <li>
//             <Link to="/" className="hover:text-blue-500">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-500">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className="hover:text-blue-500">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-500">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
// import logo from "/assets/devchris-high-resolution-logo-transparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation links array to avoid duplication
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 w-full fixed z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl italic font-bold text-gray-900 dark:text-gray-100"
        >
          {/* <img src={logo} alt="logo" className="size-12 w-24" /> */}
          DevChris
        </Link>
        {/* <div className="absolute right-16 md:right-10 top-5">
          <DarkMode
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full border border-gray-300 dark:border-gray-700"
            iconSize="text-2xl"
          />
        </div> */}

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-900 dark:text-gray-100">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-blue-500">
                {link.name}
              </Link>
            </li>
          ))}

          <li className="relative">
            <DarkMode
              className="p-2 text-blue-950"
              style={{ color: "blue" }}
              iconSize="text-2xl"
            />
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-900 dark:text-gray-100 z-20"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <DarkMode
          className="md:hidden p-2 mr-7  dark:border-gray-700"
          iconSize="text-2xl"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 text-center">
          <ul className="space-y-6 py-6 text-gray-900 dark:text-gray-100">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-blue-500"
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
