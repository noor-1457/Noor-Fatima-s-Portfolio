// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Qualifications", href: "#qualifications" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
              onClick={() => setActiveSection("home")}
            >
              Noor<span className="text-blue-400">.</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300
                    ${
                      activeSection === item.href.substring(1)
                        ? "text-blue-400 bg-blue-500/10"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  onClick={() => setActiveSection(item.href.substring(1))}
                >
                  {item.label}
                </a>
              ))}
              {/* Hire Me Button */}
              <a
                href="#contact"
                className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                onClick={() => setActiveSection("contact")}
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden cursor-pointer p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800 
            transition-all duration-300 ease-in-out overflow-hidden z-[9999]
            ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300
                  ${
                    activeSection === item.href.substring(1)
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                onClick={() => handleNavClick(item.href, item.href.substring(1))}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full mt-2 px-4 py-3 text-sm font-medium text-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
              onClick={() => {
                setIsOpen(false);
                setActiveSection("contact");
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;