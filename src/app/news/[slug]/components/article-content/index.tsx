"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Define the type for our section names
type SectionName =
  | "Understanding SocialFi"
  | "Vyvo's Role in SocialFi"
  | "Benefits of SocialFi Through Vyvo"
  | "The Future of SocialFi and Vyvo"
  | "Conclusion";

const ArticleContent = () => {
  const [activeSection, setActiveSection] = useState<SectionName>(
    "Understanding SocialFi"
  );
  const [isMobileView, setIsMobileView] = useState(false);

  // Section refs with proper typing
  const sectionRefs: Record<SectionName, React.RefObject<HTMLDivElement>> = {
    "Understanding SocialFi": useRef(null),
    "Vyvo's Role in SocialFi": useRef(null),
    "Benefits of SocialFi Through Vyvo": useRef(null),
    "The Future of SocialFi and Vyvo": useRef(null),
    Conclusion: useRef(null),
  };

  // Handle responsive layout
  useEffect(() => {
    const checkWidth = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Handle scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better activation

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section as SectionName);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: SectionName) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(section);
    }
  };

  // Mobile section navigation component
  const MobileSectionNav = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-6"
    >
      <div className="flex flex-col gap-4 pb-2">
        {(Object.keys(sectionRefs) as SectionName[]).map((section) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            whileHover={{ x: 2 }}
            className="flex items-center remove-hover-bg gap-2 relative group text-left"
          >
            <div
              className={`h-5 rounded-full w-0.5 transition-all duration-300 ${
                activeSection === section
                  ? "bg-gradient-to-t from-[#2A5FDD] to-[#77A9E8]"
                  : "bg-gradient-to-t from-[#000] to-[#000]"
              }`}
            />
            <div
              className={`bg-transparent font-nb font-light text-sm md:text-[16px] leading-tight md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] transition-colors duration-300
                      ${
                        activeSection === section
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
            >
              {section}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-black">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 lg:gap-12">
        {/* Mobile navigation */}
        {isMobileView && <MobileSectionNav />}

        {/* Desktop Navigation - Sticky */}
        {!isMobileView && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="hidden md:block w-full max-w-[160px] lg:max-w-[232px] sticky top-[100px]"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              {(Object.keys(sectionRefs) as SectionName[]).map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ x: 2 }}
                  className="flex items-center remove-hover-bg gap-2 relative group text-left"
                >
                  <div
                    className={`h-5 rounded-full w-0.5 transition-all duration-300 ${
                      activeSection === section
                        ? "bg-gradient-to-t from-[#2A5FDD] to-[#77A9E8]"
                        : "bg-gradient-to-t from-[#000] to-[#000]"
                    }`}
                  />
                  <div
                    className={`bg-transparent font-nb font-light text-sm md:text-[16px] leading-tight md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] transition-colors duration-300
                      ${
                        activeSection === section
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
                  >
                    {section}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: 0.3,
          }}
          className="w-full md:max-w-[calc(100%-180px)] lg:max-w-[632px] flex flex-col gap-8 sm:gap-10 md:gap-[60px]"
        >
          <p className="text-white/90 font-light font-nb text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px]">
            In an era where digital innovation is relentlessly advancing, the
            convergence of social media and decentralized finance has given
            birth to an exciting new paradigm: SocialFi. At the forefront of
            this revolution stands Vyvo, a visionary company that's redefining
            how we think about social connectivity and financial empowerment.
          </p>

          <div className="flex flex-col gap-8 sm:gap-10">
            <motion.div
              ref={sectionRefs["Understanding SocialFi"]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[44px] tracking-[-0.8px] md:tracking-[-1.2px]">
                Understanding SocialFi
              </h3>
              <p className="font-nb text-sm sm:text-base md:text-[16px] font-light leading-relaxed md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] text-white/80">
                SocialFi represents a merging of social networking platforms
                with decentralized finance protocols, creating ecosystems where
                social interactions carry real economic value. Unlike
                traditional social media, where user data is harvested and
                monetized by corporations, SocialFi platforms empower users to
                own their data and be rewarded for their contributions and
                engagements.
              </p>
            </motion.div>

            <motion.div
              ref={sectionRefs["Vyvo's Role in SocialFi"]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[44px] tracking-[-0.8px] md:tracking-[-1.2px]">
                Vyvo's Role in SocialFi
              </h3>
              <p className="font-nb text-sm sm:text-base md:text-[16px] font-light leading-relaxed md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] text-white/80">
                Vyvo is redefining the landscape of SocialFi by integrating
                health data and wearable technology into the equation. Through
                its innovative platform, Vyvo enables users to generate value
                from their health data while maintaining complete ownership and
                privacy. This approach transforms passive data collection into
                an active, rewarding experience.
              </p>
            </motion.div>

            <motion.div
              ref={sectionRefs["Benefits of SocialFi Through Vyvo"]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[44px] tracking-[-0.8px] md:tracking-[-1.2px]">
                Benefits of SocialFi Through Vyvo
              </h3>
              <p className="font-nb text-sm sm:text-base md:text-[16px] font-light leading-relaxed md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] text-white/80">
                The integration of SocialFi principles into Vyvo's ecosystem
                offers numerous advantages. Users gain enhanced privacy
                controls, fair compensation for their data contributions, and
                access to a vibrant community of health-conscious individuals.
                Meanwhile, researchers and healthcare providers benefit from
                anonymized, consent-based data that can drive meaningful
                innovations in healthcare.
              </p>
            </motion.div>

            <motion.div
              ref={sectionRefs["The Future of SocialFi and Vyvo"]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[44px] tracking-[-0.8px] md:tracking-[-1.2px]">
                The Future of SocialFi and Vyvo
              </h3>
              <p className="font-nb text-sm sm:text-base md:text-[16px] font-light leading-relaxed md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] text-white/80">
                Looking ahead, Vyvo envisions a world where personal health data
                becomes a valuable asset class, empowering individuals while
                contributing to global health initiatives. By continuing to
                innovate at the intersection of blockchain technology, wearable
                devices, and social connectivity, Vyvo is laying the groundwork
                for a more equitable digital economy.
              </p>
            </motion.div>

            <motion.div
              ref={sectionRefs["Conclusion"]}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[44px] tracking-[-0.8px] md:tracking-[-1.2px]">
                Conclusion
              </h3>
              <p className="font-nb text-sm sm:text-base md:text-[16px] font-light leading-relaxed md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] text-white/80">
                Vyvo stands at the intersection of several transformative
                trends—decentralized finance, health technology, and social
                networking. By pioneering the SocialFi revolution in the health
                sector, Vyvo is not just creating a new product; it's
                establishing a new paradigm for how we value and share our most
                personal data in the digital age.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleContent;
