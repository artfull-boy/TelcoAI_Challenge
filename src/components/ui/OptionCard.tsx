import Link from "next/link";
import { FC } from "react";

interface OptionCardProps {
  title: string;
  subtitle: string;
  Icon: FC<{ width: number; height: number; className?: string }>;
  link: string;
}

const OptionCard: FC<OptionCardProps> = ({ title, subtitle, Icon, link }) => {
  return (
    <Link href={link}>
      <div className="cardHover group flex flex-col items-center justify-center rounded-[16px] w-[468px] py-[56px] bg-[#1722FF05] gap-[12px] transition-all duration-500 ease">
        <div className="w-[112px] group-hover:w-[128px] h-[80px] bg-white rounded-[160px] py-[16px] px-[32px] flex justify-center items-center transition-all duration-500 ease">
          <Icon width={48} height={48} className="iconHover text-[#3954FF]" />
        </div>
        <p className="text-black text-[24px] font-[500] text-center leading-[29px] tracking-[-0.1px] w-[276px]">
          {title}
        </p>
        <p className="text-[14px] leading-[18.76px] tracking-[-0.5%] text-center text-textcolor w-[276px]">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

export default OptionCard;
