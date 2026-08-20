// Contact.jsx
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, ArrowRight } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://www.saveform.io/api/submit/6d66a0e8-8a67-424c-989b-e74b3beea264",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "noor.fatima@email.com",
      link: "mailto:noor.fatima@email.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 300 1234567",
      link: "tel:+923001234567",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Pakistan • Remote",
      link: null,
    },
  ];

  return (
    <section id="contact" className="overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-blue-400 font-mono text-sm tracking-wider">CONTACT</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4" data-aos="fade-right">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#121212] border border-gray-800 
                  hover:border-blue-500/40 hover:bg-[#1a1a1a]
                  transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* GitHub Streak */}
            <div
              className="p-5 rounded-xl bg-[#121212] border border-gray-800 
                hover:border-blue-500/40 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 text-xl">
                  🔥
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    GitHub Streak
                  </p>
                  <p className="text-sm text-gray-300">
                    <span className="text-orange-400 font-bold">15</span> days
                    <span className="text-gray-600 mx-2">•</span>
                    <a
                      href="https://github.com/noor-1457"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      @noor-1457
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 text-center">
              <p className="text-sm text-gray-300">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available for freelance work
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2" data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl p-6 sm:p-8 bg-[#121212] border border-gray-800 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-gray-800 
                    text-white placeholder-gray-500
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                    transition-all outline-none"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-gray-800 
                    text-white placeholder-gray-500
                    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                    transition-all outline-none"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-gray-800 
                  text-white placeholder-gray-500
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                  transition-all outline-none mb-4"
                required
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-gray-800 
                  text-white placeholder-gray-500
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                  transition-all outline-none mb-4"
                required
              />

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-[#0a0a0a] border border-gray-800 
                  text-white placeholder-gray-500 resize-none
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
                  transition-all outline-none mb-4"
                required
              />

              {/* Status Messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Message sent successfully! I'll get back to you soon. ✨</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                  <span>⚠️</span>
                  <span className="text-sm">Something went wrong. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-white font-medium rounded-lg 
                  bg-gradient-to-r from-blue-600 to-blue-500
                  hover:from-blue-700 hover:to-blue-600 
                  hover:shadow-lg hover:shadow-blue-500/25
                  hover:scale-[1.01] transition-all duration-300
                  disabled:opacity-60 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;