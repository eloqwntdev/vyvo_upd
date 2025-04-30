import Image from "next/image";
import React from "react";
import animationData from "../../../../public/lottie/1_3/data.json";
import Link from "next/link";
import dynamic from "next/dynamic";

const Tokenomics = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });

  return (
    <section className="py-20 flex flex-col gap-[60px] items-center justify-center">
      <h2 className="text-white px-4 md:px-20 w-full text-left md:text-center text-[20px] leading-[24px] tracking-[-0.6px] md:text-[56px] md:leading-[60px] md:tracking-[-1.68px] font-nb font-light">
        Tokenomics
      </h2>

      <div className="flex max-w-[1281px] w-full mx-ayto items-center justify-between">
        <div className="flex flex-col gap-12 max-w-[570px] w-full">
          <div className="flex flex-col gap-6 max-w-[527px]">
            <h3 className="text-white font-nb font-light text-[48px] leading-[60px]">
              Vyvo Smart Chain (VSC)
            </h3>

            <p className="text-white font-nb font-light text-[16px] leading-[20px]">
              Vyvo Smart Chain is a HealthFi ecosystem that promotes and rewards
              positive lifestyle habits through health data monetization. The
              network runs on a validation protocol called Proof-of-Sensing
              (PoSe), which aims to give users full privacy, complete
              decentralization, and access to monetization of their personal
              health data.
              <br />
              <br />
              VSC is the native utility token that is used for: - Fees for
              processing transactions and storing data. - Running validator
              nodes on the network via staking VSC tokens. - Rewarding users for
              generating health metric data.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 max-w-[505px]">
            <div className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#5348d70a] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
              <Image
                src="/roadmap-img/icon1.svg"
                alt="VSC"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-2">
                <span className="text-white font-bn font-light text-[20px] leading-[24px]">
                  Initial Supply
                </span>
                <span className="text-white font-bn font-normal text-[20px] leading-[24px]">
                  50,000,000 VSC
                </span>
              </div>
            </div>
            <div className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#5348d70a] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
              <Image
                src="/roadmap-img/icon2.svg"
                alt="VSC"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-2">
                <span className="text-white font-bn font-light text-[20px] leading-[24px]">
                  Total Supply
                </span>
                <span className="text-white font-bn font-normal text-[20px] leading-[24px]">
                  250,000,000 VSC
                </span>
              </div>
            </div>
            <div className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#5348d70a] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
              <Image
                src="/roadmap-img/icon3.svg"
                alt="VSC"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-2">
                <span className="text-white font-bn font-light text-[20px] leading-[24px]">
                  Blockchain
                </span>
                <span className="text-white font-bn font-normal text-[20px] leading-[24px]">
                  Vyvo Smart Chain
                </span>
              </div>
            </div>
            <div className="rounded-[12px] py-3 px-4 flex items-center justify-start gap-3 bg-[#5348d70a] shadow-[inset_6px_80px_80px_0px_rgba(148,168,237,0.02),inset_0px_-1px_1px_0px_rgba(148,168,237,0.2),inset_0px_1px_1px_0px_rgba(148,168,237,0.2)] backdrop-blur-[10px]">
              <Image
                src="/roadmap-img/icon4.svg"
                alt="VSC"
                width={48}
                height={48}
              />
              <div className="flex flex-col gap-2">
                <span className="text-white font-bn font-light text-[20px] leading-[24px]">
                  Smart Contract
                </span>
                <Link
                  className="text-[#A170FF] underline font-bn font-normal text-[20px] leading-[24px]"
                  href="/smart-contract"
                >
                  View Contract
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[570px] w-full">
          <div className="flex items-center justify-center">
            <Lottie
              className="w-full h-full pointer-events-none"
              animationData={animationData}
              loop
              assetsPath="/lottie/1_3/images/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
