// Skills.jsx
import React from "react";
import { 
  Code, Server, Database, Layout, 
  GitBranch, Palette, Zap, Shield,
  Layers, Terminal, Globe
} from "lucide-react";

const Skills = () => {
  const skills = [
    // FRONTEND SKILLS
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 85,
      category: "Frontend",
    },
     {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 85,
      category: "Frontend",
    },
    {
      name: "Angular.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      level: 75,
      category: "Frontend",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 70,
      category: "Frontend",
    },
     {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 85,
      category: "Frontend",
    },
     {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      level: 85,
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      level: 90,
      category: "Frontend",
    },

    // BACKEND SKILLS
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: 80,
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: 75,
      category: "Backend",
    },

    // DATABASE SKILLS
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: 75,
      category: "Database",
    },

    // DEVOPS
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 90,
      category: "DevOps",
    },

  ];

  const categoryConfig = {
    Frontend: { icon: <Layout className="w-4 h-4" />, color: "blue" },
    Backend: { icon: <Server className="w-4 h-4" />, color: "green" },
    Database: { icon: <Database className="w-4 h-4" />, color: "purple" },
    DevOps: { icon: <GitBranch className="w-4 h-4" />, color: "orange" },
    Design: { icon: <Palette className="w-4 h-4" />, color: "pink" },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getLevelColor = (level) => {
    if (level >= 80) return "bg-blue-500";
    if (level >= 60) return "bg-blue-400";
    return "bg-blue-300/50";
  };

  const getLevelText = (level) => {
    if (level >= 80) return "Expert";
    if (level >= 60) return "Advanced";
    return "Learning";
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">SKILLS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Skills &amp; <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, items], catIndex) => (
            <div key={catIndex} data-aos="fade-up" data-aos-delay={catIndex * 100}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="text-blue-400">
                    {categoryConfig[category]?.icon || <Code className="w-4 h-4" />}
                  </span>
                  <span className="text-sm font-medium text-white">{category}</span>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                    {items.length}
                  </span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {items.map((skill, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-[#121212] border border-gray-800 
                      hover:border-blue-500/40 hover:bg-[#1a1a1a]
                      transition-all duration-300 hover:-translate-y-1
                      hover:shadow-lg hover:shadow-blue-500/5"
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-800/50 p-2.5 
                        group-hover:bg-blue-500/10 group-hover:scale-110
                        transition-all duration-300 flex items-center justify-center">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h4 className="text-sm font-medium text-white text-center mb-2">
                      {skill.name}
                    </h4>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Proficiency</span>
                        <span className="text-blue-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 rounded-full bg-gray-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${getLevelColor(skill.level)} 
                            transition-all duration-1000 ease-out
                            group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="mt-3 text-center">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full
                        ${skill.level >= 80 ? 'bg-blue-500/20 text-blue-400' :
                          skill.level >= 60 ? 'bg-blue-400/20 text-blue-300' :
                          'bg-gray-700/50 text-gray-400'}`}>
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 p-6 rounded-xl bg-[#121212] border border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-gray-400">Expert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-gray-400">Advanced</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-300/50"></span>
                <span className="text-gray-400">Learning</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <span className="text-white font-medium">{skills.length}</span> skills across{" "}
              <span className="text-white font-medium">{Object.keys(groupedSkills).length}</span> categories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;