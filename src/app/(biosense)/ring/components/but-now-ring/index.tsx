import SlashButton from "@/components/common/controllers/button/slash-button";

const ButNowRing = () => {
  return (
    <section className="min-h-[415px] md:min-h-[800px] lg:min-h-[900px] w-full relative bg-black flex sm:items-center sm:justify-center">
      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute w-full h-full left-0"
      />

      <img
        src="/biosense-products/ring/buy-now.webp"
        alt=""
        className="absolute left-1/2 bottom-0 -translate-x-1/2 max-w-[450px] xs:max-w-[550px] md:max-w-[700px] lg:max-w-[1360px] w-full z-[5]"
      />

      <div className="flex sm:items-center sm:justify-center gap-4 sm:gap-6 max-w-[610px] flex-col w-full z-10 px-4 md:px-6 pt-[39px] md:pt-0">
        <h2 className="text-white font-light font-nb text-[24px] leading-[28px] md:text-[48px] md:leading-[52px] lg:text-[56px] lg:leading-[60px] sm:text-center tracking-[-3%]">
          Are you ready to find your perfect fit?
        </h2>
        <p className="text-white font-light font-nb text-[14px] leading-[18px] md:text-[16px] md:leading-[20px] sm:text-center tracking-[-3%]">
          Make sure to use our “find your size” feature during your purchase for
          a tailored wellness experience.
        </p>
        <SlashButton
          showIcon={false}
          label="Buy Now"
          className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
          labelClassName="!tracking-[-0.2px]"
          containerStyles="!w-auto"
        />
      </div>
    </section>
  );
};

export default ButNowRing;
