import { LucideIcon } from "lucide-react";

type MetricCardProps = {
    Icon: LucideIcon,
    number: string,
    title: string,
    Color: string,
    hexagonColor: string
}

function MetricCard({Icon, number, title, Color, hexagonColor}:MetricCardProps) {
  return (
    <div className={`flex items-center justify-between flex-1 h-[88px] p-[12px]  gap-[8px] rounded-[8px]`} style={{ backgroundColor: "#F8FAFC", color: Color }}>
      <div className={`flex flex-col `}>
        <p className={`text-[18px] font-[600] leading-[22px] tracking-[1%]`}>
          {number}
        </p>
        <p className="text-[14px] leading-[20px]">{title}</p>
      </div>
      <div className={`icon-container flex justify-center items-center`} style={{ backgroundColor: hexagonColor}}>
        <Icon className="-rotate-90" />
      </div>
    </div>
  );
}

export default MetricCard;
