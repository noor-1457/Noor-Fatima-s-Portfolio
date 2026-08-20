// Hero.jsx
import React from "react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
// ✅ React Icons se import karein
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import heroImage from "../assets/hero.png";

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/noor-1457", label: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/noor-fatima-zafar-63a609318/", label: "LinkedIn" },
    { icon: <FaTwitter className="w-5 h-5" />, url: "https://twitter.com/", label: "Twitter" },
    { icon: <FaEnvelope className="w-5 h-5" />, url: "mailto:noor@email.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Work
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Noor Fatima
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-blue-300 font-medium">
              Full-Stack Web Developer
            </p>

            {/* Description */}
            <p className="text-gray-400 text-base max-w-lg leading-relaxed">
              Building scalable web applications with modern tech, clean architecture, 
              and a passion for creating exceptional digital experiences.
            </p>

            {/* Location & Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-400" />
                Pakistan • Remote
              </span>
              <span className="w-px h-4 bg-gray-700"></span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-400" />
                Available Worldwide
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white font-medium transition-all duration-300 hover:bg-blue-500/10"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-blue-500/20 bg-gradient-to-b from-blue-500/5 to-transparent">
                <img
                  src={heroImage}
                  alt="Noor Fatima"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">100k+</p>
                    <p className="text-gray-400 text-xs">Users Impacted</p>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 shadow-xl">
                <div className="text-center">
                  <p className="text-blue-400 font-bold text-lg">2023</p>
                  <p className="text-gray-400 text-xs">Remote Since</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;