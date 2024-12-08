import { BatteryMedium, ChartColumnBig, TrendingUp, Watch } from "lucide-react";
import MetricCard from "./MetricCard";

function KeyMetrics() {
  const keyMetrics = [
    {
      title: "Current Demand",
      number: "8,250 kWh",
      color: "#16A085",
      icon: BatteryMedium,
      hexagonColor: "#16A08508",
    },
    {
      title: "Predicted Demand",
      number: "9,500 kWh (Next Month)",
      color: "#BF5AE0",
      icon: TrendingUp,
      hexagonColor: "#BF5AE008",
    },
    {
      title: "Peak Demand Times",
      number: "2 PM - 5 PM",
      color: "#BF5AE0",
      icon: Watch,
      hexagonColor: "#C84E8908",
    },
  ];
  return (
    <div className="flex flex-col px-[24px] pt-[8px] gap-[8px] pb-[28px] w-full border-t-[1px] border-t-[#E2E8F0]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[4px] items-center">
          <div className="size-[22px] bg-[#F8FAFC] rounded-[6px] flex justify-center items-center">
            <ChartColumnBig size={16} color="#3954FF" />
          </div>
          <p className="font-[600] text-[14px] leading-[16px] tracking-[-0.3px] text-textcolor">
            Key Metrics Overview
          </p>
        </div>
        <p className="text-[12px] text-[#64748B] leading-[17px] tracking-[-0.2px]">
          Quickly view real-time and forecasted power demand metrics to support
          proactive resource planning
        </p>
      </div>
      <div className="flex gap-[16px] items-center">
        {keyMetrics.map((item) => {
          return (
            <MetricCard
              key={item.title}
              Color={item.color}
              number={item.number}
              title={item.title}
              Icon={item.icon}
              hexagonColor={item.hexagonColor}
            />
          );
        })}
      </div>
    </div>
  );
}

export default KeyMetrics;
