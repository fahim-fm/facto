import heroEmoji from "../assets/Illustration.png";

export default function Hero() {
  return (
    <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      
      {/* Badge */}
      <div className="w-[279px] h-[42px] bg-[#DFEDE3] rounded-full text-[20px] font-manrope 
                      mx-auto mb-8 flex items-center justify-center text-green-800">
        Fast. secure. hassle-free
      </div>

      {/* Hero Heading */}
     <h1 className="max-w-[1042px] w-full mx-auto text-gray-900 font-bold font-[roboto] 
               text-[40px] sm:text-[56px] lg:text-[72px] leading-snug sm:leading-[72px] lg:leading-[82px] mb-6 text-center">
  Get Paid Faster
  <span className="inline-block  ml-2">
    <img
      src={heroEmoji}
      alt="money emoji"
      className="w-[48px] sm:w-[60px] lg:w-[72px] h-[32px] sm:h-[40px] lg:h-[48px]"
    />
  </span>
  Instant Cash for Businesses!
</h1>


      {/* Paragraph */}
      <p className="max-w-[1042px] w-full mx-auto text-center 
                    text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[30px] lg:leading-[36px] 
                    font-[manrope] font-normal text-[#686868] mb-8 px-2 sm:px-4 lg:px-0">
        Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds.
      </p>

      {/* Button */}
      <button
        className="w-[192px] h-[58px] bg-[#0F4E23] rounded-full mt-[32px] 
                   flex items-center justify-center mx-auto hover:bg-green-700 transition"
      >
        <span className="w-[112px] h-[26px] flex items-center justify-center 
                         text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[24px] lg:leading-[26px] 
                         font-manrope font-semibold text-white">
          Get Started
        </span>
      </button>

    </section>
  );
}
