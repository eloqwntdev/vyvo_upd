import Image from "next/image";
import React from "react";

const SecondGeneration = () => {
  return (
    <section className="bg-black py-12 md:py-20 lg:py-[147px] px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-[146px]">
      <div className="max-w-[495px] w-full flex flex-col gap-6 md:gap-10">
        <Image
          src="/biosense-products/vyvo-pay/vyvo-pay.webp"
          alt="VyvoPay Logo"
          width={211}
          height={44}
          className="w-[150px] md:w-[180px] lg:w-[211px]"
        />
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-white font-nb font-light text-[32px] leading-[38px] md:text-[40px] md:leading-[46px] lg:text-[56px] lg:leading-[60px]">
            Second Generation VyvoPay
          </h2>
          <p className="font-nb font-light text-[16px] leading-[20px] text-white">
            VyvoPay is built right into the band of the BioSense Watch.
            <br />
            <br />
            Use it with NFC contactless terminals around the world to pay for
            goods and services with a simple tap. It works even if the watch is
            out of power!
          </p>
        </div>
      </div>

      <div className="max-w-[702px] w-full mt-8 md:mt-0">
        <Image
          src="/biosense-products/vyvo-pay/vyvo-pay-image.webp"
          alt="BioSense Watch with VyvoPay demonstration"
          width={702}
          height={605}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default SecondGeneration;
