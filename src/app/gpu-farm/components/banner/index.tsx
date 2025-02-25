import ScrollToSection from "@/components/common/animations/scroll-to-section";

const GPUBanner = () => {
  return (
    <section className="bg-black h-[900px] w-full relative flex items-end">
      <img
        src="/banner/squares_gifs/Preloder-back.gif"
        alt="Background GIF"
        className="absolute z-[2] w-full h-full left-0  gpu-farm-clip-path"
      />

      <img
        src="/gpu-farms/banner.webp"
        alt=""
        className="absolute w-full h-full top-0 right-0 z-[1]"
      />
      <div className="max-w-[1280px] w-full mx-auto  relative z-10 ">
        <div className="max-w-[509px] w-full flex flex-col gap-6 pb-[167px]">
          <h1 className="font-nb font-light text-[72px] leading-[76px] tracking-[-2.2px] text-white">
            Vyvo <span className="banner-gradient-text">GPU Farms</span>
          </h1>
          <p className="max-w-[467px] w-full font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px] text-white">
            Vyvo GPU Farms power the AI infrastructure behind VAI OS, delivering
            high-speed, secure, and scalable computing. Built to reduce reliance
            on third-party services, these farms ensure data privacy and optimal
            performance while supporting advanced AI features in real time.
          </p>
        </div>
        <div className="flex items-center justify-center mb-[37px]">
          <ScrollToSection id={""} />
        </div>
      </div>
    </section>
  );
};

export default GPUBanner;
