"use client";
import { useLottie } from "lottie-react";
import animationData from "../../../../../public/lottie/12/data.json";

const FarmsAsAProduct = () => {
  const options = {
    animationData,
    loop: true,
    assetsPath: "/lottie/12/images/",
  };

  const { View } = useLottie(options);

  return (
    <section className="bg-[#050505] py-20 flex flex-col items-center justify-center gap-[60px]">
      <div className="max-w-[584px] w-full flex flex-col gap-6">
        <h2 className="text-white text-center font-nb font-light text-[48px] leading-[52px] tracking-[-1.4px]">
          GPU Farms as a Product
        </h2>
        <p className="text-white text-center font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
          Vyvo’s GPU farms are not just a backbone for our AI ecosystem—they’re
          also an opportunity for our community to invest in the future:
        </p>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-5">
        <div>{View}</div>
      </div>
    </section>
  );
};

export default FarmsAsAProduct;
