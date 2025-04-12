"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SlashButton from "@/components/common/controllers/button/slash-button";

interface MobilePricingContentProps {
  isYearly?: boolean;
}

interface PricingPlan {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  isPopular?: boolean;
  features: {
    included: string[];
    excluded: string[];
  };
  usage: {
    chatbot: string;
    audioCall: string;
    videoCall: string;
    maxSessions: string;
  };
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Personal",
    monthlyPrice: 25,
    yearlyPrice: 10,
    features: {
      included: [
        "Access to the App Marketplace",
        "Biometric and voice recognition",
        "Messenger Agent type: Telegram, WhatsApp (text)",
        "Usage of the OS (Read more)",
      ],
      excluded: [
        "Voice Selection",
        "DID phone number for the AI",
        "Sublicense module enabled on the Hub Console",
        "Developer Program",
      ],
    },
    usage: {
      chatbot: "Text-based ChatBot: 100 messages/3 hours",
      audioCall: "Audio call: 60 Minutes/Day",
      videoCall: "Video call: 15 Minutes/Day",
      maxSessions: "Max sessions a day: 100",
    },
  },
  {
    title: "Professional",
    monthlyPrice: 75,
    yearlyPrice: 60,
    isPopular: true,
    features: {
      included: [
        "Access to the App Marketplace",
        "Biometric and voice recognition",
        "Messenger Agent type: Telegram, WhatsApp (text)",
        "Usage of the OS (Read more)",
      ],
      excluded: [
        "Multiple voice selection and voice clone option",
        "DID phone number for the AI",
        "Sublicense module enabled on the Hub Console",
        "Developer Program",
      ],
    },
    usage: {
      chatbot: "Text-based ChatBot: Unlimited",
      audioCall: "Audio call: 180 Minutes/Day",
      videoCall: "Video call: 45 Minutes/Day",
      maxSessions: "Max sessions a day: 300",
    },
  },
];

const FeatureItem = ({
  text,
  included,
}: {
  text: string;
  included: boolean;
}) => {
  // Handle text with (Read more) links
  if (text.includes("(Read more)")) {
    const parts = text.split("(Read more)");
    return (
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-5 h-5 flex-shrink-0">
          <Image
            src={included ? "/icons/yes.svg" : "/icons/no.svg"}
            alt={included ? "Included" : "Not included"}
            width={20}
            height={20}
          />
        </div>
        <span className="font-nb text-[12px] font-light leading-[16px] text-white">
          {parts[0]}
          <Link href="#" className="text-[#FFFFFF] hover:underline">
            (Read more)
          </Link>
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 mb-2.5">
      <div className="w-5 h-5 flex-shrink-0">
        <Image
          src={included ? "/icons/yes.svg" : "/icons/no.svg"}
          alt={included ? "Included" : "Not included"}
          width={20}
          height={20}
        />
      </div>
      <span className="font-nb text-[12px] font-light leading-[16px] text-white">
        {text}
      </span>
    </div>
  );
};

const UsageItem = ({ text }: { text: string }) => {
  const parts = text.split(":");
  return (
    <div className="py-1.5 text-white font-nb text-[12px] leading-[16px]">
      <span className="font-light">{parts[0]}</span>: {parts[1]}
    </div>
  );
};

const TabButton = ({
  title,
  isActive,
  isPopular,
  onClick,
}: {
  title: string;
  isActive: boolean;
  isPopular?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative flex-1 px-4 py-2 text-[14px]  font-nb transition-colors ${
      isActive
        ? "text-white border-b-2 border-[#2C60DD]"
        : "text-[#9DA2B3] border-b border-[#2A2E39]"
    }`}
  >
    {title}
    {isPopular && (
      <div className="absolute -top-2.5 right-0 py-0.5 px-1.5 bg-[#000000CC] rounded-full">
        <span className="bg-gradient-to-r from-[#5674CD] to-[#9AB4FF] font-normal text-[8px] leading-[10px] bg-clip-text text-transparent">
          Popular
        </span>
      </div>
    )}
  </button>
);

const MobilePricingCard = ({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div className="w-full px-4 pb-4">
      <div className="flex items-end gap-2 mb-5">
        <span className="text-white text-[28px] font-nb leading-[32px]">
          ${price}
        </span>
        <span className="text-[#9DA2B3] text-[14px] font-nb mb-1">
          per month
        </span>
      </div>

      {/* Top 4 included features */}
      <div className="mb-4 border-b border-[#2A2E39] pb-4">
        {plan.features.included.map((feature, index) => (
          <FeatureItem
            key={`included-${index}`}
            text={feature}
            included={true}
          />
        ))}
      </div>

      {/* Usage details */}
      <div className="mb-4">
        <UsageItem text={plan.usage.chatbot} />
        <UsageItem text={plan.usage.audioCall} />
        <UsageItem text={plan.usage.videoCall} />
        <UsageItem text={plan.usage.maxSessions} />
      </div>

      {/* Bottom 4 features */}
      <div className="mb-5 border-t border-[#2A2E39] pt-4">
        {plan.title === "Personal"
          ? plan.features.excluded.map((feature, index) => (
              <FeatureItem
                key={`excluded-${index}`}
                text={feature}
                included={false}
              />
            ))
          : plan.features.excluded.map((feature, index) => (
              <FeatureItem
                key={`pro-feature-${index}`}
                text={feature}
                included={true}
              />
            ))}
      </div>

      {!plan.isPopular ? (
        <button className="py-2 w-full rounded-xl border transition-all duration-300 border-white text-white font-nb font-light text-[14px] leading-[18px]">
          Try Now
        </button>
      ) : (
        <SlashButton
          showIcon={false}
          label="Try Now"
          className="!bg-[#77A9E829] !py-[10px] !rounded-[12px] w-full text-center !flex items-center justify-center"
          labelClassName="!tracking-[-0.2px] text-center !text-[14px]"
          containerStyles="!w-auto text-center"
        />
      )}
    </div>
  );
};

const MobilePricingContent = ({
  isYearly = false,
}: MobilePricingContentProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mt-6">
      {/* Tab navigation */}
      <div className="flex w-full mb-6 rounded-t-[16px] overflow-hidden">
        {pricingPlans.map((plan, index) => (
          <TabButton
            key={index}
            title={plan.title}
            isActive={activeTab === index}
            isPopular={plan.isPopular}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      {/* Content area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`pricing-${activeTab}-${isYearly ? "yearly" : "monthly"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MobilePricingCard
            plan={pricingPlans[activeTab]}
            isYearly={isYearly}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobilePricingContent;
