import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Casa logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-white relative z-50">
      {/* ---------- Main Navbar ---------- */}
      <div
        className="mt-[40px] w-full max-w-[1440px] h-[58px] mx-auto flex items-center justify-between 
                   gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[112px]
                   px-4 sm:px-6 md:px-8  xl:px-0"
      >
        {/* ---------- Left: Logo + Hamburger ---------- */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {/* Hamburger (visible < lg) */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-black" />
          </button>

          {/* Logo */}
          <img
            src={logo}
            alt="Casa logo"
            className="h-[56.37px] w-auto object-contain flex-shrink-0
                       sm:w-[110px] md:w-[130px] lg:w-[120px] xl:w-[151px]"
          />
        </div>

        {/* ---------- Nav Links (Desktop only) ---------- */}
        <nav
          className="hidden lg:flex items-center 
                     gap-[28px] xl:gap-[48px] 
                     font-roboto text-[17px] xl:text-[18px] 
                     leading-[28px] xl:leading-[30px] 
                     text-[#141414]"
        >
          {[
            { label: "Services", w: "w-[73px]" },
            { label: "How it works", w: "w-[114px]" },
            { label: "Why is different", w: "w-[125px]" },
            { label: "Reviews", w: "w-[66px]" },
            { label: "Pricing", w: "w-[56px]" },
            { label: "Contact", w: "w-[63px]" },
          ].map(({ label, w }) => (
            <a
              key={label}
              href="#"
              className={`${w} text-center hover:text-gray-700 transition-colors`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ---------- CTA Buttons (Desktop only) ---------- */}
        <div
          className="hidden lg:flex items-center 
                     gap-3 xl:gap-6 flex-shrink-0"
        >
          {/* Sign In */}
          <button
            className="h-[54px] xl:h-[58px] 
                       min-w-[130px] xl:min-w-[145px] 
                       bg-[#DFEDE3] rounded-full flex items-center justify-center px-5 xl:px-6 py-4"
          >
            <span className="font-manrope font-semibold text-[18px] xl:text-[20px] leading-[26px] text-[#0F4E23]">
              Sign In
            </span>
          </button>

          {/* Sign Up */}
          <button
            className="h-[54px] xl:h-[58px] 
                       min-w-[140px] xl:min-w-[154px] 
                       bg-[#000000] text-white rounded-full flex items-center justify-center px-5 xl:px-6 py-4"
          >
            <span className="font-manrope font-semibold text-[18px] xl:text-[20px] leading-[26px]">
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
            if ((e.target as HTMLElement).id === "menu-overlay")
              setIsOpen(false);
          }}
        >
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
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col items-start space-y-6 font-roboto text-[18px] leading-[30px] text-[#141414]">
              {[
                "Services",
                "How it works",
                "Why is different",
                "Reviews",
                "Pricing",
                "Contact",
              ].map((link) => (
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
              <button className="w-[200px] h-[54px] bg-[#DFEDE3] rounded-full flex items-center justify-center px-10 py-4">
                <span className="font-manrope font-semibold text-[18px] leading-[26px] text-[#0F4E23]">
                  Sign In
                </span>
              </button>
              <button className="w-[200px] h-[54px] bg-[#000000] text-white rounded-full flex items-center justify-center px-10 py-4">
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
