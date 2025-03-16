import Image from "next/image";
import Link from "next/link";
import AutoShowBlock from "./autoshow";

const BiosenseBand = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="max-w-[630px] w-full flex flex-col gap-5">
          <AutoShowBlock />
          <div className="flex gap-5">
            <Image
              src="/wearables-img/band/image1.webp"
              width={305}
              height={220}
              alt=""
            />
            <Image
              src="/wearables-img/band/image2.webp"
              width={305}
              height={220}
              alt=""
            />
          </div>
        </div>
        <div className="max-w-[480px] w-full flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="font-nb font-light text-[56px] leading-[64px] tracking-[-1.7px] banner-gradient-text">
              BioSense Band
            </h2>

            <p className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
              Our award-winning BioSense Band combines sleek design with
              powerful innovation, featuring a Clinical-Grade fingertip sensor
              to track metrics like body composition, hydration, and more
            </p>

            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-black"></div>
                <span className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
                  BP + SPO2 + APG
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-black"></div>

                <span className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
                  Bioelectrical Impedance Analysis
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-black"></div>

                <span className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
                  Electrocardiogram Measurement
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-black"></div>

                <span className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
                  Continuous Monitoring for Atrial Fibrillation (AFib
                </span>
              </li>
              <li className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-black"></div>

                <span className="font-nb font-light text-[16px] leading-[20px] tracking-[-3%] text-black">
                  Continuous Monitoring of Other Key Health Metrics
                </span>
              </li>
            </ul>
          </div>

          <Link
            className="text-black font-nb text-[16px] cross-btn-shadow leading-[20px] tracking-[-0.5px] py-2.5 max-w-[140px] w-full rounded-2xl bg-[#77A9E829] flex items-center justify-center"
            href={""}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BiosenseBand;
