import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <section className="bg-black py-10 md:py-16 lg:py-[100px] px-4 md:px-6">
      <div className="max-w-[1180px] w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-4">
        <div className="w-full md:max-w-[400px] relative mx-auto md:mx-0 flex items-center justify-center">
          <Image
            src="/biosense-products/ring/ring-overview.webp"
            alt="watch-as-thin"
            width={400}
            height={400}
            className="w-full md:w-full max-w-[400px] "
          />

          <img
            src="/biosense-products/ring/left.webp"
            className="absolute top-[8%] sm:top-[-2%] right-[26%] sm:right-[-20%] md:right-[-10%] w-full max-w-[240px]"
            alt=""
          />
          <img
            src="/biosense-products/ring/bottom.webp"
            className="absolute bottom-0 right-[27%] sm:bottom-[-4%] sm:right-[-10%] md:right-[2%] w-full max-w-[240px]"
            alt=""
          />
        </div>
        <div className="w-full md:max-w-[461px] flex flex-col gap-6 relative items-start">
          <h2 className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[56px] md:leading-[60px]">
            Stylish. Elegant. Advanced. <br />
            <span className="text-gradient">And totally Vyvo.</span>
          </h2>
          <p className="text-white font-nb font-light text-[16px] leading-[20px]">
            At just 3 grams and less than 3 millimeters thick,
            <br /> the BioSense Ring fits into your life effortlessly.
          </p>

          <SlashButton
            showIcon={false}
            label="Buy Now"
            className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full !max-w-[170px]"
            labelClassName="!tracking-[-0.2px]"
            containerStyles="!w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
