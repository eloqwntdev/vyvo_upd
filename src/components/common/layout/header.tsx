"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/constants/navlinks";
import { motion, AnimatePresence } from "framer-motion";
import useScrollDirection from "@/hooks/useScrollDirection";

const centeredHeaderPages = ["/gpu-farm"];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [leftSpace, setLeftSpace] = useState<number>(0);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

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
    let element = null;
    if (typeof document !== "undefined") {
      element = document.querySelector(targetId);
    }

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState({}, "", href);
    }
  };
  const [otherTextColor, setOtherTextColor] = useState("");
  const [baseTextColor, setBaseTextColor] = useState("");
  const [glowBackground, setGlowBackground] = useState("");
  const [underLine, setUnderLine] = useState("");

  useEffect(() => {
    console.log(pathname);
    switch (pathname) {
      case "/social-fi":
        setOtherTextColor("gradient-text-social-fi");
        setBaseTextColor("link-gradient-social-fi");
        setGlowBackground("glowBackground-social-fi");
        setUnderLine("underLine-social-fi");
        break;
      case "/vyvo-smart-chain":
        setOtherTextColor("gradient-text-vyvo-smart-chain");
        setBaseTextColor("link-gradient-vyvo-smart-chain");
        setGlowBackground("glowBackground-vyvo-smart-chain");
        setUnderLine("underLine-vyvo-smart-chain");
        break;
      default:
        setOtherTextColor("gradient-text");
        setBaseTextColor("link-gradient");
        setGlowBackground("glowBackground");
        setUnderLine("underLine");
        break;
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
      }
    } else {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`w-full tracking-normal left-1/2 top-0
        bg-black/50 backdrop-blur-[20px]
       sticky ${
         scrollDirection === "down" ? "-top-24 " : "top-0"
       }  z-[99] transition-all duration-500`}
      >
        <header
          className={`
            max-w-[1280px] px-4 md:px-0 mx-auto w-full py-2.5 md:py-4 
            flex items-center justify-between relative z-[101]
          `}
        >
          <Link
            href="/home"
            aria-label="Navigate to home page"
            className="relative h-full cursor-pointer"
          >
            <span>
              <motion.div
                className="relative flex flex-row items-center h-full cursor-pointer"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 2.4,
                  ease: [0.16, 1, 0.3, 1],
                  opacity: {
                    duration: 3.2,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.6,
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="91"
                  height="20"
                  viewBox="0 0 91 20"
                  fill="none"
                >
                  <path
                    d="M83.1172 0.316313V0.628167H83.6517H84.1861L84.195 1.90677L84.2084 3.18982L84.5558 3.20319L84.8988 3.21655V1.92013V0.628167H85.411H85.9232V0.316313V0.00445938H84.5202H83.1172V0.316313Z"
                    fill="white"
                  />
                  <path
                    d="M86.4582 1.58155C86.4582 3.37248 86.4136 3.2121 86.8857 3.2121H87.1708L87.1797 2.01814L87.193 0.828645L87.5716 1.96468C87.7765 2.58839 87.9636 3.12745 87.9903 3.15864C88.017 3.19873 88.115 3.2121 88.2753 3.20319L88.5203 3.18982L88.9345 1.98696L89.3487 0.784094L89.3621 1.98696L89.3754 3.18982L89.7228 3.20319L90.0658 3.21655V1.60828V0.00445962H89.5358H89.0013L88.9167 0.236122C88.8677 0.365319 88.7029 0.8331 88.547 1.26969C88.3911 1.70629 88.262 2.04933 88.2531 2.02705C88.2441 2.00478 88.0838 1.54591 87.8923 1.00685L87.5449 0.0267348L87.0015 0.0133698L86.4582 4.52995e-06V1.58155Z"
                    fill="white"
                  />
                  <path
                    d="M72.9185 0.0585423C70.1126 0.397126 67.7031 2.08114 66.4694 4.55369C65.9126 5.66745 65.6543 6.78122 65.6543 8.05536C65.6543 9.89084 66.2778 11.6372 67.4403 13.0628C67.81 13.5173 68.5582 14.2167 69.0481 14.5686C69.5781 14.9473 70.6471 15.4864 71.2662 15.6869C73.0388 16.2616 74.8871 16.2437 76.633 15.6379C77.2254 15.4329 78.1785 14.9384 78.7085 14.5642C79.2564 14.1811 80.2451 13.1876 80.6326 12.6396C81.2428 11.7798 81.7283 10.666 81.9688 9.56562C82.0578 9.1513 82.0668 8.97756 82.0668 8.05091C82.0668 7.13317 82.0534 6.94605 81.9643 6.53619C81.7372 5.48034 81.2205 4.28639 80.6371 3.4622C80.0848 2.69148 79.0604 1.7381 78.2498 1.23913C76.6509 0.263474 74.7313 -0.164211 72.9185 0.0585423ZM74.7001 2.85631C75.6621 3.00333 76.4549 3.35083 77.261 3.97899C78.9268 5.27541 79.6483 7.44056 79.0827 9.43197C78.8466 10.2606 78.2721 11.2184 77.6886 11.762C77.1185 12.2877 76.201 12.8401 75.5463 13.0539C74.3749 13.4371 72.9408 13.3791 71.8095 12.9069C70.3041 12.2832 69.1907 11.0803 68.7096 9.55671C68.478 8.81717 68.4157 8.08209 68.527 7.3381C68.7007 6.1976 69.1951 5.22195 70.0235 4.39776C71.2617 3.15926 72.972 2.59792 74.7001 2.85631Z"
                    fill="white"
                  />
                  <path
                    d="M5.04171e-05 0.0370312C-0.0222189 0.0771265 7.34001 12.8498 7.72304 13.4378C8.07489 13.9724 8.64053 14.5204 9.05029 14.7209C9.56693 14.9748 9.87425 15.0372 10.5423 15.0327C11.7226 15.0238 12.4664 14.6541 13.1345 13.7408C13.4462 13.3175 21.0757 0.0771265 21.0312 0.0370312C21.0133 0.0147562 20.4165 0.00584602 19.7128 0.0147562C18.537 0.0325756 18.3989 0.0414858 18.1272 0.130588C17.7665 0.250874 17.3612 0.544908 17.1474 0.834486C17.0182 1.01714 15.2144 4.12677 11.6023 10.4084C11.2505 11.0187 10.9031 11.5756 10.8318 11.6424C10.6448 11.8162 10.3909 11.8162 10.2127 11.6424C10.1415 11.5756 8.70734 9.13425 7.02378 6.21174C5.34468 3.28922 3.88827 0.81221 3.79028 0.705289C3.57204 0.451351 3.24691 0.246419 2.8906 0.126132C2.64119 0.0414858 2.48085 0.0325756 1.31839 0.0147562C0.601321 0.00584602 0.00895813 0.0147562 5.04171e-05 0.0370312Z"
                    fill="white"
                  />
                  <path
                    d="M23.2578 0.0816717C23.2578 0.108402 24.104 1.59639 25.1418 3.39178C26.1795 5.18716 27.1327 6.8489 27.2663 7.08056C27.6849 7.81564 28.206 8.22105 28.8697 8.32798C29.2171 8.38144 31.5108 8.39035 31.4885 8.33689C31.4841 8.31461 30.5221 6.64842 29.3596 4.63028C28.1259 2.49631 27.1638 0.879127 27.057 0.754385C26.8164 0.487082 26.5002 0.282149 26.1395 0.161863C25.89 0.0772171 25.7297 0.0683069 24.5628 0.0504866C23.6453 0.0371218 23.2578 0.046032 23.2578 0.0816717Z"
                    fill="white"
                  />
                  <path
                    d="M39.277 0.0631332C39.1437 0.0852909 38.8861 0.173918 38.7084 0.258116C38.0775 0.555019 38.1708 0.413214 35.2252 5.50932C33.768 8.03079 31.3067 12.2938 29.7517 14.9792C28.1967 17.6647 26.9128 19.8936 26.8994 19.9291C26.8728 19.9911 27.0061 20 28.1345 20C29.5074 20 29.7162 19.9734 30.1427 19.743C30.6447 19.4727 30.6536 19.4594 33.1238 15.1919C34.39 12.9984 36.8735 8.70436 38.6417 5.65113C40.4099 2.59789 41.8538 0.0808582 41.8538 0.0587025C41.8538 0.00109482 39.6191 0.00995636 39.277 0.0631332Z"
                    fill="white"
                  />
                  <path
                    d="M43.791 0.0429726C43.791 0.0607929 44.0093 0.457293 44.2765 0.920618C44.5437 1.38394 45.92 3.7674 47.3318 6.21768C48.7437 8.66796 50.2447 11.2697 50.6633 12.0003C51.8926 14.1343 52.3825 14.66 53.398 14.9362C53.8478 15.0565 54.752 15.0654 55.2018 14.9585C55.9367 14.7803 56.5469 14.3214 57.0501 13.5685C57.1526 13.4215 58.5466 11.0158 60.1589 8.22245C61.7668 5.42913 63.4726 2.47098 63.9492 1.64679C64.4213 0.827062 64.8221 0.118709 64.8399 0.0786133C64.8667 0.00733185 64.7776 0.00287724 63.7398 0.00287724C63.1163 0.00287724 62.4705 0.0251522 62.2968 0.0474272C61.7712 0.127619 61.219 0.439472 60.9473 0.822607C60.876 0.925074 59.4998 3.29071 57.8875 6.08403C56.2796 8.87734 54.8945 11.2742 54.8099 11.4123C54.6584 11.6662 54.5204 11.7642 54.311 11.7642C54.0572 11.7642 53.9414 11.6261 53.4024 10.6906C53.1174 10.1916 51.7278 7.77695 50.3159 5.32667C48.2449 1.72698 47.706 0.827062 47.5189 0.635494C47.2249 0.332551 46.7751 0.109798 46.352 0.0474272C45.969 -0.00603294 43.791 -0.0104885 43.791 0.0429726Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
            </span>
          </Link>

          <motion.div
            className="hidden select-none lg:flex items-center w-full max-w-[676px]"
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
                  {navLinks.map((link, index) => {
                    return (
                      <div key={index}>
                        <li
                          className="relative"
                          onMouseEnter={() => {
                            handleMouseEnter(index);
                            setIsSubMenuOpen(true);
                            const element =
                              document.querySelectorAll("nav ul li")[index];
                            if (element) {
                              const rect = element.getBoundingClientRect();
                              setLeftSpace(rect.left);
                            }
                          }}
                        >
                          {pathname === link.href.replace("#", "") && (
                            <div
                              className={`absolute w-full h-full ${glowBackground}`}
                            ></div>
                          )}
                          {pathname === link.href.replace("#", "") && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                width: "0%",
                              }}
                              animate={{
                                opacity: 1,
                                width: "100%",
                              }}
                              transition={{
                                delay: 0.6,
                                duration: 2.4,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className={`absolute left-1/2 translate-x-[-50%] w-full h-[1px] bottom-[-0.75rem] ${underLine}`}
                            ></motion.div>
                          )}
                          <Link
                            href={link.href}
                            className={`relative group text-sm transition-colors text-[14px] font-nb leading-[18px] hover:text-gray-100 
                              ${
                                pathname === link.href.replace("#", "")
                                  ? `font-medium bg-blend-lighten ${baseTextColor}`
                                  : "text-white"
                              } ${otherTextColor}`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </motion.div>
          <div className="flex gap-3">
            <Link
              href={"https://www.facebook.com/VyvoGroup/"}
              target="_blank"
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
              href={"https://t.me/VyvoSmartChainEN"}
              target="_blank"
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
              href={"https://x.com/VyvoSmartChain"}
              target="_blank"
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

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative rounded-[10px] cursor-pointer bg-[rgba(119,169,232,0.04)] shadow-[inset_8px_106.667px_106.667px_rgba(148,168,237,0.02),inset_0px_-1.333px_1.333px_rgba(148,168,237,0.20),inset_0px_1.333px_1.333px_rgba(148,168,237,0.20)] backdrop-blur-[13px] z-50 w-10 h-10 flex lg:hidden flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 4 : 0,
              }}
              className="w-6 h-0.5 bg-white block"
            />

            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -4 : 0,
              }}
              className="w-6 h-0.5 bg-white block"
            />
          </div>
        </header>
      </div>
      (
      <AnimatePresence>
        {isSubMenuOpen &&
          activeIndex !== null &&
          navLinks[activeIndex]?.subMenu && (
            <motion.div
              onMouseEnter={() => {
                setIsSubMenuOpen(true);
              }}
              onMouseLeave={() => {
                setIsSubMenuOpen(false);
                handleMouseLeave();
              }}
              className="fixed pointer-events-none z-[100] top-[0px] hidden md:block w-fit h-fit"
              initial={{ opacity: 0, y: -10, left: leftSpace }}
              animate={{ opacity: 1, y: 0, left: leftSpace }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="pointer-events-auto"
                style={{ marginTop: "calc( 80px - 1rem)" }}
              >
                <div className="bg-black/50 backdrop-blur-[20px] w-fit h-fit rounded-b-[16px]">
                  <div className="bg-[#77a9e80a] backdrop-blur-[20px] flex-col h-auto w-auto px-6 py-3 sub-shadow max-w-[676px] gap-2 flex justify-between rounded-b-[16px]">
                    {navLinks[activeIndex]?.subMenu.map((sublink, subindex) => (
                      <Link
                        href={sublink.href}
                        aria-label="Navigate to home page"
                        className={`relative group text-sm transition-colors text-[14px] font-nb leading-[18px] hover:text-gray-100 
                                        ${
                                          pathname ===
                                          sublink.href.replace("#", "")
                                            ? `font-medium bg-blend-lighten ${baseTextColor}`
                                            : "text-white"
                                        } ${otherTextColor}`}
                        key={subindex}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      )
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 h-full bg-black z-[90] pt-24"
          >
            <div className="max-w-7xl h-full mx-auto">
              <nav className="overflow-auto h-full flex flex-col gap-5 pt-12 pb-20 px-4">
                <motion.span
                  key="MENU"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 * 0.1 }}
                  className={`text-[#ffffff99] text-[16px] leading-[20px] font-light hover:text-gray-300 transition-colors`}
                >
                  MENU
                </motion.span>
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    className={`flex flex-col gap-5`}
                  >
                    <div className="flex flex-col items-start w-full">
                      <div className="flex flex-row justify-between w-full">
                        <a
                          className={`text-white text-[16px] leading-[20px] font-light hover:text-gray-300 ${
                            pathname === item.href.replace("#", "")
                              ? "link-gradient link-bg font-medium bg-blend-lighten"
                              : "text-white"
                          }`}
                          onClick={() => setIsOpen(false)}
                          href={item.href}
                        >
                          {item.label}
                        </a>
                        {item.subMenu && (
                          <motion.div
                            initial={{
                              rotate: 0,
                            }}
                            animate={{
                              rotate:
                                activeIndex === index && isSubMenuOpen === true
                                  ? 180
                                  : 0,
                            }}
                            transition={{ duration: 0.25 }}
                            onClick={() => {
                              if (activeIndex !== index) {
                                setIsSubMenuOpen(true);
                                setActiveIndex(index);
                              } else {
                                setIsSubMenuOpen(false);
                                setActiveIndex(null);
                              }
                            }}
                            className="flex items-center px-4 cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="8"
                              viewBox="0 0 14 8"
                              fill="none"
                            >
                              <path
                                d="M13 1.00005C13 1.00005 8.58107 6.99999 6.99995 7C5.41884 7.00001 1 1 1 1"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </div>
                      <AnimatePresence>
                        {item.subMenu &&
                          isSubMenuOpen &&
                          activeIndex === index && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                height: "0px",
                                marginTop: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                                marginTop: 20,
                              }}
                              exit={{
                                opacity: 0,
                                height: "0px",
                                marginTop: 0,
                              }}
                              className="flex flex-col px-4 gap-5"
                            >
                              {item.subMenu.map((subitem, subindex) => (
                                <motion.a
                                  // initial={{ opacity: 0, y: 0 }}
                                  // animate={{ opacity: 1, y: 0 }}
                                  // transition={{ delay: (subindex + 1) * 0.1 }}
                                  href={subitem.href}
                                  onClick={() => setIsOpen(false)}
                                  className={`text-white text-[16px] leading-[20px] font-light hover:text-gray-300 ${
                                    pathname === subitem.href.replace("#", "")
                                      ? "link-gradient link-bg font-medium bg-blend-lighten"
                                      : "text-white opacity-[0.8]"
                                  }`}
                                >
                                  - {subitem.label}
                                </motion.a>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </nav>
              <div className="absolute bottom-6 flex items-center justify-center gap-5 h-[50px] w-full">
                <Link
                  href={"https://www.facebook.com/VyvoGroup/"}
                  target="_blank"
                  className="size-10 main-shadow bg-[#94A8ED0A] backdrop-blur-[20px] rounded-full grid place-content-center hover:bg-[#94A8ED33] hover:scale-105 transition-all duration-300 ease-in-out"
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
                  href={"https://t.me/VyvoSmartChainEN"}
                  target="_blank"
                  className="size-10 main-shadow bg-[#94A8ED0A] backdrop-blur-[20px] rounded-full grid place-content-center hover:bg-[#94A8ED33] hover:scale-105 transition-all duration-300 ease-in-out"
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
                  href={"https://x.com/VyvoSmartChain"}
                  target="_blank"
                  className="size-10 main-shadow bg-[#94A8ED0A] backdrop-blur-[20px] rounded-full grid place-content-center hover:bg-[#94A8ED33] hover:scale-105 transition-all duration-300 ease-in-out"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

// const navLinksMobile = [
//   { label: "Home", href: "/home" },
//   { label: "VAI OS", href: "/" },
//   { label: "Vyvo Tech", href: "/wearables" },
//   { label: "Vyvo Smart Chain", href: "/vyvo-smart-chain" },
//   { label: "SocialFi", href: "/social-fi" },
//   { label: "Store", href: "https://shop.vyvo.com/" },
//   { label: "About Us", href: "/about-us" },
//   { label: "Tokenomic", href: "/tokenomic" },
//   { label: "News", href: "/news" },
//   // { label: "Events", href: "/events" },
//   { label: "Support", href: "https://www.vyvo.support/hc/en-us" },
// ];
