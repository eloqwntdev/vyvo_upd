import Image from "next/image";

const VyvoResearchDevelopment = () => {
  return (
    <section className="max-w-[1267px] w-full mx-auto flex justify-between py-20">
      <div className="max-w-[509px] w-full flex flex-col gap-8">
        <div className="flex flex-col gap-8">
          <h2 className="banner-gradient-text font-nb font-light text-[48px] leading-[56px]">
            Vyvo Research
            <br /> & Development
          </h2>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-nb text-[24px] leading-[30px]">
              Creating Devices That People Love
            </h3>
            <p className="font-nb font-light text-[16px] leading-[22px] tracking-wider">
              Since its inception, Vyvo has been driven by the mission to
              redefine wearables and create technology that empowers everyday
              life. Vyvo, along with its technology partners, has continued to
              innovate with products from AI-powered, real-time personalized
              nutrition, to the new BioSense series of smart wearables, which
              won the prestigious IF Design Award and featured a Military-Grade
              Security Chip for unparalleled data protection.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-black font-nb text-[24px] leading-[30px]">
              Our Dedication To Excellence
            </h3>
            <p className="font-nb font-light text-[16px] leading-[22px] tracking-wider">
              FDA clearance for Vyvo's LifeWatch device exemplifies its
              commitment to quality and innovation in health monitoring. Through
              this milestone, Vyvo reinforces its commitment to integrating
              advanced technology with user-focused wellness solutions. With
              secure blockchain-backed data management, Vyvo’s devices provide
              users with accurate, trusted insights while ensuring full control
              over personal information.
            </p>
          </div>
        </div>
        <Image
          src="/wearables-img/research/award.webp"
          width={157}
          height={80}
          alt=""
        />
      </div>

      <div className="max-w-[630px] w-full flex flex-col gap-5">
        <Image
          src="/wearables-img/research/medium-rectangle.webp"
          width={630}
          height={400}
          alt=""
        />
        <div className="flex gap-5">
          <Image
            src="/wearables-img/research/medium-rectangle-second.webp"
            width={305}
            height={226}
            alt=""
          />
          <Image
            src="/wearables-img/research/medium-rectangle-third.webp"
            width={305}
            height={226}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default VyvoResearchDevelopment;
