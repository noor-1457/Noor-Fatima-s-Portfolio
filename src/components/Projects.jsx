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

function Projects({ DarkMode }) {
  const projects = [
    {
      id: 1,
      title: "ChicCloset",
      description:
        "ChicCloset is a fully functional e-commerce web application built for fashion retail. It offers a smooth and responsive shopping experience with product browsing, category filtering, and an intuitive UI designed to enhance customer engagement.",
      image: chiccloset,
      tags: ["React", "JavaScript", "CSS", "HTML", "Tailwind"],
      github: "https://github.com/noor-1457/ChicCloset",
      demo: "https://chic-closet-tau.vercel.app/",
    },
    {
      id: 2,
      title: "NeuroCelix",
      description:
        "NeuroCelix is a technology service platform built during my internship that delivers modern digital solutions to customers. It focuses on providing reliable, scalable, and user-friendly tech services with a clean and intuitive interface.",
      image: neuro,
      tags: ["React", "JavaScript", "CSS", "HTML", "Tailwind"],
      github: "https://github.com/noor-1457/Neurocelix-AI",
      demo: "https://www.linkedin.com/posts/noor-fatima-zafar-63a609318_webdesign-uiux-itservices-activity-7454593941972213760-3bnV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCJSE4BgQdc-0PJaoxwcQ7XQIp1ZflvboU",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "I developed a responsive portfolio website to showcase my skills, projects, and experience in a modern and visually appealing way.",
      image: portfolio,
      tags: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/noor-1457/My-Portfolio",
      demo: "https://my-portfolio-zeta-one-28.vercel.app/",
    },
    {
      id: 4,
      title: "Textify",
      description:
        "I developed Textify, an app that enables users to create, organize, and manage their notes efficiently through a clean and intuitive interface.",
      image: textify,
      tags: ["React", "JavaScript", "CSS", "HTML", "Bootstrap"],
      github: "https://github.com/noor-1457/Textify",
      demo: "https://textify-sigma.vercel.app/",
    },
    {
      id: 5,
      title: "The Bakery",
      description:
        "I designed and developed this bakery website with a modern, user-friendly interface to showcase delicious baked products in an engaging way.",
      image: bakery,
      tags: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/noor-1457/Online-Bakery-",
      demo: "https://online-bakery-kappa.vercel.app/",
    },
    {
      id: 6,
      title: "Recipe Generator",
      description:
        "I developed a recipe generator that allows users to discover new dishes and share their favorite recipes through an engaging and user-friendly interface.",
      image: recipe,
      tags: ["JavaScript", "CSS", "HTML", "Recipe API"],
      github: "https://github.com/noor-1457/Recipe-Generator",
      demo: "https://noor-1457.github.io/Recipe-Generator/",
    },
    {
      id: 7,
      title: "To-Do App",
      description:
        "I developed a to-do app that helps users manage and organize their tasks efficiently through a clean and intuitive interface.",
      image: todo,
      tags: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/noor-1457/To-do-List",
      demo: "https://to-do-list-lfzw.vercel.app/",
    },
    {
      id: 8,
      title: "Currency Converter",
      description:
        "I developed a currency converter that delivers real-time exchange rates through a clean, intuitive, and user-friendly interface.",
      image: currency,
      tags: ["JavaScript", "CSS", "HTML", "Currency API"],
      github: "https://github.com/noor-1457/currency-exchanger",
      demo: "https://currency-exchanger-rust.vercel.app/",
    },
    {
      id: 9,
      title: "Weather",
      description:
        "I developed a weather app that delivers real-time forecasts through a clean, intuitive, and user-friendly interface, making it easy for users to stay prepared.",
      image: weather,
      tags: ["JavaScript", "CSS", "HTML", "Weather API"],
      github: "https://github.com/noor-1457/Weather-app",
      demo: "https://noor-1457.github.io/Weather-app/",
    },

    // {
    //   id: 9,
    //   title: "Ripple News App",
    //   description:
    //     "I developed this news application to provide users with the latest updates through a clean, responsive, and user-friendly interface. It ensures a smooth browsing experience while keeping users informed in real time.",
    //   image: news,
    //   tags: ["React", "JavaScript", "CSS", "HTML", "News API", "Bootstrap"],
    //   github: "https://github.com/noor-1457/Ripple-News",
    //   demo: "https://ripple-news-nine.vercel.app/general",
    // },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: DarkMode ? "#0d182e" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="conntainer mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="sm:text-4xl font-bold mb-3 text-3xl"
            style={{
              color: DarkMode ? "white" : "#1f2937",
            }}
          >
            My
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: DarkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-5 mb-12"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: DarkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: DarkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300
                hover:border-orange-500/5- transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden  rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 
                transition-transfrom duration-500"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: DarkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{
                    color: DarkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: DarkMode ? "#374151" : "#e5e7eb",
                        color: DarkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-4 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    style={{
                      background: DarkMode ? "#374151" : "#f3f4f6",
                      color: DarkMode ? "#white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                    transition-colors"
                    data-aos="zoom-in"
                    target="_blank"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  {/* demo */}
                  <a
                    href={project.demo}
                    target="blank"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-sm rounded-lg hover:shadow-lg
                    hover:shadow-orange-500/25
                    transition-all text-white"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 ">
          <a
            href="https://github.com/noor-1457"
            target="_blank"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex flex items-center font-semibold
                    gap-2 px-2 py-4 text-sm rounded-full hover:shadow-lg
                    hover:shadow-orange-500/25
                    transition-all text-white"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
          </a>

          <a
            href="#"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex flex items-center font-semibold
                    gap-2 px-2 py-4 text-sm rounded-full hover:shadow-lg
                    hover:shadow-orange-500/25 ml-2 
                    transition-all text-white"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
