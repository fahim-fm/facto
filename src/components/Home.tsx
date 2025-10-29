import React from "react";
import { ArrowRight, TrendingUp, ShieldCheck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* ----------------------------- NAVBAR ----------------------------- */}
      <nav className="flex justify-between items-center px-6 md:px-24 py-5 border-b border-gray-100">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-extrabold tracking-tight">
            FACTO<span className="font-normal text-gray-600"> Financial Services</span>
          </h1>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-black cursor-pointer">Services</li>
          <li className="hover:text-black cursor-pointer">How it works</li>
          <li className="hover:text-black cursor-pointer">Why is different</li>
          <li className="hover:text-black cursor-pointer">Reviews</li>
          <li className="hover:text-black cursor-pointer">Pricing</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="px-5 py-2 rounded-full border border-gray-200 bg-[#E6F4E8] hover:bg-[#d7efd9] text-gray-800 transition">
            Sign In
          </button>
          <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          <button className="p-2 text-gray-700">☰</button>
        </div>
      </nav>

      {/* ----------------------------- HERO SECTION ----------------------------- */}
      <section className="flex flex-col items-center text-center px-6 md:px-16 lg:px-24 py-16 md:py-28">
        {/* Badge */}
        <div className="inline-flex items-center bg-green-50 text-green-700 text-xs md:text-sm font-medium px-4 py-1 rounded-full mb-4">
          Fast. secure. hassle-free
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Get Paid Faster{" "}
          <span className="text-green-600 inline-flex items-center">
            <TrendingUp className="w-7 h-7 inline mx-1 text-green-500" />
            Instant Cash
          </span>{" "}
          for Businesses!
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 max-w-2xl mb-8 text-sm md:text-base">
          Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds.
        </p>

        {/* Button */}
        <button className="bg-[#124C2D] text-white text-sm md:text-base px-6 py-3 rounded-full hover:bg-[#0e3f25] transition flex items-center">
          Get Started <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </section>

      {/* ----------------------------- CARDS SECTION ----------------------------- */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16 lg:px-24 pb-20">
        {/* Card 1 */}
        <div className="bg-[#E6F4E8] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center mb-3 text-green-800 font-semibold">
            <TrendingUp className="w-4 h-4 mr-2" />
            Sales overview from Previous Day
          </div>
          <div className="bg-white rounded-xl p-4 mb-3 text-center">
            <p className="text-gray-500 text-sm">Total sales</p>
            <h2 className="text-2xl font-bold text-gray-900">$12,500</h2>
            <div className="bg-green-50 mt-4 rounded-lg py-2">
              <p className="text-green-600 text-sm font-medium">Highest sale → $2,450</p>
            </div>
          </div>
          <div className="flex justify-between text-gray-500 text-xs mb-1">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mb-3">
            <div className="bg-green-600 h-2 rounded-full w-[75%]"></div>
          </div>
          <p className="text-gray-700 text-sm">Avg. sale: $104.16 / per transaction</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#DDF8E4] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center mb-3 text-green-800 font-semibold">
            <ShieldCheck className="w-4 h-4 mr-2" />
            Factoring Possible Amount
          </div>
          <div className="bg-white rounded-xl p-4 mb-3 text-center">
            <p className="text-gray-500 text-sm">Available amount</p>
            <h2 className="text-2xl font-bold text-gray-900">$15,375 USD</h2>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between text-gray-700 text-sm mb-1">
              <span>Factored balance</span>
              <span>$11,531.25</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-600 h-2 rounded-full w-[75%]"></div>
            </div>
            <p className="text-gray-500 text-xs mt-1 text-right">75% complete</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FAFFC7] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center mb-3 text-yellow-900 font-semibold">
            <Users className="w-4 h-4 mr-2" />
            Secure & Streamlined Workflow
          </div>
          <div className="bg-white rounded-xl p-4 mb-3 text-center">
            <p className="text-gray-500 text-sm">Recent User</p>
            <div className="flex justify-center -space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 border border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 border border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 border border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-200 border border-white"></div>
            </div>
            <p className="text-gray-700 text-sm">+9 more</p>
          </div>
          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between text-gray-700 text-sm mb-2">
              <span>Total Balance</span>
              <span>23,576.00</span>
            </div>
            <button className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              + Add Number
            </button>
            <div className="flex justify-between items-center mt-4 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Online</p>
                <p className="text-gray-500 text-xs">Tomy Restaurant</p>
              </div>
              <button className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
                +$10k Confirm
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
