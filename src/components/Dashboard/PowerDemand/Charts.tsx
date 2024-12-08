import { Ellipsis, Maximize2 } from "lucide-react";
import {LinearChart}  from "./LinearChart";
import ChartDescription from "../ChartDescription";

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

      const processedChartData = chartData.map((entry) => ({
        ...entry,
        Historical: entry.Historical ?? 0,
        Predicted: entry.Predicted ?? 0,
      }));
  return (
    <div className="flex p-[16px] items-center w-full border-t-[1px] border-t-[#E2E8F0]">
      <div className="flex flex-col bg-[#F8FAFCCC] rounded-[16px] p-[16px] w-full gap-[16px]">
        <ChartDescription title="Power Demand Analysis" description="View average, peak, and energy usage trends over time to support data-driven decision-making." />
        <div className="flex items-center gap-[16px] w-full">
            <LinearChart title={"AvgPower (kW)"} chartData={processedChartData} YAxisName={"Power(Kw)"}/>
            <LinearChart title={"PeakPower (kW)"} chartData={processedChartData} YAxisName={"Power(Kw)"}/>
            <LinearChart title={"Energy values over time (kWh)"} chartData={processedChartData} YAxisName={"Energy(Kw)"}/>
        </div>
      </div>
    </div>
  );
}

export default Charts;
