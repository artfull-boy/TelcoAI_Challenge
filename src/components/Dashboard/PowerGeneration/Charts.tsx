import ChartDescription from "../ChartDescription";
import { PowerPieChart } from "./PowerPieChart";
import GridBatteryGensetChart from "./GridBatteryGensetChart";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

function Charts() {
  const data = [
    {
      id: "payment-1",
      generatedOn: "03/17/2023",
      gridRun: 32.74,
      gridFail: 2.45,
      batteryRun: 14.38,
      solarRun: 5.62,
      gensetRun: 7.85,
      fuelLevel: 87.23,
      fuelConsumption: 18.52,
      fuelCost: 227.64,
    },
    {
      id: "payment-2",
      generatedOn: "08/12/2023",
      gridRun: 40.82,
      gridFail: 1.76,
      batteryRun: 18.24,
      solarRun: 3.57,
      gensetRun: 11.31,
      fuelLevel: 72.88,
      fuelConsumption: 22.67,
      fuelCost: 314.52,
    },
    {
      id: "payment-3",
      generatedOn: "01/23/2023",
      gridRun: 28.16,
      gridFail: 3.58,
      batteryRun: 10.95,
      solarRun: 7.04,
      gensetRun: 5.98,
      fuelLevel: 65.49,
      fuelConsumption: 15.72,
      fuelCost: 190.73,
    },
    {
      id: "payment-4",
      generatedOn: "06/10/2023",
      gridRun: 25.56,
      gridFail: 4.62,
      batteryRun: 12.87,
      solarRun: 9.02,
      gensetRun: 6.23,
      fuelLevel: 75.41,
      fuelConsumption: 19.18,
      fuelCost: 248.87,
    },
    {
      id: "payment-5",
      generatedOn: "11/05/2023",
      gridRun: 33.89,
      gridFail: 2.03,
      batteryRun: 16.42,
      solarRun: 4.59,
      gensetRun: 9.75,
      fuelLevel: 80.12,
      fuelConsumption: 20.34,
      fuelCost: 265.23,
    },
    {
      id: "payment-6",
      generatedOn: "02/28/2023",
      gridRun: 30.25,
      gridFail: 3.17,
      batteryRun: 11.89,
      solarRun: 6.21,
      gensetRun: 8.56,
      fuelLevel: 68.43,
      fuelConsumption: 17.81,
      fuelCost: 214.56,
    },
    {
      id: "payment-7",
      generatedOn: "07/19/2023",
      gridRun: 38.75,
      gridFail: 1.98,
      batteryRun: 14.76,
      solarRun: 8.33,
      gensetRun: 7.42,
      fuelLevel: 90.78,
      fuelConsumption: 23.94,
      fuelCost: 310.67,
    },
  ];

  return (
    <div className="flex p-[16px] items-center w-full border-t-[1px] border-t-[#E2E8F0]">
      <div className="flex flex-col bg-[#F8FAFCCC] rounded-[16px] p-[16px] w-full gap-[16px]">
        <ChartDescription
          title="Power Generation Breakdown"
          description="Analyze the distribution of power sources by hours and monitor trends across Grid, Solar, Battery, and Generator usage."
        />
        <div className="flex items-center gap-[16px] w-full">
          <PowerPieChart />
          <GridBatteryGensetChart />
        </div>
        <div className="w-full flex flex-col gap-[16px] px-[16px] py-[8px] bg-white">
          <p className="text-textcolor text-[14px] font-[500] leading-[16px]">
            Power Generation Table
          </p>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Charts;
