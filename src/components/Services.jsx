// Services.jsx
import React from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Cloud,
  Zap,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "End-to-end web applications with MERN stack — from concept to deployment. Building responsive, scalable, and secure solutions.",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "API Development & Integration",
        "Performance Optimization"
      ],
      badge: "Fullstack",
      color: "from-blue-500 to-blue-400",
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence. SEO, social media, content strategy, and analytics.",
      icon: <TrendingUp className="w-6 h-6" />,
      features: [
        "SEO & SEM Optimization",
        "Social Media Management",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      badge: "Marketing",
      color: "from-emerald-500 to-teal-400",
    },
    {
      id: 3,
      title: "Graphic Design",
      description: "Visual storytelling through creative design. Logos, branding, social media graphics, and marketing materials.",
      icon: <Palette className="w-6 h-6" />,
      features: [
        "Brand Identity & Logo Design",
        "Social Media Graphics",
        "Marketing Materials",
        "UI/UX Design"
      ],
      badge: "Design",
      color: "from-purple-500 to-pink-400",
    },
    {
      id: 4,
      title: "AI Integration",
      description: "Intelligent AI solutions for your business. Chatbots, automation, and data analysis to streamline operations.",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "AI Chatbot Development",
        "Workflow Automation",
        "Data Analysis & Insights",
        "Custom AI Solutions"
      ],
      badge: "AI/ML",
      color: "from-orange-500 to-amber-400",
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment services. AWS, Vercel, Netlify, and Docker containerization.",
      icon: <Cloud className="w-6 h-6" />,
      features: [
        "Cloud Architecture Design",
        "DevOps & CI/CD Pipeline",
        "Docker Containerization",
        "Performance Optimization"
      ],
      badge: "DevOps",
      color: "from-cyan-500 to-blue-400",
    },
    {
      id: 6,
      title: "Consultation",
      description: "Expert guidance for your tech projects. Architecture review, code optimization, and strategic planning.",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Project Architecture Review",
        "Code Quality Audit",
        "Technology Selection",
        "Growth Strategy Planning"
      ],
      badge: "Consulting",
      color: "from-indigo-500 to-purple-400",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">SERVICES</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            What I <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to help you build, grow, and scale your digital presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl bg-[#121212] border border-gray-800 
                hover:border-blue-500/40 hover:bg-[#1a1a1a]
                transition-all duration-300 hover:-translate-y-2
                hover:shadow-xl hover:shadow-blue-500/5"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} 
                flex items-center justify-center text-white mb-4
                group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Badge */}
              <span className="inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full 
                bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                {service.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-1.5 mb-5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full py-2.5 rounded-lg border border-gray-700 
                text-gray-300 font-medium text-sm
                group-hover:border-blue-500 group-hover:bg-blue-500/10 
                group-hover:text-white transition-all duration-300
                flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Section - Let's Talk */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Ready to bring your ideas to life?</h3>
              <p className="text-gray-400">Let's collaborate and build something amazing together.</p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;