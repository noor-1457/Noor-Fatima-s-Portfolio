import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ DarkMode, toggleDarkMode }) => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-gradient-to-br from-gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const color = DarkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActive(itemName.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative flex items-center justify-between w-full max-w-6xl backdrop-blur-lg ${color.navBg} px-4 lg:px-8 py-2 rounded-2xl shadow-lg`}
      >
        {/* Logo */}
        <motion.a href="/" whileHover={{ scale: 1.05 }}>
          <span className={`text-xl font-bold ${color.textPrimary}`}>
            Noor Fatima<span className="text-orange-500">.</span>
          </span>
        </motion.a>

        {/* ✅ Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => handleNavClick(item.name)}
              className="relative"
            >
              <motion.span
                className={`font-medium transition-colors duration-300 ${
                  active === item.name.toLowerCase()
                    ? color.textActive
                    : color.textSecondary
                } hover:text-orange-500`}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.span>

              {active === item.name.toLowerCase() && (
                <motion.div
                  layoutId="navIndicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${color.indicator}`}
                />
              )}
            </a>
          ))}
        </div>

        {/* ✅ Right Side (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Dark Mode */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              DarkMode ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            {DarkMode ? <Sun /> : <Moon />}
          </motion.button>

          {/* Hire Me */}
          <motion.a
            href="/contact"
            whileTap={{ scale: 0.95 }}
            className={`py-2 px-6 rounded-full bg-gradient-to-r font-semibold ${color.button} text-white`}
          >
            Hire Me
          </motion.a>
        </div>

        {/* ✅ Mobile Controls */}
        <div className="flex lg:hidden items-center space-x-3">
          {/* Dark Mode */}
          <button onClick={toggleDarkMode}>
            {DarkMode ? <Sun /> : <Moon />}
          </button>

          {/* Hamburger */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${
                DarkMode ? "bg-gray-900/95" : "bg-white/95"
              } backdrop-blur-lg rounded-xl shadow-lg`}
            >
              <div className="p-4 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className="block text-center"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`py-3 px-4 rounded-lg text center${
                        active === item.name.toLowerCase()
                          ? DarkMode
                            ? "bg-gray-800"
                            : "bg-orange-50"
                          : ""
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          active === item.name.toLowerCase()
                            ? color.textActive
                            : color.textSecondary
                        }`}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  </a>
                ))}

                <a
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`block text-center py-2 rounded bg-gradient-to-r ${color.button} text-white`}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;
