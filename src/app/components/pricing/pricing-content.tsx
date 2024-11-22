//@ts-nocheck

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SlashButton from "@/components/common/controllers/button/slash-button";
import FeaturesList from "./features-list";

interface PricingFeature {
  title: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  price: number;
  isPopular?: boolean;
  features: PricingFeature[];
}

const pricingPlans: Record<string, PricingPlanProps> = {
  personal: {
    title: "Personal",
    price: 25,
    features: [
      { title: "Access to the App Marketplace", included: true },
      {
        title: "Multiple voice selection and voice clone option",
        included: false,
      },
      { title: "Biometric and voice recognition", included: true },
      { title: "DID phone number for the AI", included: false },
      {
        title: "Messenger Agent type: Telegram, WhatsApp (text)",
        included: true,
      },
      {
        title: "Sublicense module enabled on the Hub Console",
        included: false,
      },
      { title: "Usage of the OS", included: true },
      { title: "Developer Program", included: false },
    ],
  },
  pro: {
    title: "Professional",
    price: 75,
    isPopular: true,
    features: [
      { title: "Access to the App Marketplace", included: true },
      { title: "Biometric and voice recognition", included: true },
      {
        title: "Messenger Agent type: Telegram, WhatsApp (text)",
        included: true,
      },
      { title: "Usage of the OS", included: true },
      {
        title: "Multiple voice selection and voice clone option",
        included: true,
      },
      { title: "DID phone number for the AI", included: true },
      { title: "Sublicense module enabled on the Hub Console", included: true },
      { title: "Developer Program", included: true },
    ],
  },
};

const PricingContent = ({ activeTab }: { activeTab: string }) => {
  const plan = pricingPlans[activeTab];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-4 items-center"
      >
        <div className="flex flex-col gap-1 md:gap-4 items-center my-5 md:my-0">
          <div className="flex items-center gap-2 relative">
            <span className="font-nb text-[20px] leading-[24px] md:text-[40px] md:leading-[44px] tracking-[-1.2px] text-white">
              {plan.title}
            </span>
            {plan.isPopular ? (
              <div className="most-popular py-[5px] px-2 bg-[#000000CC] hidden md:grid place-content-center absolute top-[-20%] right-[-30%]">
                <span className="bg-gradient-to-r from-[#5674CD] to-[#9AB4FF] font-normal font-nm text-[12px] leading-[16px] bg-clip-text text-transparent">
                  Most Popular
                </span>
              </div>
            ) : null}
          </div>
          <div className="flex gap-1 items-end justify-center mt-1">
            <span className="text-[#FFFFFF] md:text-[32px] text-[20px] leading-[24px] font-nb md:leading-[36px] tracking-[-0.96px]">
              ${plan.price}
            </span>
            <span className="text-[#9DA2B3] text-[14px] leading-[18px] md:text-[16px] font-nb md:leading-[20px] tracking-[-0.48px]">
              per month
            </span>
          </div>
        </div>

        <motion.div
          layout
          className="lg:grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-16 mt-[60px] mb-[60px] hidden"
        >
          {plan.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3"
            >
              <Image
                src={feature.included ? "/icons/yes.svg" : "/icons/no.svg"}
                alt={feature.included ? "Included" : "Not included"}
                width={24}
                height={24}
              />
              <span className="font-nb text-[16px] font-light leading-[20px] text-white">
                {feature.title}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="lg:hidden">
          <FeaturesList plan={plan} isMobile={true} />
        </div>

        <SlashButton
          label={`Try ${activeTab === "pro" ? "Pro " : ""}Now`}
          className="py-5 px-[30px] gap-4 !mx-auto"
          containerStyles="!w-auto mt-5 md:mt-0"
          showIcon={false}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PricingContent;
