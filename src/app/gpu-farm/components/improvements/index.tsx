import Image from "next/image";

const Improvements = () => {
  return (
    <section className="bg-black py-20 flex flex-col gap-[60px] items-center justify-center">
      <h2 className="text-white font-nb text-[48px] leading-[52px]">
        How GPU Farms Enhance VAI OS
      </h2>

      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        <div className="max-w-[630px] w-full h-[450px] border border-[#FFFFFF1A] rounded-[20px]"></div>

        <div className="flex flex-col gap-12 max-w-[476px] w-full">
          <div className="flex items-start gap-10">
            <div className="size-16 shrink-0 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
              <Image
                src={"/gpu-farms-img/improvements-icons/icon1.svg"}
                width={32}
                height={32}
                alt={""}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-nb text-[24px] leading-[28px] tracking-[-0.7px]">
                Seamless AI Operations
              </h3>
              <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
                GPU farms provide the computing power needed to support VAI OS’s
                advanced features, ensuring smooth, real-time interactions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-10">
            <div className="size-16 shrink-0 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
              <Image
                src={"/gpu-farms-img/improvements-icons/icon2.svg"}
                width={32}
                height={32}
                alt={""}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-nb text-[24px] leading-[28px] tracking-[-0.7px]">
                Data Security
              </h3>
              <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
                By hosting on Vyvo’s infrastructure, data remains private and
                protected from external risks.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-10">
            <div className="size-16 shrink-0 rounded-full vyvo-tech-bg-banner-tag flex items-center justify-center">
              <Image
                src={"/gpu-farms-img/improvements-icons/icon3.svg"}
                width={32}
                height={32}
                alt={""}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-nb text-[24px] leading-[28px] tracking-[-0.7px]">
                Reliable Performance
              </h3>
              <p className="text-[#FFFFFF99] font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px]">
                With distributed servers, users worldwide experience consistent,
                high-quality AI support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Improvements;
