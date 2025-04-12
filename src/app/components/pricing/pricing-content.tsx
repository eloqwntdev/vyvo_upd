import SlashButton from "@/components/common/controllers/button/slash-button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface PricingContentProps {
  activeTab?: string;
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
      <div className="flex items-center gap-3 mb-3">
        <div className="w-6 h-6 flex-shrink-0">
          <Image
            src={included ? "/icons/yes.svg" : "/icons/no.svg"}
            alt={included ? "Included" : "Not included"}
            width={24}
            height={24}
          />
        </div>
        <span className="font-nb text-[14px] font-light leading-[18px] text-white">
          {parts[0]}
          <Link href="#" className="text-[#FFFFFF] hover:underline">
            (Read more)
          </Link>
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 mb-3">
      <div className="w-6 h-6 flex-shrink-0">
        <Image
          src={included ? "/icons/yes.svg" : "/icons/no.svg"}
          alt={included ? "Included" : "Not included"}
          width={24}
          height={24}
        />
      </div>
      <span className="font-nb text-[14px] font-light leading-[18px] text-white">
        {text}
      </span>
    </div>
  );
};

const UsageItem = ({ text }: { text: string }) => {
  const parts = text.split(":");
  return (
    <div className="py-2 text-white font-nb text-[14px] leading-[18px]">
      <span className="font-light">{parts[0]}</span>: {parts[1]}
    </div>
  );
};

const PricingCard = ({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full max-w-[542px] rounded-[20px] backdrop-blur-xl p-6 relative ${
        plan.isPopular ? "bg-[#77A9E829]" : "bg-[#0D0F17]"
      }`}
    >
      <div className="flex flex-col mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-[22px] font-nb mb-1">{plan.title}</h3>
          {plan.isPopular && (
            <div className="most-popular py-[5px] px-2 bg-[#000000CC] hidden md:grid place-content-center">
              <span className="bg-gradient-to-r from-[#5674CD] to-[#9AB4FF] font-normal font-nm text-[12px] leading-[16px] bg-clip-text text-transparent">
                Most Popular
              </span>
            </div>
          )}
        </div>
        <div className="flex items-end gap-1">
          <span className="text-white text-[30px] font-nb leading-[36px]">
            ${price}
          </span>
          <span className="text-[#9DA2B3] text-[14px] font-nb mb-1">
            per month
          </span>
        </div>
      </div>

      {/* Top 4 included features */}
      <div className="mb-5 border-b border-[#2A2E39] pb-5">
        {plan.features.included.map((feature, index) => (
          <FeatureItem
            key={`included-${index}`}
            text={feature}
            included={true}
          />
        ))}
      </div>

      {/* Usage details */}
      <div className="mb-6">
        <UsageItem text={plan.usage.chatbot} />
        <UsageItem text={plan.usage.audioCall} />
        <UsageItem text={plan.usage.videoCall} />
        <UsageItem text={plan.usage.maxSessions} />
      </div>

      {/* Bottom 4 features */}
      <div className="mb-6 border-t border-[#2A2E39] pt-5">
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

      {/* <button
        className={`w-full py-3 rounded-lg font-medium text-[16px] transition-colors ${
          plan.isPopular
            ? "bg-[#2C60DD] hover:bg-[#3570ED] text-white"
            : "bg-transparent border border-white text-white hover:bg-white/10"
        }`}
      >
        Try Now
      </button> */}
      {!plan.isPopular ? (
        <button className="py-2.5  w-full rounded-2xl border transition-all duration-300 border-white text-white font-nb font-light text-[16px] leading-[20px]">
          Try Now
        </button>
      ) : (
        <SlashButton
          showIcon={false}
          label="Try Now"
          className="!bg-[#77A9E829] !py-[12px] test !rounded-[16px] w-full text-center !flex items-center justify-center"
          labelClassName="!tracking-[-0.2px] text-center"
          containerStyles="!w-auto text-center"
        />
      )}
    </motion.div>
  );
};

const PricingContent = ({
  activeTab,
  isYearly = false,
}: PricingContentProps) => {
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={`pricing-${isYearly ? "yearly" : "monthly"}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row gap-6 w-full justify-center"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} isYearly={isYearly} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PricingContent;
