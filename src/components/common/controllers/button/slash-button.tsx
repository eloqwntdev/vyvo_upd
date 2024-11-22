import { SlashIcon } from "@/components/svg";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  containerStyles?: string;
  labelClassName?: string;
  showIcon?: boolean;
}

const SlashButton = ({
  label,
  onClick,
  type = "button",
  className = "",
  labelClassName = "",
  showIcon = true,
  containerStyles,
}: ButtonProps) => {
  return (
    <div className={`relative w-full ${containerStyles}`}>
      <button
        type={type}
        onClick={onClick}
        className={`relative z-10 px-[30px] transition-all duration-300 ease-in-out rounded-[12px] hover:rounded-[16px] bg-[#77A9E829] backdrop-blur-[10px] main-shadow flex items-center gap-2 ${className}`}
      >
        {showIcon && <SlashIcon />}
        <span
          className={`text-[16px] leading-[18px] tracking-[-0.16px] text-white  ${labelClassName}`}
        >
          {label}
        </span>
      </button>
      <div className="glow-effect transition-all duration-300 ease-in-out"></div>
    </div>
  );
};

export default SlashButton;
