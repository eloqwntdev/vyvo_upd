import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const VyvoResearchDevelopment = () => {
  const textContentRef = useRef(null);
  const imagesRef = useRef(null);
  const awardRef = useRef(null);

  const isTextInView = useInView(textContentRef, { once: true, amount: 0.2 });
  const areImagesInView = useInView(imagesRef, { once: true, amount: 0.2 });
  const isAwardInView = useInView(awardRef, { once: true, amount: 0.5 });

  return (
    <section className=" bg-white ">
      <div className="w-full max-w-[1267px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between py-10 md:py-20 gap-8 md:gap-12">
        <div className="max-w-full md:max-w-[509px] w-full flex flex-col gap-6 md:gap-8">
          <motion.div
            ref={textContentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isTextInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="banner-gradient-text font-nb font-light text-[36px] sm:text-[42px] md:text-[48px] leading-[1.2] md:leading-[56px]"
            >
              Vyvo Research
              <br /> & Development
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-black font-nb text-[20px] md:text-[24px] leading-[1.25] md:leading-[30px]">
                Creating Devices That People Love
              </h3>
              <p className="font-nb font-light text-[14px] md:text-[16px] leading-[1.4] md:leading-[22px] tracking-wider">
                Since its inception, Vyvo has been driven by the mission to
                redefine wearables and create technology that empowers everyday
                life. Vyvo, along with its technology partners, has continued to
                innovate with products from AI-powered, real-time personalized
                nutrition, to the new BioSense series of smart wearables, which
                won the prestigious IF Design Award and featured a
                Military-Grade Security Chip for unparalleled data protection.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col gap-3"
            >
              <h3 className="text-black font-nb text-[20px] md:text-[24px] leading-[1.25] md:leading-[30px]">
                Our Dedication To Excellence
              </h3>
              <p className="font-nb font-light text-[14px] md:text-[16px] leading-[1.4] md:leading-[22px] tracking-wider">
                FDA clearance for Vyvo's LifeWatch device exemplifies its
                commitment to quality and innovation in health monitoring.
                Through this milestone, Vyvo reinforces its commitment to
                integrating advanced technology with user-focused wellness
                solutions. With secure blockchain-backed data management, Vyvo's
                devices provide users with accurate, trusted insights while
                ensuring full control over personal information.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            ref={awardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isAwardInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/wearables-img/research/award.webp"
              width={157}
              height={80}
              alt="Award"
              className="w-[120px] md:w-[157px] h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          ref={imagesRef}
          initial={{ opacity: 0, x: 30 }}
          animate={
            areImagesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-full md:max-w-[630px] w-full flex flex-col gap-4 md:gap-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              areImagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-[24px]"
          >
            <Image
              src="/wearables-img/research/medium-rectangle.webp"
              width={630}
              height={400}
              alt="Research Development"
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <div className="overflow-hidden  w-full sm:w-1/2 rounded-[24px]">
              <Image
                src="/wearables-img/research/medium-rectangle-second.webp"
                width={305}
                height={226}
                alt="Research Development"
                className="w-full h-auto transition-transform duration-300 hover:scale-110"
              />
            </div>

            <div className="overflow-hidden  w-full sm:w-1/2 rounded-[24px]">
              <Image
                src="/wearables-img/research/medium-rectangle-third.webp"
                width={305}
                height={226}
                alt="Research Development"
                className="w-full h-auto transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VyvoResearchDevelopment;
