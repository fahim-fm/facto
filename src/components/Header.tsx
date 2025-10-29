import  { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Casa logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Freeze scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navLinks = [
    "Services",
    "How it works",
    "Why is different",
    "Reviews",
    "Pricing",
    "Contact",
  ];

  return (
    <header className="w-full bg-white relative z-50">
      {/* ---------- Main Navbar ---------- */}
      <div className="mt-[40px] w-full max-w-[1435px] h-[58px] mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* ---------- Left: Logo + Hamburger ---------- */}
        <div className="flex items-center gap-[16px]">
          {/* Hamburger menu (below 1024px) */}
          <button
            className="block lg:hidden p-2 rounded-md"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="w-[151px] h-[56.37px] object-contain"
          />
        </div>

        {/* ---------- Nav Links (Desktop only) ---------- */}
        <nav className="hidden lg:flex w-[737px] h-[30px] gap-[48px] items-center justify-between font-[roboto] text-[18px] leading-[30px] text-[#000000] font-normal">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-gray-700 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* ---------- CTA Buttons (Desktop only) ---------- */}
        <div className="hidden lg:flex items-center gap-[24px] w-[323px] h-[58px]">
          {/* Sign In */}
          <button className="w-[145px] h-[58px] bg-[#DFEDE3] rounded-full flex items-center justify-center px-[40px] py-[16px]">
            <span className="font-manrope font-semibold text-[20px] w-[65px] h-[26px] leading-[26px] text-[#0F4E23]">
              Sign In
            </span>
          </button>

          {/* Sign Up */}
          <button className="w-[154px] h-[58px] bg-[#000000] text-white rounded-full flex items-center justify-center px-[40px] py-[16px]">
            <span className="font-manrope font-semibold text-[20px] w-[74px] h-[26px] leading-[26px]">
              Sign Up
            </span>
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      {isOpen && (
        <div
          id="menu-overlay"
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex"
          onClick={(e) => {
            if ((e.target as HTMLElement).id === "menu-overlay") setIsOpen(false);
          }}
        >
          {/* Left Slide Menu Panel */}
          <div
            className="bg-white w-[280px] sm:w-[320px] h-full p-6 flex flex-col justify-between shadow-xl animate-slideInLeft"
            style={{ animation: "slideInLeft 0.3s ease-out" }}
          >
            {/* Top: Logo + Close */}
            <div className="flex items-center justify-between mb-8">
              <img
                src={logo}
                alt="Logo"
                className="w-[110px] h-[45px] object-contain"
              />
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col items-start space-y-6 font-[roboto] text-[18px] leading-[30px] text-[#000000]">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-gray-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Buttons */}
            <div className="flex flex-col items-start gap-4 mt-10">
              <button className="w-[200px] h-[54px] bg-[#DFEDE3] rounded-full flex items-center justify-center px-[40px] py-[16px]">
                <span className="font-manrope font-semibold text-[18px] leading-[26px] text-[#0F4E23]">
                  Sign In
                </span>
              </button>
              <button className="w-[200px] h-[54px] bg-[#000000] text-white rounded-full flex items-center justify-center px-[40px] py-[16px]">
                <span className="font-manrope font-semibold text-[18px] leading-[26px]">
                  Sign Up
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

    
    </header>
  );
}
