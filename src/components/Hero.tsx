import heroEmoji from "../assets/Illustration.png";

export default function Hero() {
  return (
    <section className="w-full flex justify-center pt-[141px] sm:pt-[120px] lg:pt-[141px] overflow-hidden">
      {/* Max-width container – exact 1440px on XL screens */}
      <div className="w-full max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 text-center">
        {/* ---------- Badge ---------- */}
        <div className=" w-[279px] h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-2 rounded-full bg-[#DFEDE3] mx-auto mb-8">
          <span className=" w-[231px] text-[#0F4E23] font-manrope font-medium text-[20px] leading-[26px] sm:text-[18px] lg:text-[20px]">
            Fast.secure.hassle-free
          </span>
        </div>

        {/* ---------- Hero Heading ---------- */}
        <h1 className=" mt-[32px] mx-auto max-w-[1042px] h-[165px] text-gray-900 font-bold font-roboto text-[36px] leading-[44px] 
                       sm:text-[48px] sm:leading-[58px] 
                       lg:text-[64px] lg:leading-[74px] 
                       xl:text-[72px] xl:leading-[82px]">
          Get Paid Faster
          <span className="inline-block  ml-1 sm:ml-2">
            <img
              src={heroEmoji}
              alt="money emoji"
              className="inline-block w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[60px] lg:h-[60px] xl:w-[72px] xl:h-[72px] object-contain"
            />
          </span>
          Instant Cash for Businesses!
        </h1>

        {/* ---------- Paragraph ---------- */}
        <p className="mx-auto mt-6 max-w-[1042px] text-[#686868] font-manrope font-normal 
                      text-[16px] leading-[24px] 
                      sm:text-[18px] sm:leading-[28px] 
                      lg:text-[22px] lg:leading-[32px] 
                      xl:text-[24px] xl:leading-[36px] 
                      px-2 sm:px-4 lg:px-0">
          Stop waiting months for credit card payments. CASA helps business owners
          access cash instantly by converting card transactions into immediate funds.
        </p>

        {/* ---------- CTA Button ---------- */}
        <button className="mt-8 mb- sm:mb-[120px] lg:mb-[130px] 
                            min-w-[160px] w-[180px] sm:w-[192px] h-[54px] sm:h-[58px] 
                            bg-[#0F4E23] hover:bg-[#0c3a1b] text-white rounded-full 
                            flex items-center justify-center mx-auto transition-colors">
          <span className="font-manrope w-[112px] font-semibold text-[16px] leading-[20px] 
                           sm:text-[18px] sm:leading-[24px] 
                           lg:text-[20px] lg:leading-[26px]">
            Get Started
          </span>
        </button>
      </div>
    </section>
  );
}