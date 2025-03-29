import Image from "next/image";
import React from "react";

const WayToPay = () => {
  return (
    <section className="bg-black relative min-h-[900px] py-20 flex flex-col items-center justify-center gap-[60px]">
      <div className="max-w-[591px] w-full flex flex-col items-center justify-center gap-6">
        <h2 className="text-white font-nb font-light text-[56px] leading-[60px]">
          The Easiest <span className="text-gradient">Way to Pay</span>
        </h2>
        <p className="max-w-[488px] w-full text-white font-nb font-light text-[16px] leading-[20px]">
          You may never need to reach for your wallet again. Pay for goods and
          services using $VSC, even when your BioSense is out of power.
        </p>
      </div>
      <img
        src="/biosense-products/band/pay-sensor.webp"
        className="absolute w-full h-full max-w-[800px] object-contain left-0 "
      />
      <div className="max-w-[1280px] w-full mx-auto flex items-end justify-end">
        <div className="wearables-card-gradient w-full nl-aut self-end max-w-[598px] rounded-[24px] relative overflow-hidden p-4">
          <div>
            <Image
              src={"/biosense-products/band/way-to-pay.webp"}
              width={598}
              height={628}
              alt={` Device`}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WayToPay;
