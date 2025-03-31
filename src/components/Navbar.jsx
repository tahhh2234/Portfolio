import { useEffect, useState } from "react";
import { useTheme } from "../context/useTheme";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 
      ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text cursor-default"
          >
            <a href="/">Thadpong Sermsook</a>
          </motion.div>

          {/* desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.to}
                className={({ isActive }) => `
                relative text-sm uppercase tracking-wider font-medium
                ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                } transition-colors
                `}
              >
                {({ isActive }) => (
                  <motion.span
                    className="relative inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600
                         ${isActive ? "w-full" : "w-0"}`}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                )}
              </NavLink>
            ))}

            {/* theme */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* mobile */}
          <div className="md:hidden flex items-center space-x-4">
            {/* theme */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            {/* menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
                 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* mobile dropdown */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md"
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className={({ isActive }) => `
                 block py-2 text-sm font-medium rounded-lg px-4
                 ${
                   isActive
                     ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/50"
                     : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                 }
               `}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
export default Navbar;
