"use client";
import React, { useState, useRef, useEffect } from "react";

const ArticleContent = () => {
  const [activeSection, setActiveSection] = useState("Understanding SocialFi");
  const sectionRefs = {
    "Understanding SocialFi": useRef(null),
    "Vyvo's Role in SocialFi": useRef(null),
    "Benefits of SocialFi Through Vyvo": useRef(null),
    "The Future of SocialFi and Vyvo": useRef(null),
    Conclusion: useRef(null),
  };

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
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: any) => {
    //@ts-ignore
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveSection(section);
  };

  return (
    <section className="bg-black">
      <div className="max-w-[1280px] w-full mx-auto flex items-start justify-between gap-[40px] px-[16px] md:px-[24px] lg:px-[0px]">
        {/* Navigation - Sticky */}
        <div className="max-w-[232px] w-full sticky top-[100px]">
          <div className="flex flex-col gap-6">
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="flex items-center remove-hover-bg gap-2 relative group"
              >
                <div
                  className={`h-5 rounded-full w-0.5 transition-all duration-300 ${
                    activeSection === section
                      ? "bg-gradient-to-t from-[#2A5FDD] to-[#77A9E8]"
                      : "bg-gradient-to-t from-[#000] to-[#000]"
                  }`}
                />
                <div
                  className={`bg-transparent font-nb font-light text-[16px] leading-[20px] tracking-[-0.5px] transition-colors duration-300
                    ${
                      activeSection === section
                        ? "text-white"
                        : "text-[#ffffff80] hover:text-white"
                    }`}
                >
                  {section}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[632px] w-full flex flex-col gap-[60px]">
          <p className="text-white font-light font-nb text-[16px] leading-[20px] tracking-[-0.5px]">
            In an era where digital innovation is relentlessly advancing...
          </p>

          <div className="flex flex-col gap-10">
            <div
              ref={sectionRefs["Understanding SocialFi"]}
              className="flex flex-col gap-4"
            >
              <h3 className="text-white font-nb font-light text-[40px] leading-[44px] tracking-[-1.2px]">
                Understanding SocialFi
              </h3>
              <p className="font-nb text-[16px] font-light leading-[20px] tracking-[-0.5px] text-white">
                SocialFi represents a merging of social networking...
              </p>
            </div>

            <div
              ref={sectionRefs["Vyvo's Role in SocialFi"]}
              className="flex flex-col gap-4"
            >
              <h3 className="text-white font-nb font-light text-[40px] leading-[44px] tracking-[-1.2px]">
                Vyvo's Role in SocialFi
              </h3>
              <p className="font-nb text-[16px] font-light leading-[20px] tracking-[-0.5px] text-white">
                Vyvo is redefining the landscape...
              </p>
            </div>

            <div
              ref={sectionRefs["Benefits of SocialFi Through Vyvo"]}
              className="flex flex-col gap-4"
            >
              <h3 className="text-white font-nb font-light text-[40px] leading-[44px] tracking-[-1.2px]">
                Benefits of SocialFi Through Vyvo
              </h3>
              <p className="font-nb text-[16px] font-light leading-[20px] tracking-[-0.5px] text-white">
                The integration of SocialFi...
              </p>
            </div>

            <div
              ref={sectionRefs["The Future of SocialFi and Vyvo"]}
              className="flex flex-col gap-4"
            >
              <h3 className="text-white font-nb font-light text-[40px] leading-[44px] tracking-[-1.2px]">
                The Future of SocialFi and Vyvo
              </h3>
              <p className="font-nb text-[16px] font-light leading-[20px] tracking-[-0.5px] text-white">
                Looking ahead, Vyvo envisions...
              </p>
            </div>

            <div
              ref={sectionRefs["Conclusion"]}
              className="flex flex-col gap-4"
            >
              <h3 className="text-white font-nb font-light text-[40px] leading-[44px] tracking-[-1.2px]">
                Conclusion
              </h3>
              <p className="font-nb text-[16px] font-light leading-[20px] tracking-[-0.5px] text-white">
                Vyvo stands at the intersection...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleContent;
