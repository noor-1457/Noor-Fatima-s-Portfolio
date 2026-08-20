// Projects.jsx
import React from "react";
import neuro from "../assets/neurocelix.png";
import news from "../assets/newsApp.png";
import bakery from "../assets/the bakery.png";
import currency from "../assets/currencyConverter.png";
import todo from "../assets/to-do.png";
import recipe from "../assets/food-recipes.png";
import weather from "../assets/weather.png";
import chiccloset from "../assets/chiccloset.png";
import textify from "../assets/textify.png";
import portfolio from "../assets/portfolio.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { ArrowRight, ExternalLink } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ChicCloset",
      description:
        "Full-stack e-commerce platform with product management, cart functionality, and seamless checkout experience.",
      image: chiccloset,
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/noor-1457/ChicCloset",
      demo: "https://chic-closet-tau.vercel.app/",
    },
    {
      id: 2,
      title: "NeuroCelix",
      description:
        "AI-powered technology service platform with intelligent automation and modern digital solutions.",
      image: neuro,
      tags: ["React", "Python", "FastAPI", "AI", "Tailwind"],
      github: "https://github.com/noor-1457/Neurocelix-AI",
      demo: "https://www.linkedin.com/posts/noor-fatima-zafar-63a609318_webdesign-uiux-itservices-activity-7454593941972213760-3bnV",
    },
    {
      id: 3,
      title: "Portfolio v2",
      description:
        "Modern portfolio website with fullstack capabilities, responsive design, and interactive UI.",
      image: portfolio,
      tags: ["React", "Next.js", "Tailwind", "MongoDB"],
      github: "https://github.com/noor-1457/My-Portfolio",
      demo: "https://my-portfolio-zeta-one-28.vercel.app/",
    },
    {
      id: 4,
      title: "Textify",
      description:
        "Note-taking application with real-time sync, markdown support, and cloud storage capabilities.",
      image: textify,
      tags: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      github: "https://github.com/noor-1457/Textify",
      demo: "https://textify-sigma.vercel.app/",
    },
    {
      id: 5,
      title: "The Bakery",
      description:
        "Online bakery store with order management system and real-time inventory tracking.",
      image: bakery,
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
      github: "https://github.com/noor-1457/Online-Bakery-",
      demo: "https://online-bakery-kappa.vercel.app/",
    },
    {
      id: 6,
      title: "Recipe Generator",
      description:
        "AI-powered recipe discovery platform with personalized recommendations and meal planning.",
      image: recipe,
      tags: ["React", "Node.js", "Express", "MongoDB", "AI API"],
      github: "https://github.com/noor-1457/Recipe-Generator",
      demo: "https://noor-1457.github.io/Recipe-Generator/",
    },
    {
      id: 7,
      title: "To-Do App",
      description:
        "Task management application with user authentication, real-time updates, and cloud sync.",
      image: todo,
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/noor-1457/To-do-List",
      demo: "https://to-do-list-lfzw.vercel.app/",
    },
    {
      id: 8,
      title: "Currency Converter",
      description:
        "Real-time currency exchange app with historical data visualization and multi-currency support.",
      image: currency,
      tags: ["React", "Node.js", "Express", "REST API", "Chart.js"],
      github: "https://github.com/noor-1457/currency-exchanger",
      demo: "https://currency-exchanger-rust.vercel.app/",
    },
    {
      id: 9,
      title: "Weather App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      image: weather,
      tags: ["React", "Node.js", "Express", "Weather API", "Leaflet"],
      github: "https://github.com/noor-1457/Weather-app",
      demo: "https://noor-1457.github.io/Weather-app/",
    },
    {
      id: 10,
      title: "Ripple News",
      description:
        "AI-curated news aggregator with personalized feeds and real-time updates.",
      image: news,
      tags: ["React", "Node.js", "Express", "MongoDB", "News API"],
      github: "https://github.com/noor-1457/Ripple-News",
      demo: "https://ripple-news-nine.vercel.app/general",
    },
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">PROJECTS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects — from web applications to AI-powered solutions
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
                    <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full 
                      bg-gray-800 text-gray-400 border border-gray-700">
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