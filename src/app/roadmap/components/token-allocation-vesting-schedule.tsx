import React from "react";
import Cards from "./token-allocation-vesting-schedule/cards";

const TokenAllocationVestingSchedule = () => {
  const cardData = [
    {
      icon: EcosystemGrowthIcon,
      title: "Ecosystem Growth",
      percentage: "45% (100,000,000 tokens)",
      description:
        "Gradual distribution over 10 years to support ecosystem partners and projects.",
    },
    {
      icon: TeamAdvisorsIcon,
      title: "Team & Advisors",
      percentage: "20% (50,000,000 tokens)",
      description:
        "12-month lock-up period, followed by linear unlocking over the next 36 months.",
    },
    {
      icon: InvestorsIcon,
      title: "Investors",
      percentage: "15% (37,500,000 tokens)",
      description: "10% at TGE, remaining unlocked over 24 months.",
    },
    {
      icon: StakingRewardsIcon,
      title: "Staking & Rewards",
      percentage: "20% (50,000,000 tokens)",
      description:
        "Distributed through a halving mechanism to reward user participation over 20 years.",
    },
  ];

  return (
    <section className="py-20 flex flex-col gap-[60px] items-center justify-center">
      <h2 className="text-white px-4 md:px-20 w-full text-left md:text-center text-[24px] leading-[28px] tracking-[-0.72px] md:text-[56px] md:leading-[60px] md:tracking-[-1.68px] font-nb font-light">
        Token Allocation & <br className="md:hidden" /> Vesting Schedule
      </h2>
      <div className="w-full h-fit flex flex-col max-w-[1600px] px-4 md:px-20">
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {cardData.map((card, index) => (
            <Cards
              key={index}
              icon={card.icon}
              title={card.title}
              percentage={card.percentage}
              description={card.description}
            />
          ))}
        </div>
        <div className="w-full h-fit gap-5 px-20 flex flex-row">
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

const EcosystemGrowthIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
  >
    <path
      d="M1 13L5.73422 8.26578C6.3363 7.6637 6.63734 7.36266 7.01892 7.34153C7.40049 7.32039 7.73294 7.58635 8.39782 8.11826L10.5173 9.81383C11.2193 10.3754 11.5703 10.6562 11.9679 10.6225C12.3656 10.5887 12.6642 10.2527 13.2615 9.58082L20 2"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 1H19C19.9428 1 20.4142 1 20.7071 1.29289C21 1.58579 21 2.05719 21 3L21 5.00001"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 3H10"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const TeamAdvisorsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
  >
    <path
      d="M20.5 6C20.5 7.38071 19.3807 8.5 18 8.5C16.6193 8.5 15.5 7.38071 15.5 6C15.5 4.61929 16.6193 3.5 18 3.5C19.3807 3.5 20.5 4.61929 20.5 6Z"
      fill="#A173FF"
      fill-opacity="0.2"
    />
    <path
      d="M8.5 6C8.5 7.38071 7.38071 8.5 6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6Z"
      fill="#A173FF"
      fill-opacity="0.2"
    />
    <path
      d="M3.5838 11.426C2.56203 11.9525 -0.117014 13.0276 1.5147 14.3729C2.31178 15.03 3.19952 15.5 4.31563 15.5H10.6844C11.8005 15.5 12.6882 15.03 13.4853 14.3729C15.117 13.0276 12.438 11.9525 11.4162 11.426C9.02014 10.1913 5.97986 10.1913 3.5838 11.426Z"
      fill="#A173FF"
      fill-opacity="0.2"
    />
    <path
      d="M12.5838 11.426C11.562 11.9525 8.88299 13.0276 10.5147 14.3729C11.3118 15.03 12.1995 15.5 13.3156 15.5H19.6844C20.8005 15.5 21.6882 15.03 22.4853 14.3729C24.117 13.0276 21.438 11.9525 20.4162 11.426C18.0201 10.1913 14.9799 10.1913 12.5838 11.426Z"
      fill="#A173FF"
      fill-opacity="0.2"
    />
    <path
      d="M20.774 15.5C21.5233 15.5 22.1193 15.0285 22.6545 14.3691C23.7499 13.0194 21.9513 11.9408 21.2654 11.4126C20.568 10.8756 19.7894 10.5714 19 10.5M18 8.5C19.3807 8.5 20.5 7.38071 20.5 6C20.5 4.61929 19.3807 3.5 18 3.5"
      stroke="#A173FF"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M3.22596 15.5C2.47666 15.5 1.88067 15.0285 1.34555 14.3691C0.250089 13.0194 2.04867 11.9408 2.73465 11.4126C3.43197 10.8756 4.21058 10.5714 5 10.5M5.5 8.5C4.11929 8.5 3 7.38071 3 6C3 4.61929 4.11929 3.5 5.5 3.5"
      stroke="#A173FF"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M8.0838 12.6112C7.06203 13.243 4.38299 14.5331 6.0147 16.1474C6.81178 16.936 7.69952 17.5 8.81563 17.5H15.1844C16.3005 17.5 17.1882 16.936 17.9853 16.1474C19.617 14.5331 16.938 13.243 15.9162 12.6112C13.5201 11.1296 10.4799 11.1296 8.0838 12.6112Z"
      fill="#A173FF"
      fill-opacity="0.2"
    />
    <path
      d="M8.0838 12.6112C7.06203 13.243 4.38299 14.5331 6.0147 16.1474C6.81178 16.936 7.69952 17.5 8.81563 17.5H15.1844C16.3005 17.5 17.1882 16.936 17.9853 16.1474C19.617 14.5331 16.938 13.243 15.9162 12.6112C13.5201 11.1296 10.4799 11.1296 8.0838 12.6112Z"
      stroke="#A173FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.5 5C15.5 6.933 13.933 8.5 12 8.5C10.067 8.5 8.5 6.933 8.5 5C8.5 3.067 10.067 1.5 12 1.5C13.933 1.5 15.5 3.067 15.5 5Z"
      fill="#A173FF"
      fill-opacity="0.2"
    />
    <path
      d="M15.5 5C15.5 6.933 13.933 8.5 12 8.5C10.067 8.5 8.5 6.933 8.5 5C8.5 3.067 10.067 1.5 12 1.5C13.933 1.5 15.5 3.067 15.5 5Z"
      stroke="#A173FF"
      stroke-width="1.5"
    />
  </svg>
);
const InvestorsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="23"
    viewBox="0 0 22 23"
    fill="none"
  >
    <path
      d="M1 13.5C1 9.99335 1 8.24003 1.90796 7.05992C2.07418 6.84388 2.25989 6.64579 2.46243 6.46849C3.56878 5.5 5.21252 5.5 8.5 5.5H13.5C16.7875 5.5 18.4312 5.5 19.5376 6.46849C19.7401 6.64579 19.9258 6.84388 20.092 7.05992C21 8.24003 21 9.99335 21 13.5C21 17.0066 21 18.76 20.092 19.9401C19.9258 20.1561 19.7401 20.3542 19.5376 20.5315C18.4312 21.5 16.7875 21.5 13.5 21.5H8.5C5.21252 21.5 3.56878 21.5 2.46243 20.5315C2.25989 20.3542 2.07418 20.1561 1.90796 19.9401C1 18.76 1 17.0066 1 13.5Z"
      fill="#A174FF"
      fill-opacity="0.2"
    />
    <path
      d="M13.5021 5.5H8.49785C5.20755 5.5 3.5624 5.5 2.4551 6.46849C2.25239 6.64579 2.06651 6.84388 1.90015 7.05992C1.18352 7.99055 1.03203 9.27766 1 11.5H21C20.968 9.27766 20.8165 7.99055 20.0998 7.05992C19.9335 6.84388 19.7476 6.64579 19.5449 6.46849C18.4376 5.5 16.7924 5.5 13.5021 5.5Z"
      fill="#A174FF"
      fill-opacity="0.2"
    />
    <path
      d="M14.4142 2.08579C13.8284 1.5 12.8856 1.5 11 1.5C9.11438 1.5 8.17157 1.5 7.58579 2.08579C7 2.67157 7 3.61438 7 5.5H15C15 3.61438 15 2.67157 14.4142 2.08579Z"
      fill="#A174FF"
      fill-opacity="0.2"
    />
    <path
      d="M1 13.5C1 9.99335 1 8.24003 1.90796 7.05992C2.07418 6.84388 2.25989 6.64579 2.46243 6.46849C3.56878 5.5 5.21252 5.5 8.5 5.5H13.5C16.7875 5.5 18.4312 5.5 19.5376 6.46849C19.7401 6.64579 19.9258 6.84388 20.092 7.05992C21 8.24003 21 9.99335 21 13.5C21 17.0066 21 18.76 20.092 19.9401C19.9258 20.1561 19.7401 20.3542 19.5376 20.5315C18.4312 21.5 16.7875 21.5 13.5 21.5H8.5C5.21252 21.5 3.56878 21.5 2.46243 20.5315C2.25989 20.3542 2.07418 20.1561 1.90796 19.9401C1 18.76 1 17.0066 1 13.5Z"
      stroke="#A174FF"
      stroke-width="1.5"
    />
    <path
      d="M15 5.5C15 3.61438 15 2.67157 14.4142 2.08579C13.8284 1.5 12.8856 1.5 11 1.5C9.11438 1.5 8.17157 1.5 7.58579 2.08579C7 2.67157 7 3.61438 7 5.5"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 10.5C9.89543 10.5 9 11.1716 9 12C9 12.8284 9.89543 13.5 11 13.5C12.1046 13.5 13 14.1716 13 15C13 15.8284 12.1046 16.5 11 16.5M11 10.5C11.8708 10.5 12.6116 10.9174 12.8862 11.5M11 10.5V9.5M11 16.5C10.1292 16.5 9.38836 16.0826 9.1138 15.5M11 16.5V17.5"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M5 11.5H1"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M21 11.5L17 11.5"
      stroke="#A174FF"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
const StakingRewardsIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
  >
    <path
      d="M4.78223 2.68192C5.43007 2.18319 5.754 1.93383 6.12788 1.77323C6.29741 1.70041 6.47367 1.64158 6.65459 1.59741C7.05361 1.5 7.4767 1.5 8.32289 1.5H13.6771C14.5233 1.5 14.9464 1.5 15.3454 1.59741C15.5263 1.64158 15.7026 1.70041 15.8721 1.77323C16.246 1.93383 16.5699 2.18319 17.2178 2.68192C19.3644 4.33448 20.4378 5.16077 20.8057 6.23078C20.9694 6.70673 21.0305 7.20728 20.9858 7.70461C20.8852 8.82268 20.0379 9.84595 18.3433 11.8925L14.3498 16.7153C12.8126 18.5718 12.044 19.5 11 19.5C9.95604 19.5 9.18742 18.5718 7.65018 16.7153L3.65671 11.8925C1.96208 9.84595 1.11476 8.82268 1.0142 7.70461C0.969472 7.20728 1.03064 6.70673 1.1943 6.23078C1.56224 5.16077 2.63557 4.33448 4.78223 2.68192Z"
      fill="#A175FF"
      fill-opacity="0.2"
    />
    <path
      d="M4.78223 2.68192C5.43007 2.18319 5.754 1.93383 6.12788 1.77323C6.29741 1.70041 6.47367 1.64158 6.65459 1.59741C7.0536 1.5 7.4767 1.5 8.32289 1.5H13.6771C14.5233 1.5 14.9464 1.5 15.3454 1.59741C15.5263 1.64158 15.7026 1.70041 15.8721 1.77323C16.246 1.93383 16.5699 2.18319 17.2178 2.68192C19.3644 4.33448 20.4378 5.16077 20.8057 6.23078C20.9694 6.70673 21.0305 7.20728 20.9858 7.70461C20.8852 8.82268 20.0379 9.84595 18.3433 11.8925L14.3498 16.7153C12.8126 18.5718 12.044 19.5 11 19.5C9.95604 19.5 9.18742 18.5718 7.65018 16.7153L3.65671 11.8925C1.96208 9.84595 1.11476 8.82268 1.0142 7.70461C0.969472 7.20728 1.03064 6.70673 1.1943 6.23078C1.56224 5.16077 2.63557 4.33448 4.78223 2.68192Z"
      stroke="#A175FF"
      stroke-width="1.5"
    />
    <path
      d="M9 7H13"
      stroke="#A175FF"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default TokenAllocationVestingSchedule;
