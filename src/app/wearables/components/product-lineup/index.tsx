import Image from "next/image";

const ProductLineup = () => {
  return (
    <section className="py-20 flex flex-col gap-10 items-center justify-center">
      <h2 className="text-black font-nb font-light text-[48px] tracking-[-1.4px] leading-[56px] max-w-[637px] text-center">
        <span className="banner-gradient-text">BioSense:</span> Wearable
        Wellness, Anytime, Anywhere
      </h2>
      <div className="max-w-[1180px] w-full flex justify-between">
        <div className="flex flex-col gap-[111px] justify-end items-center">
          <Image
            src={"/wearables-img/lineup/biosense-ring.webp"}
            alt={""}
            width={206}
            height={206}
          />
          <span className="text-black font-nb font-light text-[40px] leading-[48px]">
            BioSense Ring
          </span>
        </div>
        <div className="flex flex-col gap-10 justify-between items-center">
          <Image
            src={"/wearables-img/lineup/biosense-watch.webp"}
            alt={""}
            width={308}
            height={337}
          />{" "}
          <span className="text-black font-nb font-light text-[40px] leading-[48px]">
            BioSense Watch
          </span>
        </div>
        <div className="flex flex-col gap-10 justify-between items-center">
          <Image
            src={"/wearables-img/lineup/biosense-band.webp"}
            alt={""}
            width={289}
            height={289}
          />{" "}
          <span className="text-black font-nb font-light text-[40px] leading-[48px]">
            BioSense Band
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductLineup;
