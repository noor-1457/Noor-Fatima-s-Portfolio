import neuro from "../assets/neurocelix.png";
import news from "../assets/newsApp.png";
import bakery from "../assets/the bakery.png";
import currency from "../assets/currencyConverter.png";
import todo from "../assets/to-do.png";
import recipe from "../assets/food-recipes.png";
import weather from "../assets/weather.png";
import textify from "../assets/textify.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects({ DarkMode }) {
  const projects = [
    {
      id: 1,
      title: "NeuroCelix",
      description:
        "Neurocelix is a web application I built with my team during my internship, focused on delivering a smooth, user-friendly experience with modern design and functionality.",
      image: neuro,
      tags: ["React", "JavaScript", "CSS", "HTML", "Tailwind"],
    },
    {
      id: 2,
      title: "Ripple News App",
      description:
        "I built this news app to deliver the latest updates in a clean and easy-to-use interface. 📰✨",
      image: news,
      tags: ["React", "JavaScript", "CSS", "HTML", "News API", "Bootstrap"],
    },
    {
      id: 3,
      title: "The Bakery",
      description:
        "I created this bakery website to showcase delicious baked items with a modern, user-friendly design. 🎂✨",
      image: bakery,
      tags: ["JavaScript", "CSS", "HTML"],
    },
    {
      id: 4,
      title: "Currency Converter",
      description:
        "I built this currency converter to provide real-time exchange rates in a simple and intuitive interface. 💱✨",
      image: currency,
      tags: ["JavaScript", "CSS", "HTML", "Currency API"],
    },
    {
      id: 5,
      title: "To-Do App",
      description:
        "I built this to-do app to help users organize their tasks in a simple and efficient way. ✨",
      image: todo,
      tags: ["JavaScript", "CSS", "HTML"],
    },
    {
      id: 6,
      title: "Recipe Generator",
      description:
        "I built this recipe generator to help users discover new dishes and share their favorite recipes. 🍽️✨",
      image: recipe,
      tags: ["JavaScript", "CSS", "HTML", "Recipe API"],
    },
    {
      id: 7,
      title: "Weather-App",
      description:
        "I built this weather app to provide real-time forecasts in a simple and intuitive interface. 🌤️✨",
      image: weather,
      tags: ["JavaScript", "CSS", "HTML", "Weather API"],
    },
    {
      id: 8,
      title: "TextifyReact-App",
      description:
        "I built this textify app to help users create and manage their notes in a simple and efficient way. ✍️✨",
      image: textify,
      tags: ["React", "JavaScript", "CSS", "HTML", "Bootstrap"],
    },
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
                    href="#"
                    style={{
                      background: DarkMode ? "#374151" : "#f3f4f6",
                      color: DarkMode ? "#white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center
                    gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                    transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                  {/* demo */}
                  <a
                    href="#"
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
            href="#"
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
            <FaExternalLinkAlt className="text-sm" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
