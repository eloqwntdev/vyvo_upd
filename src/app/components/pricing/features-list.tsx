//@ts-nocheck

"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FeaturesList = ({ plan, isMobile = false }) => {
  if (isMobile) {
    const includedFeatures = plan.features.filter((f) => f.included);
    const notIncludedFeatures = plan.features.filter((f) => !f.included);

    return (
      <>
        {/* Included Features */}
        {includedFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-2"
          >
            <Image src="/icons/yes.svg" alt="Included" width={24} height={24} />
            <span className="font-nb text-[14px] md:text-[16px] font-light leading-[18px] md:leading-[20px] text-white">
              {feature.title}
            </span>
          </motion.div>
        ))}

        {/* Not Included Features */}
        {notIncludedFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: (includedFeatures.length + index) * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/no.svg"
              alt="Not included"
              width={24}
              height={24}
            />
            <span className="font-nb text-[16px] font-light leading-[20px] text-white">
              {feature.title}
            </span>
          </motion.div>
        ))}
      </>
    );
  }

  // Desktop layout remains unchanged
  return plan.features.map((feature, index) => (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center gap-2"
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
  ));
};

// Update the features grid to use the new component
const FeaturesGrid = ({ plan }) => {
  return (
    <motion.div
      layout
      className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-16"
    >
      <div className="lg:hidden flex flex-col gap-3">
        <FeaturesList plan={plan} isMobile={true} />
      </div>
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-y-4 lg:gap-x-16 w-full">
        <FeaturesList plan={plan} />
      </div>
    </motion.div>
  );
};

export default FeaturesGrid;
