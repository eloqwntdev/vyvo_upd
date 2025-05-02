"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Define the types for our article data
interface Description {
  type: string;
  text: string;
  spans: any[];
  direction: string;
}

interface Section {
  title: string;
  descriptions: Description[];
}

interface ArticleContentProps {
  articles: any[];
}

const ArticleContent: React.FC<ArticleContentProps> = ({ articles }) => {
  // Filter out invalid sections (those with null titles or empty descriptions)
  const validSections = articles.filter(
    (section) => section.descriptions.length > 0
  );

  const [activeSection, setActiveSection] = useState<string>(
    validSections.length > 0 ? validSections[0].title : ""
  );
  const [isMobileView, setIsMobileView] = useState(false);

  // Create refs for each section dynamically (memoized for stability)
  const sectionRefs = React.useMemo(
    () =>
      validSections.reduce((acc, section) => {
        acc[section.title] = React.createRef();
        return acc;
      }, {} as Record<string, React.RefObject<HTMLDivElement>>),
    [validSections]
  );

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
    // Only set up scroll spy if there are valid sections
    if (validSections.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Offset for better activation
      let currentSection = "";
      let closestSection = null;
      let minDistance = Number.MAX_VALUE;

      // Find the closest section to the current scroll position
      for (const sectionTitle in sectionRefs) {
        const ref = sectionRefs[sectionTitle];
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          const distance = Math.abs(
            scrollPosition - (offsetTop + offsetHeight / 2)
          );

          // If this section is closer than the previous closest, update
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = sectionTitle;
          }

          // Also check if we're inside this section
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = sectionTitle;
            break; // Found the section we're in, no need to check further
          }
        }
      }

      // Use either the section we're in, or the closest section
      const newActiveSection = currentSection || closestSection;

      if (newActiveSection && newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      } else if (scrollPosition < 200 && validSections.length > 0) {
        // Near the top of the page, set the first section as active
        setActiveSection(validSections[0].title);
      }
    };

    // Use requestAnimationFrame for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);

    // Initial call to set the correct section on page load
    handleScroll();

    return () => window.removeEventListener("scroll", scrollListener);
  }, [sectionRefs, validSections]);

  const scrollToSection = (sectionTitle: string) => {
    if (sectionRefs[sectionTitle]?.current) {
      const yOffset = -80; // Adjust for header height
      const element = sectionRefs[sectionTitle].current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // Update active section immediately for better UX
      setActiveSection(sectionTitle);
    } else {
      console.warn(`Section ref for "${sectionTitle}" not found`);
    }
  };

  // If there are no valid sections, return empty component or placeholder
  if (validSections.length === 0) {
    return (
      <section className="w-full bg-black py-10">
        <p className="text-white/50 text-center">
          No article content available
        </p>
      </section>
    );
  }

  // Mobile section navigation component
  const MobileSectionNav = () => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-6"
    >
      <div className="flex flex-col gap-4 pb-2">
        {validSections.map((section) => (
          <motion.button
            key={section.title}
            onClick={() => scrollToSection(section.title)}
            whileHover={{ x: 2 }}
            className="flex items-center remove-hover-bg gap-2 relative group text-left"
          >
            <div
              className={`h-5 rounded-full w-0.5 transition-all duration-300 ${
                activeSection === section.title
                  ? "bg-gradient-to-t from-[#2A5FDD] to-[#77A9E8]"
                  : "bg-gradient-to-t from-[#000] to-[#000]"
              }`}
            />
            <div
              className={`bg-transparent font-nb font-light text-sm md:text-[16px] leading-tight md:leading-[20px] tracking-[-0.3px] md:tracking-[-0.5px] transition-colors duration-300
                      ${
                        activeSection === section.title
                          ? "text-white"
                          : "text-white/50 hover:text-white/80"
                      }`}
            >
              {section.title}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full bg-black tracking-[-0.5px]">
      <div className="w-full flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 lg:gap-12">
        {/* Mobile navigation */}
        {isMobileView && <MobileSectionNav />}

        {/* Desktop Navigation - Sticky */}
        {!isMobileView && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="hidden md:block w-full max-w-[200px] lg:max-w-[250px] sticky top-[100px]"
          >
            <div className="flex flex-col gap-4 md:gap-6">
              {validSections.slice(1).map((section) => (
                <motion.button
                  key={section.title}
                  onClick={() => scrollToSection(section.title)}
                  whileHover={{ x: 2 }}
                  className="flex items-center remove-hover-bg gap-2 relative group text-left"
                >
                  <div
                    className={`h-5 rounded-full w-0.5 transition-all duration-300 ${
                      activeSection === section.title
                        ? "bg-gradient-to-t from-[#77A9E8] to-[#77A9E8]"
                        : "bg-gradient-to-t from-[#000] to-[#000]"
                    }`}
                  />
                  <div
                    className={`bg-transparent font-nb font-light text-sm md:text-[16px] leading-tight md:leading-[20px] transition-colors duration-300
                      ${
                        activeSection === section.title
                          ? "text-white"
                          : "text-white/30 hover:text-white/60"
                      }`}
                  >
                    {section.title}
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
          {/* Introduction paragraph - using first section's first description if available */}
          {validSections.length > 0 &&
            validSections[0].descriptions.length > 0 && (
              <p className="text-white/70 font-nb font-light text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-[20px] break-words overflow-hidden">
                {validSections[0].descriptions[0].text}
              </p>
            )}

          <div className="flex flex-col gap-8 sm:gap-10">
            {validSections.slice(1).map((section) => (
              <motion.div
                key={section.title}
                ref={sectionRefs[section.title]}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-3 sm:gap-4"
              >
                <h3 className="text-white font-nb font-light text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[44px] tracking-normal md:tracking-normal">
                  {section.title}
                </h3>

                {section.descriptions.map((desc: any, index: number) => (
                  <p
                    key={index}
                    className="whitespace-pre-line font-nb text-sm sm:text-base md:text-[16px] font-light leading-relaxed md:leading-[20px] tracking-normal md:tracking-normal text-white/70 break-words overflow-hidden"
                  >
                    {desc.text}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticleContent;
