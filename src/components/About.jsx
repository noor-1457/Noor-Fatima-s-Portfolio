import React from "react";
import about from "../assets/about.png";

function About({ DarkMode }) {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex 
    items-center justify-center px-4 sm:px-6`}
    >
      <div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
        gap-8 sm:gap-12 items-center"
      >
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative 
            order-2 lg:order-1"
        >
          {/* ❌ w-75 → ✅ w-72 (valid Tailwind) */}
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* ✅ SAME star-shape, only gradient syntax fixed */}
            <div
              className="absolute -inset-4 lg:-inset-20 
            bg-gradient-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] 
            rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>

            <img
              src={about}
              alt="About Image"
              className="absolute inset-0 w-full h-full object-cover z-10 
              transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative 
        order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl
                xl:text-6xl font-bold mb-4 sm:mb-6 
                text-transparent bg-gradient-to-r from-orange-400 
                to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-gradient-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
              DarkMode ? "text-gray-300" : "text-gray-700"
            }`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis distinctio debitis repellendus quod impedit alias
            repellat, cumque libero iusto sint ducimus dolore voluptatum
            similique expedita hic, corrupti mollitia, reprehenderit quibusdam.
            Sint totam eligendi id provident at, debitis laudantium perspiciatis
            quaerat.
          </p>
          <div
            className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6
          sm:mb-8"
          >
            {/* Education */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base xl:text-lg ${
                  DarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Education
              </div>
            </div>

            {/* Experience */}
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                2+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base xl:text-lg ${
                  DarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Years Experience
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                20+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base xl:text-lg ${
                  DarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Projects Completed
              </div>
            </div>
          </div>
          {/* ✅ */}
          <button
            className={`w-full sm:w-auto inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
          rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform  border-2 border-orange-500 ${DarkMode ? "text-white bg-orange-500/10" : "text-gray-800 bg-white/90"}`}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
}

export default About;
