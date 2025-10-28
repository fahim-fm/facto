import heroEmoji from "../assets/Illustration.png";
export default function Hero() {
  return (
    <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
       <div
        className="
          bg-[#DFEDE3] rounded-full w-64 text-xl  mx-auto text-green-800 mb-6">Fast. secure. hassle-free
      </div>
     {/* Hero Heading */}
<h1
  className="max-w-[1042px] text-[64px] leading-[82px] font-bold font-roboto text-gray-900 mb-4 opacity-100"
>
  Get Paid Faster{" "}
  <span className="inline-block align-middle translate-y-1">
    <img
      src={heroEmoji}
      alt="money emoji"
      className="w-[64px] h-[48px] inline-block"
    />
  </span>{" "}
  Instant Cash for Businesses!
</h1>

      <p className=" text-lg text-gray-600 max-w-3xl mx-auto mb-8">
        Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds.
      </p>
      <button className="bg-green-800 text-white px-6 py-2 mt-2 rounded-full text-base font-semibold hover:bg-green-700 transition">
          Get Started
        </button>
    </section>
  );
}