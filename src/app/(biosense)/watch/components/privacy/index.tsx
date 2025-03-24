import Image from "next/image";
import React from "react";

const Privacy = () => {
  return (
    <section className="bg-black flex flex-col md:flex-row items-center justify-center py-12 md:py-16 px-4 md:px-6 lg:px-8 gap-8 md:gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/biosense-products/privacy/image.webp"
          alt="BioSense Watch with encryption visualization"
          width={927}
          height={900}
          className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[927px]"
        />
      </div>
      <div className="flex flex-col gap-6 w-full md:w-1/2 max-w-full md:max-w-[511px]">
        <h2 className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[60px]">
          Privacy-Protecting Encryption
        </h2>
        <p className="text-white font-nb font-light text-[16px] leading-[20px]">
          Like previous devices, BioSense Watch protects the personal data it
          captures from you through a powerful and proprietary VSC
          Proof-of-Sensing (PoSe) Encryption Chip.
          <br />
          <br />
          Using blockchain technology, this chip verifies and validates the
          origin and generation of health, wellness, and air quality data.
          Furthermore, as a PoSe-enabled device, BioSense Watch rewards you with
          crypto as it gathers your health data.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
