import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const ContentSection: React.FC = () => {
  return (
    <section className="bg-white mt-[80px] sm:mt-[120px] lg:mt-[140px] xl:mt-[160px] mb-[120px] lg:mb-[140px] xl:mb-[160px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-8 font-roboto">
        {/* ---------- Top Section ---------- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 lg:gap-[100px] xl:gap-[141px] mb-[60px] sm:mb-[80px] lg:mb-[110px] xl:mb-[133px]">
          {/* ---------- Left Content ---------- */}
          <div className="text-left w-full lg:w-[780px] xl:w-[880px]">
            <div className="rounded-lg p-0 lg:p-4 xl:p-6 inline-block">
              <span
                className="inline-block w-auto h-auto font-manrope bg-[#E5F7E5] text-[#1A4D16]
                               text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[20px]
                               px-[18px] sm:px-[20px] lg:px-[22px] xl:px-[24px]
                               py-[6px] sm:py-[7px] lg:py-[7px] xl:py-[8px]
                               font-semibold rounded-full mb-[20px] sm:mb-[22px] lg:mb-[28px] xl:mb-[32px]"
              >
                About Casa Service
              </span>

              <h2
                className="text-[28px] sm:text-[36px] lg:text-[48px] xl:text-[56px] 
                           font-extrabold text-[#141414]
                           leading-[36px] sm:leading-[46px] lg:leading-[58px] xl:leading-[68px] 
                           font-roboto"
              >
                Revolutionizing Cash Flow for Business Owners!
              </h2>
            </div>
          </div>

          {/* ---------- Right Content ---------- */}
          <div className="text-left w-full lg:w-[540px] xl:w-[619px] flex flex-col justify-center">
            <p
              className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[24px]
                         text-[#686868] mb-[24px] sm:mb-[26px] lg:mb-[30px] xl:mb-[32px]
                         leading-[22px] sm:leading-[26px] lg:leading-[32px] xl:leading-[36px]
                         font-manrope"
            >
              Empowering businesses faster cash access, CASA provides a secure,
              fast, and flexible solution to get early payments for credit card
              sales.
            </p>
            <button className="btn w-full sm:w-auto text-[16px] lg:text-[18px] xl:text-[20px] px-6 lg:px-8 py-3 lg:py-4">
              Join Now
            </button>
          </div>
        </div>

        {/* ---------- Cards Section ---------- */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        gap-[24px] sm:gap-[28px] lg:gap-[30px] xl:gap-[36px]"
        >
          {/* ---------- Card 1 ---------- */}
          <div
            className="bg-[#f8f8f8] rounded-[20px] sm:rounded-[22px] lg:rounded-[23px] xl:rounded-[25px]
                          w-full lg:w-[420px] xl:w-[456px]
                          p-[32px] sm:p-[38px] lg:p-[42px] xl:p-[48px]
                          flex flex-col justify-start
                          transition-all duration-300 hover:bg-[#0F3E1E] hover:text-white group mx-auto"
          >
            <h3
              className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-2xl
                           font-bold text-gray-800 mb-[20px] sm:mb-[22px] lg:mb-[22px] xl:mb-[24px]
                           group-hover:text-white font-roboto"
            >
              Secure and Instant Cash Advances
            </h3>
            <div className="mb-[20px] sm:mb-[22px] lg:mb-[24px] xl:mb-6">
              <img
                src={img1}
                alt="Secure and Instant"
                className="w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[56px] xl:h-[56px]
                           mb-[20px] sm:mb-[22px] lg:mb-[24px] xl:mb-6"
              />
            </div>
            <p
              className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-base 
                          text-gray-600 leading-[22px] sm:leading-[24px] lg:leading-[26px] xl:leading-relaxed
                          group-hover:text-white font-manrope"
            >
              No more waiting weeks—convert daily credit card transactions into
              cash within 24 hours to keep your business running smoothly.
            </p>
          </div>

          {/* ---------- Card 2 ---------- */}
          <div
            className="bg-[#f8f8f8] rounded-[20px] sm:rounded-[22px] lg:rounded-[23px] xl:rounded-[25px]
                          w-full lg:w-[420px] xl:w-[456px]
                          p-[32px] sm:p-[38px] lg:p-[42px] xl:p-[48px]
                          flex flex-col justify-start
                          transition-all duration-300 hover:bg-[#0F3E1E] hover:text-white group mx-auto"
          >
            <h3
              className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-2xl
                           font-bold text-gray-800 mb-[20px] sm:mb-[22px] lg:mb-[22px] xl:mb-[24px]
                           group-hover:text-white font-roboto"
            >
              Transparent and Fair Pricing Process
            </h3>
            <div className="mb-[20px] sm:mb-[22px] lg:mb-[24px] xl:mb-6">
              <img
                src={img2}
                alt="Transparent Pricing"
                className="w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[56px] xl:h-[56px]
                           mb-[20px] sm:mb-[22px] lg:mb-[24px] xl:mb-6"
              />
            </div>
            <p
              className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-base 
                          text-gray-600 leading-[22px] sm:leading-[24px] lg:leading-[26px] xl:leading-relaxed
                          group-hover:text-white font-manrope"
            >
              No Hidden Fees. No Surprises! Enjoy clear, upfront pricing with
              flexible funding options, so you always know what to expect.
            </p>
          </div>

          {/* ---------- Card 3 ---------- */}
          <div
            className="bg-[#f8f8f8] rounded-[20px] sm:rounded-[22px] lg:rounded-[23px] xl:rounded-[25px]
                          w-full lg:w-[420px] xl:w-[456px]
                          p-[32px] sm:p-[38px] lg:p-[42px] xl:p-[48px]
                          flex flex-col justify-start
                          transition-all duration-300 hover:bg-[#0F3E1E] hover:text-white group mx-auto"
          >
            <h3
              className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-2xl
                           font-bold text-gray-800 mb-[20px] sm:mb-[22px] lg:mb-[22px] xl:mb-[24px]
                           group-hover:text-white font-roboto"
            >
              Flexible and Secure
              <br />
              Payout Options
            </h3>
            <div className="mb-[20px] sm:mb-[22px] lg:mb-[24px] xl:mb-6">
              <img
                src={img3}
                alt="Flexible Payouts"
                className="w-[48px] h-[48px] sm:w-[50px] sm:h-[50px] lg:w-[54px] lg:h-[54px] xl:w-[56px] xl:h-[56px]
                           mb-[20px] sm:mb-[22px] lg:mb-[24px] xl:mb-6"
              />
            </div>
            <p
              className="text-[14px] sm:text-[15px] lg:text-[15.5px] xl:text-base 
                          text-gray-600 leading-[22px] sm:leading-[24px] lg:leading-[26px] xl:leading-relaxed
                          group-hover:text-white font-manrope"
            >
              We offer flexible and easy payout options tailored to your needs,
              ensuring quick access to your funds. Choose from multiple payment
              methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
