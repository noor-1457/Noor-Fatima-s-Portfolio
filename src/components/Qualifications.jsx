// Qualifications.jsx
import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Code,
  Server,
  Layout,
  GitBranch,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { X } from "lucide-react";

// Import Certificate Images
import InternCert from "../assets/certificates/int-certificate.png";
import htmlCssCert from "../assets/certificates/html-css.png";
import frontendCert from "../assets/certificates/frontend.png";
import jsCert from "../assets/certificates/javascript.png";
import reactBasicCert from "../assets/certificates/react-basics.png";
import reactAdvancedCert from "../assets/certificates/react-advanced.png";
import gitCert from "../assets/certificates/git.png";
import backendCert from "../assets/certificates/backend.png";
import backendBadge from "../assets/certificates/backendBadge.jpeg";

const Qualifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const education = [
    {
      degree: "BS Computer Science",
      institution: "Virtual University of Pakistan",
      location: "Lahore, Pakistan",
      year: "2022 - 2026",
      description:
        "Specialized in Computer Engineering, Data Structures, and Web Development",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Intermediate (ICS)",
      institution: "Govt. Degree College",
      location: "Lahore, Pakistan",
      year: "2019 - 2021",
      description:
        "Pre-Engineering with Mathematics, Physics, and Computer Science",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      degree: "Matriculation",
      institution: "Pakistan International School, Taif KSA",
      location: "Taif, Saudi Arabia",
      year: "2016 - 2018",
      description: "Science Group with Computer Science as major subject",
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const allCertificates = [
    {
      id: 1,
      name: "Web Developer Internship",
      issuer: "CodeCelix",
      year: "2026",
      skills: [
        "Reactjs",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Basics",
        "Git",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      icon: <Code className="w-5 h-5" />,
      color: "border-blue-500/30",
      image: InternCert,
    },
    {
      id: 8,
      name: "Developing Backend Apps with Node.js and Expressjs",
      issuer: "Coursera",
      year: "2026",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Middleware",
        "Authentication",
      ],
      icon: <Server className="w-5 h-5" />,
      color: "border-teal-500/30",
      image: backendCert,
    },
    {
      id: 8,
      name: "Node.js and Expressjs",
      issuer: "IBM - Coursera",
      year: "2026",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Middleware",
        "Authentication",
      ],
      icon: <Server className="w-5 h-5" />,
      color: "border-teal-500/30",
      image: backendBadge,
    },
    {
      id: 7,
      name: "Meta Version Control with Git",
      issuer: "Coursera",
      year: "2024",
      skills: ["Git", "GitHub", "Branching", "Merging", "Collaboration"],
      icon: <GitBranch className="w-5 h-5" />,
      color: "border-amber-500/30",
      image: gitCert,
    },
    {
      id: 6,
      name: "Meta Advanced React",
      issuer: "Coursera",
      year: "2024",
      skills: [
        "Advanced React",
        "Redux",
        "Context API",
        "Performance",
        "Testing",
      ],
      icon: <Code className="w-5 h-5" />,
      color: "border-pink-500/30",
      image: reactAdvancedCert,
    },
    {
      id: 5,
      name: "Meta React Basics",
      issuer: "Coursera",
      year: "2024",
      skills: ["React", "Components", "State", "Props", "Hooks"],
      icon: <Code className="w-5 h-5" />,
      color: "border-orange-500/30",
      image: reactBasicCert,
    },
    {
      id: 4,
      name: "Meta Programming with JavaScript",
      issuer: "Coursera",
      year: "2024",
      skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async/Await", "APIs"],
      icon: <Code className="w-5 h-5" />,
      color: "border-purple-500/30",
      image: jsCert,
    },
    {
      id: 3,
      name: "Meta Front-End Developer",
      issuer: "Coursera",
      year: "2024",
      skills: ["React", "JavaScript", "HTML", "CSS", "UX/UI"],
      icon: <Layout className="w-5 h-5" />,
      color: "border-emerald-500/30",
      image: frontendCert,
    },
    {
      id: 2,
      name: "Meta HTML and CSS in depth",
      issuer: "Coursera",
      year: "2024",
      skills: ["HTML5", "CSS3", "Responsive Design", "UI/UX Basics"],
      icon: <Code className="w-5 h-5" />,
      color: "border-blue-500/30",
      image: htmlCssCert,
    },
  ];

  // Show only 4 certificates initially, then show all
  const displayedCertificates = showAllCertificates
    ? allCertificates
    : allCertificates.slice(0, 4);

  return (
    <section
      id="qualifications"
      className="overflow-y-hidden py-20 bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">
            QUALIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white">Education</span>
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                {education.length}
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#121212] border border-gray-800 
                  hover:border-blue-500/40 hover:bg-[#1a1a1a]
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-xl hover:shadow-blue-500/5"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-gray-400">{item.institution}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.year}
                  </span>
                  <span className="text-gray-700">|</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">
                Certifications
              </span>
              <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                {allCertificates.length}
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedCertificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`p-5 rounded-xl bg-[#121212] border ${cert.color} 
                  hover:border-opacity-100 hover:bg-[#1a1a1a]
                  transition-all duration-300 hover:-translate-y-1
                  hover:shadow-xl hover:shadow-blue-500/5
                  flex flex-col`}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                {/* Certificate Image */}
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3 bg-gray-800/50">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {/* Badge on image */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[8px] font-medium">
                    {cert.issuer}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      {cert.icon}
                    </div>
                    <span className="text-xs text-gray-500">{cert.issuer}</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-white mb-2 leading-tight line-clamp-2">
                  {cert.name}
                </h4>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[9px] font-medium rounded-full 
                        bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span
                      className="px-2 py-0.5 text-[9px] font-medium rounded-full 
                      bg-gray-800 text-gray-400 border border-gray-700"
                    >
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Verify Badge */}
                <div className="mt-auto pt-3 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className=" cursor-pointer text-[10px] text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    View
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {allCertificates.length > 4 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full 
                  border border-gray-700 text-gray-400 hover:text-white hover:border-blue-500 
                  hover:bg-blue-500/10 transition-all duration-300"
              >
                {showAllCertificates ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    Show All ({allCertificates.length} Certificates)
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-4 -right-4 z-10 w-10 h-10 rounded-full 
                   bg-gray-900 border border-gray-700 text-white 
                   flex items-center justify-center
                   hover:bg-red-500 hover:border-red-500
                   transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Image */}
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Qualifications;
