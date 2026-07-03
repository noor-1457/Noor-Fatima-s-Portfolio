import { useState } from "react";
// import contact from "../assets/contact-us.png";

function Contact({ DarkMode }) {
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

  return (
    <section
      id="contact"
      style={{
        backgroundColor: DarkMode ? "#111827" : "#f9fafb",
      }}
      className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{
              color: DarkMode ? "white" : "#1f2937",
            }}
          >
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              touch
            </span>
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl"
            style={{
              color: DarkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out to
            me through the form below!
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            style={{
              background: DarkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #ffffff, #f9fafb)",
              borderColor: DarkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg w-full max-w-2xl"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                style={{
                  backgroundColor: DarkMode ? "#374151" : "#faede3",
                  borderColor: DarkMode ? "#4b5563" : "#d1d5db",
                  color: DarkMode ? "white" : "#1f2937",
                }}
                className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                style={{
                  backgroundColor: DarkMode ? "#374151" : "#faede3",
                  borderColor: DarkMode ? "#4b5563" : "#d1d5db",
                  color: DarkMode ? "white" : "#1f2937",
                }}
                className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              style={{
                backgroundColor: DarkMode ? "#374151" : "#faede3",
                borderColor: DarkMode ? "#4b5563" : "#d1d5db",
                color: DarkMode ? "white" : "#1f2937",
              }}
              className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              style={{
                backgroundColor: DarkMode ? "#374151" : "#faede3",
                borderColor: DarkMode ? "#4b5563" : "#d1d5db",
                color: DarkMode ? "white" : "#1f2937",
              }}
              className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4"
              required
            />

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              style={{
                backgroundColor: DarkMode ? "#374151" : "#faede3",
                borderColor: DarkMode ? "#4b5563" : "#d1d5db",
                color: DarkMode ? "white" : "#1f2937",
              }}
              className="w-full px-4 py-3 rounded-lg border focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 resize-none"
              required
            />

            {status === "success" && (
              <p className="text-green-500 mb-4 font-medium">
                ✅ Your message has been sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 mb-4 font-medium">
                 Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
              }}
              className="w-full py-3 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
