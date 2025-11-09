import React from "react";
import { ArrowUpRight } from "lucide-react"; // for icons (optional)

const ContentSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1440px] mx-auto py-20 gap-[130px]">
      {/* === TEXT INFO === */}
      <div className="flex flex-col items-center w-full max-w-[1042px] gap-[48px] text-center">
        {/* Sub head */}
        <div className="flex justify-center items-center bg-[#DFEDE3] px-6 py-2 rounded-full">
          <p className="text-[#0F4E23] text-[20px] font-medium font-[Manrope]">
            Fast. Secure. Hassle-free
          </p>
        </div>

        {/* Header + Body */}
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-[72px] font-extrabold leading-[82px] text-[#141414] font-[Roboto] max-w-[1042px]">
            Get Paid Faster Instant Cash for Businesses!
          </h2>

          <p className="text-[24px] text-[#686868] leading-[36px] font-[Manrope] max-w-[1042px]">
            Stop waiting months for credit card payments. CASA helps business
            owners access cash instantly by converting card transactions into
            immediate funds.
          </p>

          {/* CTA Button */}
          <button className="bg-[#0F4E23] text-white font-[Manrope] font-semibold text-[20px] px-10 py-4 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      {/* === CARD SECTION === */}
      <div className="flex flex-col lg:flex-row items-end justify-center gap-9 w-full max-w-[1440px]">
        {/* === CARD 1 === */}
        <div className="flex flex-col bg-[#E0F0E5] rounded-[24px] p-[46px_28px] gap-[50px] w-[457px] h-[665px]">
          {/* Header */}
          <div className="flex flex-row gap-6 items-start bg-[#E0F0E5]">
            <div className="w-[40px] h-[40px] bg-[#BFE5A6] rounded-full flex items-center justify-center">
              <div className="w-[24px] h-[24px] bg-[#141414] rounded-sm"></div>
            </div>
            <h3 className="text-[32px] font-semibold text-[#141414] leading-[40px]">
              Sales overview from Previous Day
            </h3>
          </div>

          {/* Chart Section */}
          <div className="flex flex-col gap-[50px]">
            <div className="bg-white w-[400px] h-[361px] rounded-[24px] flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-4 mb-4">
                <div className="w-[32px] h-[32px] bg-[#0F4E23] rounded-full flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-[#686868] text-[20px] font-medium">
                    Total sales :
                  </p>
                  <p className="text-[#686868] text-[32px] font-bold">
                    $12,500
                  </p>
                </div>
              </div>
              {/* Mini Bar Chart */}
              <div className="flex items-end justify-between w-[334px] h-[179px]">
                {[
                  { label: "Sun", h: 68, color: "#E0F0E5" },
                  { label: "Mon", h: 45, color: "#E0F0E5" },
                  { label: "Tue", h: 88, color: "#E0F0E5" },
                  { label: "Wed", h: 71, color: "#E0F0E5" },
                  { label: "Thu", h: 143, color: "#0F4E23" },
                  { label: "Fri", h: 57, color: "#DAFFC2" },
                  { label: "Sat", h: 106, color: "#E0F0E5" },
                ].map((bar, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-end gap-2"
                  >
                    <div
                      style={{
                        height: `${bar.h}px`,
                        backgroundColor: bar.color,
                      }}
                      className="w-[34px] rounded-sm"
                    ></div>
                    <p className="text-[14px] text-[#686868] font-semibold">
                      {bar.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="flex justify-center items-center bg-[#BFE5A6] rounded-[24px] p-4 w-[400px]">
              <div className="flex flex-row items-center gap-4">
                <div className="w-[24px] h-[24px] bg-[#0F4E23] rounded-full flex items-center justify-center"></div>
                <p className="text-[#141414] text-[20px]">
                  Avg. sale: $104.16 / per transaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === CARD 2 === */}
        <div className="flex flex-col bg-[#DAFFC2] rounded-[25px] p-[46px_28px] gap-[54px] w-[456px] h-[665px]">
          <div className="flex flex-row items-start gap-6">
            <div className="w-[48px] h-[48px] bg-[#BFE5A6] rounded-full flex items-center justify-center">
              <span className="text-[#0F4E23] font-bold text-xl">1</span>
            </div>
            <h3 className="text-[32px] font-semibold text-[#141414] leading-[40px]">
              Factoring Possible Amount...
            </h3>
          </div>

          <p className="text-[#686868] text-[20px] leading-[32px]">
            Businesses can quickly unlock funds by factoring their pending
            invoices. CASA ensures transparency, real-time reporting, and faster
            processing.
          </p>

          <button className="bg-[#0F4E23] text-white px-10 py-4 rounded-full text-[20px] font-semibold w-fit">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
