import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Casa logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#" },
    { name: "How it works", href: "#" },
    { name: "Why is different", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="mt-[70px] w-full bg-white border-b border-gray-100">
      <div className="max-w-[1435px] mx-auto flex items-center justify-between h-[58px] px-[112px]">

        {/* Desktop Menu */}
        <div className=" hidden lg:flex items-center w-full">
          {/* Logo */}
          <div className="w-[151px] h-[56.37px] flex items-center">
            <img
              src={logo}
              alt="Casa Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center w-[737px] h-[30px] gap-[48px] ml-[40px] mr-[40px]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[#141414] text-[15px] font-['Roboto'] leading-[30px] hover:text-[#0F4E23] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center w-[323px] h-[58px] gap-[24px] ml-auto">
            <button className="w-[145px] h-[58px] bg-[#DFEDE3] text-[#0F4E23] text-[20px] font-['Manrope'] font-semibold rounded-full flex justify-center items-center hover:bg-[#cfe0d4] transition">
              Sign In
            </button>
            <button className="w-[154px] h-[58px] bg-[#141414] text-white text-[20px] font-['Manrope'] font-semibold rounded-full flex justify-center items-center hover:bg-[#2d2d2d] transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 flex flex-col items-center py-6 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#141414] text-[18px] font-['Roboto'] leading-[30px]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile CTA Buttons */}
          <div className="flex flex-col items-center gap-4 w-full px-8">
            <button className="w-[145px] h-[58px] bg-[#DFEDE3] text-[#0F4E23] text-[20px] font-['Manrope'] font-semibold rounded-full flex justify-center items-center hover:bg-[#cfe0d4] transition">
              Sign In
            </button>
            <button className="w-[154px] h-[58px] bg-[#141414] text-white text-[20px] font-['Manrope'] font-semibold rounded-full flex justify-center items-center hover:bg-[#2d2d2d] transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
