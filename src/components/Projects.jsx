// Projects.jsx
import React from "react";
import neuro from "../assets/neurocelix.png";
import chiccloset from "../assets/chiccloset.png";
import skyRoutes from "../assets/skyRoutes.png";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sky Routes Marketing Travel Agency",
      description:
        "A modern travel website developed for a client, featuring an engaging and user-friendly platform for exploring travel destinations and experiences.",
      image: skyRoutes,
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/noor-1457/Sky-Routes-Official",
      demo: "https://sky-routes-official.vercel.app/",
    },
    {
      id: 2,
      title: "ChicCloset",
      description:
        "Full-stack e-commerce platform with product management, cart functionality, and seamless checkout experience.",
      image: chiccloset,
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/noor-1457/ChicCloset",
      demo: "https://chic-closet-tau.vercel.app/",
    },
    {
      id: 3,
      title: "NeuroCelix",
      description:
        "AI-powered technology service platform with intelligent automation and modern digital solutions.",
      image: neuro,
      tags: ["React", "MongoDB", "Expressjs", "Nodejs", "Tailwind"],
      github: "https://github.com/noor-1457/Neurocelix-AI",
      demo: "https://neurocelix-ai.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects — from web applications to
            AI-powered solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-xl bg-[#121212] border border-gray-800 
                hover:border-blue-500/40 hover:bg-[#1a1a1a]
                transition-all duration-300 hover:-translate-y-2
                hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 
                    transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[10px] font-medium rounded-full 
                        bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span
                      className="px-2.5 py-0.5 text-[10px] font-medium rounded-full 
                      bg-gray-800 text-gray-400 border border-gray-700"
                    >
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm 
                      rounded-lg border border-gray-700 text-gray-400
                      hover:border-blue-500 hover:text-white hover:bg-blue-500/10
                      transition-all duration-300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm 
                      rounded-lg bg-blue-600 text-white
                      hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25
                      transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a
            href="https://github.com/noor-1457"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full 
              border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500 
              hover:bg-blue-500/10 transition-all duration-300 font-medium"
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
