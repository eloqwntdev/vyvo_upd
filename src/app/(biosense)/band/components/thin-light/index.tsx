import Image from "next/image";
import React from "react";

const ThinLight = () => {
  return (
    <section className="py-[120px] bg-black md:block hidden">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        <div className="max-w-[530px] w-full flex items-center justify-center relative">
          <Image
            src="/biosense-products/band/thin-band.webp"
            alt=""
            width={325}
            height={411}
          />

          <img
            src="/biosense-products/band/top-item.svg"
            className="absolute max-w-[287px] top-[-5%] right-[0%]"
            alt=""
          />
          <img
            src="/biosense-products/band/middle-item.svg"
            className="absolute max-w-[302px] top-[30%] right-[0%]"
            alt=""
          />
          <img
            src="/biosense-products/band/bottom-item.svg"
            className="absolute max-w-[302px] top-[72%] right-[2%]"
            alt=""
          />
        </div>
        <div className="max-w-[483px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-white font-nb font-light text-[56px] leading-[60px]">
              Thin. Light. 
              <br />
              <span className="text-gradient">Powerful!</span>
            </h2>

            {/* Feature list with bullet points */}
            <ul className="flex flex-col gap-6 mt-4">
              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  What might be most remarkable about BioSense is that it’s a
                  mere 2.5mm thick and a feather-light 22 grams and can still
                  house all those features.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  The liquid silicone band is hypoallergenic and features a
                  secure metal closure with real 18k gold plating.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  BioSense has a waterproof rating of IP68, the highest, which
                  means it’s safe up to 50 meters.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="rounded-full w-2 h-2 bg-white mt-2 shrink-0"></div>
                <span className="text-white font-nb font-light text-[16px] leading-[20px]">
                  The battery lasts up to five days on a single charge, so don’t
                  be afraid to use the wide variety of features as often as you
                  want.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThinLight;
