import { Ellipsis, Maximize2 } from "lucide-react";
import {LinearChart}  from "./LinearChart";

function Charts() {
    const chartData = Array.from({ length: 365 }, (_, index) => {
        const date = new Date(2024, 0, 1);
        date.setDate(index + 1);
        return {
          date: date.toISOString().split("T")[0], // Format as ISO date
          Historical: index <= 273 ? Math.random() * (10 - 5) + 5 : null, // Historical until October
          Predicted: index > 273 ? Math.random() * (10 - 5) + 5 : null, // Predicted from October onward
        };
      });
  return (
    <div className="flex p-[16px] items-center w-full border-t-[1px] border-t-[#E2E8F0]">
      <div className="flex flex-col bg-[#F8FAFCCC] rounded-[16px] p-[16px] w-full gap-[16px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[2px] ">
            <p className="text-[14px] font-[600] leading-[16px] tracking-[-0.3px] text-textcolor">
              Power Demand Analysis
            </p>
            <p className="text-[13px] leading-[17px] tracking-[-0.2px] text-[#64748B]">
              View average, peak, and energy usage trends over time to support
              data-driven decision-making.
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="size-[32px] cursor-pointer bg-white rounded-[50%] flex items-center justify-center">
                <Maximize2 color="#333333" size={18}/>
            </div>
            <div className="size-[32px] cursor-pointer bg-white rounded-[50%] flex items-center justify-center">
                <Ellipsis color="#333333" size={18}/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[16px] w-full">
            <LinearChart title={"AvgPower (kW)"} chartData={chartData} YAxisName={"Power(Kw)"}/>
            <LinearChart title={"PeakPower (kW)"} chartData={chartData} YAxisName={"Power(Kw)"}/>
            <LinearChart title={"Energy values over time (kWh)"} chartData={chartData} YAxisName={"Energy(Kw)"}/>
        </div>
      </div>
    </div>
  );
}

export default Charts;
