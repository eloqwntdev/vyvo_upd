import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import RoadmapMobile from "./roadmap/RoadmapMobile";
import barChartCirclesAnimationData from "../../../../public/lottie/roadmap/bar chart + circles/9.json";
import barChartAnimationData from "../../../../public/lottie/roadmap/bar chart/6.json";
import houseIconAnimationData from "../../../../public/lottie/roadmap/house icon animiaiton.json";
import circlesAnimationData from "../../../../public/lottie/roadmap/circles.json";
import headAnimationData from "../../../../public/lottie/roadmap/Head animation/data.json";
import soundWavesAnimationData from "../../../../public/lottie/roadmap/sound waves/data.json";
import brainCardAnimationData from "../../../../public/lottie/roadmap/brain card/data.json";

import RoadmapPc from "./roadmap/RoadmapPc";

enum Side {
  Left = "left",
  Right = "right",
  Top = "top",
  Bottom = "bottom",
}
interface RoadmapCard {
  image: JSX.Element;
  description: string;
  index: number;
  side: Side;
}

interface RoadmapData {
  title: string | null;
  cards: RoadmapCard[];
}
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if viewport is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
const RoadmapCards = () => {
  const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
  });
  const [videoSrc, setVideoSrc] = useState(
    "/gpu-farms-img/improvements/GPU-farm-anim-new.webm"
  );
  const roadmap_datas: RoadmapData[] = [
    {
      title: "Short-Term (0-6 Months)",
      cards: [
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={barChartAnimationData}
              assetsPath="/lottie/roadmap/bar chart/images/"
            />
          ),
          description:
            "Launch of the Financial Management Module with basic expense tracking and budget-setting features. ",
          index: 0,
          side: Side.Right,
        },
        {
          image: (
            <img
              loading="lazy"
              src="/roadmap-img/roadmap-cards/health-metrics-wearables.png"
              className="w-full object-cover"
              alt="Vyvo roadmap"
              width={1140}
              height={840}
            />
          ),
          description:
            "Release of enhanced health metrics and initial integrations with wearable devices like Amazfit and Samsung Watch.",
          index: 0,
          side: Side.Left,
        },
      ],
    },
    {
      title: "Medium-Term (6-12 Months)",
      cards: [
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={houseIconAnimationData}
            />
          ),
          description:
            "Compatibility with additional smart home ecosystems  and third-party productivity tools.",
          index: 1,
          side: Side.Right,
        },
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={circlesAnimationData}
            />
          ),
          description:
            "Introduction of fitness coaching and expanded voice customization.",
          index: 1,
          side: Side.Left,
        },
      ],
    },
    {
      title: "Long-Term (12+ Months)",
      cards: [
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={headAnimationData}
              assetsPath="/lottie/roadmap/Head animation/images/"
            />
          ),
          description:
            "Full development and integration of the omni-model, enabling VAI OS to handle text, audio, images, and video, with  multi-modal output capabilities.",
          index: 2,
          side: Side.Right,
        },
        {
          image: (
            <div className="w-full p-3 h-auto aspect-[4/3] rounded-lg overflow-hidden">
              <motion.video
                id="banner-video"
                autoPlay
                muted
                playsInline
                loop
                key={videoSrc}
                className="z-10 w-full"
              >
                <source src={videoSrc} />
                Your browser does not support the video tag.
              </motion.video>
            </div>
          ),
          description: "Launch of desktop and browser versions.",
          index: 2,
          side: Side.Left,
        },
      ],
    },
    {
      title: null,
      cards: [
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={soundWavesAnimationData}
              assetsPath="/lottie/roadmap/sound waves/images/"
            />
          ),
          description:
            "Continuous expansion of language support and voice options.",
          index: 3,
          side: Side.Right,
        },
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={barChartCirclesAnimationData}
              assetsPath="/lottie/roadmap/bar chart + circles/images/"
            />
          ),
          description:
            "Advanced financial analytics and fitness coaching features based on user preferences.",
          index: 3,
          side: Side.Bottom,
        },
        {
          image: (
            <Lottie
              className="w-full object-cover rounded-[24px]"
              animationData={brainCardAnimationData}
              assetsPath="/lottie/roadmap/brain card/images/"
            />
          ),
          description:
            "Regular updates based on user-driven requests and technological advancements.",
          index: 3,
          side: Side.Left,
        },
      ],
    },
  ];

  const isMobile = useIsMobile();

  return (
    <section className="py-5 md:py-20 px-4 md:px-20 w-full flex flex-col gap-6 items-center justify-center">
      {isMobile && <RoadmapMobile roadmap_datas={roadmap_datas} />}
      {!isMobile && <RoadmapPc roadmap_datas={roadmap_datas} />}
    </section>
  );
};

export default RoadmapCards;
