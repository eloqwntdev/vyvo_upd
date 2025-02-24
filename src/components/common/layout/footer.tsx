import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "" },
    { label: "VAI OS", href: "" },
    { label: "Vyvo Tech", href: "" },
    { label: "Vyvo Smart Chain", href: "" },
    { label: "SocialFi", href: "/social-fi" },
    { label: "Store", href: "" },
  ];

  const socialLinks = [
    { label: "X", href: "" },
    { label: "Facebook", href: "" },
    { label: "Instagram", href: "" },
    { label: "Telegram", href: "" },
    { label: "Discord", href: "" },
  ];

  const thirdLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "News", href: "" },
    { label: "Events", href: "" },
    { label: "Support", href: "" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "" },
    { label: "Cookie Policy", href: "" },
    { label: "Terms of Use", href: "" },
  ];

  return (
    <footer className="bg-[#000] relative py-5 md:py-[60px] px-4 2xl:px-0">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col justify-between items-start mb-0">
          <motion.div className="relative w-[124.459px] h-[28.394px]">
            <Image src={"/logo.svg"} alt={"Logo.svg"} fill priority />
          </motion.div>

          <div className="lg:block hidden">
            <ScrollToTopButton />
          </div>
        </div>

        <div className="flex flex-col justify-between lg:gap-[140px] w-full sm:w-auto">
          <div className="flex gap-[34px]">
            <div className="flex flex-col gap-4 text-left">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-nb text-[16px] leading-[20px] md:text-[24px] md:leading-[26.4px] transition-all duration-300 ease-in-out gradient-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex md:hidden flex-col gap-4 text-left">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-nb text-[16px] leading-[20px] md:text-[24px] md:leading-[26.4px] transition-all duration-300 ease-in-out gradient-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <span className="text-white/60 text-[16px] leading-[20px] font-light lg:block hidden font-nb tracking-[-] text-center sm:text-left">
            © 2024 Vyvo
          </span>
        </div>

        <div className="flex flex-col md:justify-between gap-[140px] w-full sm:w-auto">
          <div className="flex gap-20 md:gap-[170px] flex-row">
            <div className="flex flex-col gap-4 text-left">
              {thirdLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-nb text-[16px] leading-[20px] md:text-[24px] md:leading-[26.4px] text-white transition-all duration-300 ease-in-out gradient-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex flex-col gap-4 text-left">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-nb text-[16px] leading-[20px] md:text-[24px] md:leading-[26.4px] transition-all duration-300 ease-in-out gradient-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex md:hidden flex-col gap-4 text-left">
              {legalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="font-nb text-[16px] leading-[20px] md:text-[24px] md:leading-[26.4px] transition-all duration-300 ease-in-out gradient-text"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex gap-[34px] md:gap-10 justify-center sm:justify-start">
            {legalLinks.map((link, index) => (
              <Link
                href={"#"}
                key={index}
                className="text-white/60 hover:text-white transition-all  duration-300 text-[16px] leading-[20px]  font-light font-nb tracking-[-]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full flex lg:hidden gap-[34px] md:gap-10  justify-between flex-col">
          <span className="text-white text-[20px] leading-[24px] font-light font-nb ">
            Your Life CoPilot
          </span>

          <div className="flex gap-10 justify-between items-center">
            <Link
              className="bg-white rounded-full w-[16px] h-[24px] grid place-content-center"
              href={"#top"}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1.99999L6 10"
                  stroke="black"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.5 4.49998C3.5 4.49998 5.34122 2.00001 6.00002 2C6.65882 1.99999 8.5 4.5 8.5 4.5"
                  stroke="black"
                  stroke-width="0.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <span className="text-white/60 font-nb text-[12px] leading-[16px] tracking-[-0.03em]">
              © 2024 VYVO AI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      onClick={scrollToTop}
      className="w-[16px] h-[24px] group md:w-8 md:h-12 rounded-full grid place-content-center backdrop-blur-sm cursor-pointer bg-white transition-all duration-300 border border-black hover:border-white hover:bg-transparent mt-8 sm:mt-0"
      style={{
        boxShadow:
          "6px 80px 80px 0px rgba(148, 168, 237, 0.02) inset,0px -1px 1px 0px rgba(148, 168, 237, 0.2) inset,0px 1px 1px 0px rgba(148, 168, 237, 0.2) inset",
      }}
    >
      <svg
        className="stroke-black group-hover:stroke-white"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3.99998L12 20"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 8.99996C7 8.99996 10.6824 4.00001 12 4C13.3176 3.99999 17 9 17 9"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default Footer;
