import clsx from "clsx";

interface SlashIconProps {
  opacity?: string;
  className?: string;
}

export const SlashIcon = ({ className, opacity }: SlashIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      className={clsx("w-[12px] h-[14px] md:h-[16px]", className)}
    >
      <path
        opacity={opacity}
        d="M9.14183 0.977601C8.71388 1.06405 8.24897 1.35737 7.99958 1.69701C7.94109 1.78037 6.18615 4.81855 4.10485 8.45262L0.317871 15.0569L1.5217 15.0662C2.86715 15.0755 2.91949 15.0693 3.33206 14.8655C3.50139 14.7822 3.62455 14.6926 3.79388 14.5197C4.02172 14.2881 4.07714 14.1955 7.79638 7.70852C9.86844 4.08988 11.5926 1.08567 11.6234 1.03009L11.6819 0.931288L10.515 0.934375C9.66832 0.937463 9.2927 0.949813 9.14183 0.977601Z"
        fill="url(#paint0_radial_0_55)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_0_55"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(5.99988 8.00001) scale(8.18673 11.4488)"
        >
          <stop stopColor="#94A8ED" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const AtomicPowerIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5252 7.47484C21.4489 12.3985 23.4143 18.416 20.9152 20.9152C19.5631 22.2672 17.1813 22.3126 14.5 21.2897C12.2252 20.4218 9.7348 18.7851 7.47484 16.5252C2.55113 11.6015 0.585661 5.58402 3.08484 3.08484C4.35224 1.81744 6.52446 1.69825 9 2.5308C11.8595 3.49247 14.4048 5.35452 16.5252 7.47484Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M7.47484 7.47484C2.55113 12.3985 0.585663 18.416 3.08484 20.9152C4.43691 22.2672 6.81872 22.3126 9.5 21.2897C11.7748 20.4218 14.2652 18.7851 16.5252 16.5252C21.4489 11.6015 23.4143 5.58402 20.9152 3.08484C19.6478 1.81744 17.4755 1.69825 15 2.5308C12.1405 3.49247 9.59516 5.35452 7.47484 7.47484Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M21.6256 8.5C22.2803 6.23358 22.0965 4.26617 20.9152 3.08484C18.416 0.585663 12.3985 2.55113 7.47484 7.47484C6.94885 8.00082 6.45663 8.53929 6 9.08462M18 14.9154C17.5434 15.4607 17.0511 15.9992 16.5252 16.5252C11.6015 21.4489 5.58402 23.4143 3.08484 20.9152C1.81744 19.6478 1.69825 17.4755 2.5308 15"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 18.3399C8.81272 17.7904 8.13398 17.1843 7.47484 16.5252C2.55113 11.6015 0.585661 5.58402 3.08484 3.08484C4.35224 1.81744 6.52446 1.69825 9 2.5308M14.5 21.2897C17.1813 22.3126 19.5631 22.2672 20.9152 20.9152C23.4143 18.416 21.4489 12.3985 16.5252 7.47484C15.866 6.8157 15.1873 6.20957 14.5 5.66008"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const WorkoutIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.333 7.33331C21.333 8.43788 20.4376 9.33331 19.333 9.33331C18.2284 9.33331 17.333 8.43788 17.333 7.33331C17.333 6.22874 18.2284 5.33331 19.333 5.33331C20.4376 5.33331 21.333 6.22874 21.333 7.33331Z"
        fill="black"
        fillOpacity="0.1"
      />
      <path
        d="M21.333 7.33331C21.333 8.43788 20.4376 9.33331 19.333 9.33331C18.2284 9.33331 17.333 8.43788 17.333 7.33331C17.333 6.22874 18.2284 5.33331 19.333 5.33331C20.4376 5.33331 21.333 6.22874 21.333 7.33331Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M19.1469 20L20.4052 19.272C21.8381 18.443 22.5545 18.0285 22.6514 17.4378C22.6665 17.3455 22.6704 17.2521 22.6631 17.1592C22.6162 16.5639 21.9365 16.1051 20.5772 15.1876L14.3012 10.9515C11.8362 9.28769 11.2691 6.25485 13.0013 4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8298 13.3324C16.7595 14.7178 16.0217 16.0267 15.47 17.1913L15.47 17.1913C14.8847 18.4269 14.592 19.0447 14.6458 19.75L10.6665 18.6657L10.6783 18.6092C11.5023 15.4838 12.7076 12.544 14.301 10.9505L14.3287 10.9692L17.8298 13.3324Z"
        fill="black"
        fillOpacity="0.1"
      />
      <path
        d="M14.3008 10.9515C11.8359 9.28769 11.2688 6.25485 13.001 4M14.3008 10.9515L14.3285 10.9702L17.8297 13.3333M14.3008 10.9515C12.7074 12.5449 11.5021 15.4847 10.6781 18.6101M9.33301 28.0005C9.33301 25.6565 9.77832 22.0227 10.6781 18.6101M19.1466 20L20.4049 19.272C21.8378 18.443 22.5542 18.0285 22.651 17.4378C22.6662 17.3455 22.6701 17.2521 22.6628 17.1592C22.6159 16.5639 21.9362 16.1051 20.5769 15.1876L17.8643 13.3567L17.8297 13.3333M19.9999 28.0005C18.7021 26.4863 17.3673 24.4 16.0665 22.4771C15.1552 21.1299 14.6995 20.4563 14.6457 19.751M17.8297 13.3333C16.7593 14.7188 16.0215 16.0276 15.4698 17.1923C14.8845 18.4279 14.5918 19.0457 14.6457 19.751M14.6457 19.751L10.6663 18.6667L10.6781 18.6101"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const ChartIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="5" r="2" fill="black" fillOpacity="0.2" />
      <circle cx="5" cy="20" r="2" fill="black" fillOpacity="0.2" />
      <circle cx="16" cy="16" r="2" fill="black" fillOpacity="0.2" />
      <path
        d="M11 5L18 5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L14.5 14.5"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11L5 18"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="6.44444"
        cy="6.44444"
        r="4.44444"
        stroke="black"
        strokeWidth="1.5"
      />
      <circle
        cx="6.44444"
        cy="6.44444"
        r="4.44444"
        fill="black"
        fillOpacity="0.2"
        stroke="black"
        strokeWidth="1.5"
      />
      <circle cx="5" cy="20" r="2" stroke="black" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="2" stroke="black" strokeWidth="1.5" />
      <circle cx="20" cy="5" r="2" stroke="black" strokeWidth="1.5" />
    </svg>
  );
};
