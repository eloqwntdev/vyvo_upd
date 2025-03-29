import SlashButton from "@/components/common/controllers/button/slash-button";
import Image from "next/image";
import React from "react";

const PrivacyBand = () => {
  return (
    <section className="bg-black flex flex-col md:flex-row items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8 gap-8 md:gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/biosense-products/band/Biosense-VSC-Chip.webp"
          alt="BioSense Watch with encryption visualization"
          width={732}
          height={732}
          className="w-full max-w-[450px] md:max-w-[600px] object-contain lg:max-w-[732px]"
        />
      </div>
      <div className="flex flex-col gap-6 w-full md:w-1/2 items-start max-w-full md:max-w-[511px]">
        <h2 className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[60px]">
          Privacy and Proof-of-Sensing
        </h2>
        <p className="text-white font-nb font-light text-[16px] leading-[20px]">
          The VSC Proof-of-Sensing (PoSe) Encryption Chip in every BioSense will
          secure your data using blockchain technology. This immutable, advanced
          technology ensures your biodata stays private.
          <br />
          <br />
          BioSense is equipped with a VSC Proof-of-Sensing (PoSe) Encryption
          Chip to secure your data with blockchain technology. VSC is used to
          verify and validate the origin and generation of health, wellness and
          environmental data. As a PoSe-enabled device, BioSense can generate a
          reward of VSC Coin as it gathers your health data.
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

export default PrivacyBand;
