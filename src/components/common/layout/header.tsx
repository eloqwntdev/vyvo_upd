"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlashIcon } from "../../svg";
import Image from "next/image";
import SlashButton from "../controllers/button/slash-button";
import { navLinks } from "@/constants/navlinks";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number | null) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("/", "");
    const element = document.querySelector(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState({}, "", href);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="w-full bg-black">
        <header className="max-w-[1280px]  px-4 md:px-0 mx-auto w-full pt-5 md:pt-8 flex items-center justify-between relative z-[101]">
          <motion.div
            className="relative max-w-[82px] md:max-w-[124.459px] w-full h-[28.394px]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 2.4,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
            }}
          >
            <Image src={"/logo.svg"} alt={"Logo.svg"} fill priority />
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center w-full max-w-[676px]"
            initial={{ y: -20, opacity: 0, gap: "10px" }}
            animate={{ y: 0, opacity: 1, gap: "16px" }}
            transition={{
              delay: 0.6,
              duration: 2.4,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 3.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 },
            }}
          >
            {/* <div className="size-10 rounded-[12px] bg-[#94a8ed0a] backdrop-blur-[10px] main-shadow grid place-content-center">
              <SlashIcon />
            </div> */}
            <nav className="px-6 py-3 main-shadow max-w-[676px] w-full flex justify-between rounded-[16px] bg-[#77A9E80A] backdrop-blur-[20px]">
              <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-8">
                  {navLinks.map((link, index) => (
                    <li
                      key={index}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href={link.href}
                        className={`relative group text-sm gradient-text transition-colors text-[14px] font-nb leading-[18px] hover:text-gray-100 ${
                          pathname === link.href.replace("#", "")
                            ? "link-gradient font-medium link-bg bg-blend-lighten"
                            : "text-white"
                        }`}
                      >
                        <img
                          src="/link-gradient.png"
                          alt=""
                          className="absolute hidden group-hover:block inset-0 m-auto h-full w-full transition-all duration-300 -z-10 scale-[3]"
                        />
                        {pathname === link.href.replace("#", "") && (
                          <img
                            src="/link-gradient.png"
                            alt=""
                            className="absolute inset-0 m-auto h-full w-full -z-10 scale-[2.5]"
                          />
                        )}
                        {link.label}
                      </a>
                      {/* {link.subMenu && (
                        <AnimatePresence>
                          {activeIndex === index && (
                            <motion.ul
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 main-shadow bg-[#00000080] backdrop-blur-[20px] rounded-[20px] z-10 space-y-3 p-4 mt-4 w-[178px]"
                            >
                              {link.subMenu.map((subLink, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={subLink.href}
                                    className={`relative transition-all gradient-text duration-300 text-[14px] font-nb tracking-[-0.01em] leading-[18px] text-[#FFFFFFB2] hover:text-white hover:scale-105 hover:translate-x-1`}
                                  >
                                    {subLink.label}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      )} */}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </motion.div>
          <div className="flex gap-3">
            <Link
              href={""}
              className="size-10 main-shadow bg-[#94A8ED0A] backdrop-blur-[20px] rounded-full md:grid place-content-center hidden hover:bg-[#94A8ED33] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link
              href={""}
              className="size-10 main-shadow bg-[#94A8ED0A] backdrop-blur-[20px] rounded-full md:grid place-content-center hidden hover:bg-[#94A8ED33] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409"
                  stroke="white"
                  stroke-opacity="0.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>

            <Link
              href={""}
              className="size-10 main-shadow bg-[#94A8ED0A] backdrop-blur-[20px] rounded-full md:grid place-content-center hidden hover:bg-[#94A8ED33] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6165 8.66L17.9453 1.25H16.4453L10.9515 7.68375L6.56152 1.25H1.49902L8.13652 10.98L1.49902 18.75H2.99902L8.80152 11.955L13.4378 18.75H18.5003L11.6165 8.66ZM9.56277 11.065L8.89027 10.0962L3.53902 2.3875H5.84277L10.1603 8.60875L10.8328 9.5775L16.4465 17.665H14.1428L9.56277 11.065Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </svg>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative bg-transparent focus:bg-transparent z-50 w-10 h-10 flex lg:hidden flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </header>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] top-[96px] flex items-start justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="max-w-[955px] menu-styles w-full p-8 pb-[120px] pr-[87px]">
              <motion.div
                className="flex justify-between gap-12"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {navigationData.map((section, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-6"
                    variants={{
                      hidden: { opacity: 0, y: -20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                    }}
                  >
                    <span className="text-[12px] leading-[18px] shrink-0 text-white/60 tracking-[-0.12px] uppercase">
                      {section.section}
                    </span>
                    <div className="flex flex-col gap-3">
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="text-[14px] font-light leading-[18px] text-white hover:text-gray-300 transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-[100] pt-24"
          >
            <div className="max-w-7xl mx-auto px-4">
              <nav className="flex flex-col gap-5 pt-12">
                {navLinksMobile.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-white text-[16px] leading-[20px] font-light hover:text-gray-300 transition-colors ${
                      pathname === item.href.replace("#", "")
                        ? "link-gradient font-medium link-bg bg-blend-lighten"
                        : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

const navigationData = [
  {
    section: "VAI OS",
    items: [
      { title: "VAI OS", href: "#" },
      { title: "Tokenomics Roadmap", href: "#" },
      { title: "Getting Started", href: "#" },
      { title: "Using Agents", href: "#" },
    ],
  },
  {
    section: "VYVO SMART CHAIN",
    items: [{ title: "Vyvo Smart Chain", href: "#" }],
  },
  {
    section: "VYVO TECH",
    items: [
      { title: "Overview", href: "#" },
      { title: "BioSense Ring", href: "#" },
      { title: "BioSense Band", href: "#" },
      { title: "BioSense Watch", href: "#" },
    ],
  },
  {
    section: "SOCIALFI",
    items: [{ title: "SocialFI", href: "#" }],
  },
  {
    section: "ABOUT US",
    items: [
      { title: "About Us", href: "#" },
      { title: "News", href: "#" },
      { title: "Support", href: "#" },
    ],
  },
  {
    section: "STORE",
    items: [
      { title: "Store", href: "#" },
      { title: "Item", href: "#" },
      { title: "Item", href: "#" },
      { title: "Item", href: "#" },
    ],
  },
];

const navLinksMobile = [
  { label: "Home", href: "/" },
  { label: "VAI OS", href: "/vai-os" },
  { label: "Vyvo Tech", href: "/vyvo-tech" },
  { label: "Vyvo Smart Chain", href: "/vyvo-smart-chain" },
  { label: "SocialFi", href: "/socialfi" },
  { label: "Store", href: "/store" },
  { label: "About us", href: "/about" },
  { label: "Tokenomic", href: "/tokenomic" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Support", href: "/support" },
];
