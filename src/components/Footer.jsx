import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

function Footer({ DarkMode }) {
  const currentYear = new Date().getFullYear();
  return (
    <Footer
      style={{
        background: DarkMode
          ? "linear-linear(to bottom, #000000, #111287)"
          : "linear-linear(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: DarkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div
          className="flex flex-col md:flex-row justify-between
           items-center gap-6"
        >
          <div className="text-center md:text-left">
            <h3
              className="text-2xl fonr-bold mb-2 text-orange-500
              dark:text-white"
            >
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{
                color: DarkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Frontend Developer & UI/UX Designer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className=" w-10 h-10 rounded-full flex items-center 
            bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
            justify-center hover:scale-110 hover:bg-linear-to-r
            hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className=" w-10 h-10 rounded-full flex items-center 
            bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
            justify-center hover:scale-110 hover:bg-linear-to-r
            hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className=" w-10 h-10 rounded-full flex items-center 
            bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]
            justify-center hover:scale-110 hover:bg-linear-to-r
            hover:from-orange-500 hover:to-amber-500 hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p
              className="text-sm flex items-center justify-end
            gap-1 text-[#6b7280] dark:text-[#9ca3af]"
            >
              @{currentYear}Made with
              <FaHeart className="text-red-500" /> by
              <span className="mt-1 text-[#f97316]">Noor Fatima</span>
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footer;
