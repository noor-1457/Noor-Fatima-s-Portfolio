// Footer.jsx
import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaHeart, 
  FaFacebook, 
  FaTwitter, 
  FaYoutube,
  FaInstagram 
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaLinkedin className="text-lg" />, url: "https://www.linkedin.com/in/noor-fatima-zafar-63a609318/", label: "LinkedIn" },
    { icon: <FaGithub className="text-lg" />, url: "https://github.com/noor-1457", label: "GitHub" },
    { icon: <FaFacebook className="text-lg" />, url: "https://www.facebook.com/profile.php?id=61581190679650", label: "Facebook" },
    { icon: <FaTwitter className="text-lg" />, url: "https://twitter.com/", label: "Twitter" },
    { icon: <FaInstagram className="text-lg" />, url: "https://instagram.com/", label: "Instagram" },
    { icon: <FaYoutube className="text-lg" />, url: "https://youtube.com/", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#0a0a0a] overflow-hidden border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Brand Section */}
          <div className="md:col-span-1" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-2">
              Noor<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Full-Stack Web Developer crafting modern, scalable web applications.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-gray-400">Available for work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-sm font-semibold text-white mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express", "MongoDB", "Tailwind", "TypeScript", "Next.js", "Docker"].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-blue-500/50 hover:text-white transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-sm font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-sm text-gray-400 mb-4">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center 
                  bg-gray-800/50 text-gray-400 border border-gray-700
                  hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10
                  hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>© {currentYear}</span>
            <span className="text-gray-700">|</span>
            <span className="flex items-center gap-1">
              Made with
              <FaHeart className="text-red-500 w-4 h-4 animate-pulse" />
              by
            </span>
            <span className="text-gray-300 hover:text-blue-400 transition-colors">
              Noor Fatima
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-500">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;