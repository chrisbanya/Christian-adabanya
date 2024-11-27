import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import classNames from "classnames";
import PropTypes from "prop-types";

function DarkMode({className, iconSize}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className={classNames(
          "fixed top-4 right-3 p-2 bg-transparent text-white rounded-full ",
          className,
          { "text-blue-950": !darkMode, "text-white": darkMode }
        )}
        aria-label="Toggle Dark Mode"
      >
        <div className={iconSize}>
          {darkMode ? <MdDarkMode /> : <CiLight style={{ color: "blue" }} />}
        </div>
      </button>
    </>
  );
}
DarkMode.propTypes = { className: PropTypes.string, iconSize: PropTypes.string };
export default DarkMode;
