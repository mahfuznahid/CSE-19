import { useState } from "react";

export default function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Backdrop Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}
      <nav className="bg-[#1E293B] h-16 sm:h-18 fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center p-2 sm:p-3 md:justify-around">
          {/* Logo and Moto */}
          <a
            className="webname font-bold text-sm sm:text-lg md:text-xl bg-transparent border-none text-[#F8FAFC] p-1 sm:p-0 flex flex-col items-start cursor-pointer hover:text-[#14B8A6] transition duration-300"
            href="#home"
          >
            {props.webname}
            <span className="text-[#F8FAFC] text-sm font-medium">
              {" "}
              {props.moto}{" "}
            </span>
          </a>

          {/* Desktop Navigation (visible on md and above) */}
          <ul className="hidden md:flex gap-7 items-center justify-center list-none m-0 p-0">
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#students"
              >
                Students
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#crs"
              >
                CRs
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#toppers"
              >
                Toppers
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#photo-gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Icon (visible only on sm and below) */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2 hover:opacity-70 transition duration-300"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#F8FAFC] transition duration-300 transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#F8FAFC] transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#F8FAFC] transition duration-300 transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu (visible only on sm and below) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? "max-h-76 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-4 bg-[#0F172A] border-t border-[#334155]">
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#students"
                onClick={closeMenu}
              >
                Students
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#crs"
                onClick={closeMenu}
              >
                CRs
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#toppers"
                onClick={closeMenu}
              >
                Toppers
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#photo-gallery"
                onClick={closeMenu}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="text-[#F8FAFC] no-underline hover:text-[#14B8A6] transition duration-300 block text-base"
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
