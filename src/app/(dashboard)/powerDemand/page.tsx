"use client"
import KeyMetrics from "@/components/Dashboard/PowerDemand/KeyMetrics";
import SelectTime from "@/components/Dashboard/PowerDemand/SelectTime";
import Charts from "@/components/Dashboard/PowerDemand/Charts";
import MapChart from "@/components/Dashboard/PowerDemand/MapChart";

function page() {
  return (
    <div className="flex flex-col w-full">
          <KeyMetrics />
          <SelectTime />
          <Charts />
          <MapChart />
    </div>
  )
}

export default page