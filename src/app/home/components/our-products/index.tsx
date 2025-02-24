import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <section className="bg-black py-10 md:py-20">
      <div className="w-full flex flex-col gap-8 md:gap-[48px] items-center justify-center px-4 md:px-8">
        <h2 className="text-white font-nb text-[20px] md:text-[48px] leading-[24px] md:leading-[52px] tracking-[-3%]">
          Our Partners
        </h2>

        <div className="max-w-[1280px] w-full grid grid-cols-2 md:grid-cols-4">
          {/* First Row */}
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient only-right gradient-partner-card">
            <Image
              src={"/homepage/partners/mastercard.svg"}
              alt={"Mastercard"}
              width={235}
              height={30}
              className="w-[105px] md:w-[235px] h-auto"
            />
          </div>
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient only-right gradient-partner-card">
            <Image
              src={"/homepage/partners/wert.svg"}
              alt={"Wert"}
              width={110}
              height={60}
              className="w-[37px] md:w-[110px] h-auto"
            />
          </div>
          <div className="h-[136px] md:h-[305px] flex items-center justify-center gradient-partner-card">
            <Image
              src={"/homepage/partners/odee.svg"}
              alt={"Odee"}
              width={106}
              height={60}
              className="w-[42px] md:w-[106px] h-auto"
            />
          </div>
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient only-left !border-t-0 gradient-partner-card">
            <Image
              src={"/homepage/partners/infineon.svg"}
              alt={"Infineon"}
              width={135}
              height={60}
              className="w-[54px] md:w-[135px] h-auto"
            />
          </div>

          {/* Horizontal Divider */}
          <div className="col-span-2 md:col-span-4 h-[1px] bg-white/10"></div>

          {/* Second Row */}
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient-reverse only-right gradient-partner-card-reverse">
            <Image
              src={"/homepage/partners/vechain.webp"}
              alt={"Vechain"}
              width={193}
              height={70}
              className="w-[69px] md:w-[193px] h-auto"
            />
          </div>
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient-reverse only-right gradient-partner-card-reverse">
            <Image
              src={"/homepage/partners/onfido.svg"}
              alt={"Onfido"}
              width={177}
              height={40}
              className="w-[66px] md:w-[177px] h-auto"
            />
          </div>
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient-reverse only-right gradient-partner-card-reverse">
            <Image
              src={"/homepage/partners/tappy.webp"}
              alt={"Tappy"}
              width={157}
              height={50}
              className="w-[72px] md:w-[157px] h-auto"
            />
          </div>
          <div className="h-[136px] md:h-[305px] flex items-center justify-center border-gradient-reverse only-left gradient-partner-card-reverse">
            <Image
              src={"/homepage/partners/subhosting.webp"}
              alt={"Subhosting"}
              width={221}
              height={35}
              className="w-[94px] md:w-[221px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
