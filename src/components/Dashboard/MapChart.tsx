import ChartDescription from "./ChartDescription";
import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";

function MapChart() {
  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    // Add the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoMercator(),
      })
    );
    chart.set("zoomLevel", 6); 
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    // Configure the appearance of the polygons
    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      fill: am5.color(0x74b9ff),
      stroke: am5.color(0xf8fafc),
      strokeWidth: 1,
    });

    // Enable hover state
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x0984e3),
    });

    return () => {
      root.dispose(); // Clean up the chart on component unmount
    };
  }, []);

  return (
    <div className="flex p-[16px] items-center w-full">
      <div className="flex flex-col bg-[#F8FAFCCC] rounded-[16px] p-[16px] w-full gap-[16px]">
        <ChartDescription
          title="Regional Energy and Power Distribution"
          description="Visual representation of energy consumption levels across regions, color-coded from low to high usage."
        />
        <div className="flex flex-col gap-[16] bg-white p-[16px] rounded-[8px] h-[480px] w-full">
          <div className="flex justify-between items-center">
            <p className="text-textcolor text-[13px] leading-[17px]">
              Energy/Power Range
            </p>
            <div className="flex gap-0">
              {/* Legend Items */}
              {[
                { color: "#DEEBF7", label: "Low" },
                { color: "#C6DBEF", label: "Moderate-Low" },
                { color: "#9ECAE1", label: "Moderate" },
                { color: "#6BAED6", label: "Moderate-High" },
                { color: "#3182BD", label: "High" },
                { color: "#08519C", label: "Very High" },
              ].map(({ color, label }) => (
                <div key={label} className="flex gap-[4px] p-[4px] items-center">
                  <div
                    className="size-[8px] rounded-[50%] border-[1px] border-white"
                    style={{ backgroundColor: color }}
                  ></div>
                  <p className="text-[12px] leading-[14.5px] text-[#000000B2]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Chart Container */}
          <div id="chartdiv" className="w-full h-full mt-[16px]"></div>
        </div>
      </div>
    </div>
  );
}

export default MapChart;
