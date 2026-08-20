// About.jsx
import React from "react";
import { Users, Zap, Globe, Code, ArrowRight, CheckCircle } from "lucide-react";

const About = () => {
  const stats = [
    { number: "50+", label: "Applications", icon: <Code className="w-5 h-5" /> },
    { number: "35%", label: "Performance Improved", icon: <Zap className="w-5 h-5" /> },
    { number: "US Teams", label: "Remote Collaboration", icon: <Users className="w-5 h-5" /> },
    { number: "100k+", label: "API Users", icon: <Globe className="w-5 h-5" /> },
  ];

  const highlights = [
    "50+ Applications Delivered production-grade applications",
    "35% Performance Improved system performance",
    "US Remote Teams Worked with US-based remote teams",
    "100k+ Users Designed scalable APIs",
  ];

  return (
    <section id="about" className="py-20 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">ABOUT</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building scalable web applications with modern tech, clean architecture, and remote-first mindset
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Image/Stats Summary */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <div className="bg-[#121212] rounded-xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl font-bold">
                  NF
                </div>
                <div>
                  <h3 className="text-white font-semibold">Noor Fatima</h3>
                  <p className="text-gray-400 text-sm">Full-Stack Web Developer</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-blue-400">📍</span>
                  <span>Pakistan • Remote</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-blue-400">🕐</span>
                  <span>US Timezone (EST / PST overlap)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="text-blue-400">📧</span>
                  <a href="mailto:noor.fatima@email.com" className="text-blue-400 hover:underline">
                    noor.fatima@email.com
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-800 flex gap-3">
                <a
                  href="#contact"
                  className="flex-1 text-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-300"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="flex-1 text-center px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-[#121212] rounded-xl border border-gray-800 p-4 text-center">
                <p className="text-2xl font-bold text-blue-400">100k+</p>
                <p className="text-xs text-gray-500">Users impacted</p>
              </div>
              <div className="bg-[#121212] rounded-xl border border-gray-800 p-4 text-center">
                <p className="text-2xl font-bold text-blue-400">2023</p>
                <p className="text-xs text-gray-500">Remote Since</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-3 space-y-6" data-aos="fade-left">
            {/* Summary */}
            <div className="bg-[#121212] rounded-xl border border-gray-800 p-6">
              <h4 className="text-sm font-semibold text-white mb-3">Summary</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Full-Stack Web Developer with <span className="text-blue-400 font-semibold">2+ years</span> of experience 
                delivering high-performance web applications for startups and enterprise clients. 
                Specialized in <span className="text-blue-400">JavaScript ecosystems</span>, scalable backend systems, 
                and cloud deployment. Proven track record of collaborating with distributed 
                teams across US time zones.
              </p>
            </div>

            {/* Highlights Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((highlight, index) => {
                const parts = highlight.split(" ");
                const number = parts[0];
                const label = parts.slice(1).join(" ");
                return (
                  <div
                    key={index}
                    className="bg-[#121212] rounded-xl border border-gray-800 p-4 
                      hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-bold text-lg">{number}</p>
                        <p className="text-gray-400 text-xs">{label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div> */}

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Let's work together
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-white text-sm font-medium transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;