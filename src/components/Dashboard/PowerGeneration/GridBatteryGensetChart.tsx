"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialData = [
  { month: 1, gridRun: 21.2, batteryRun: 8.4, gensetRun: 13.5 },
  { month: 2, gridRun: 19.8, batteryRun: 7.6, gensetRun: 11.9 },
  { month: 3, gridRun: 22.4, batteryRun: 9.2, gensetRun: 14.7 },
  { month: 4, gridRun: 20.1, batteryRun: 8.8, gensetRun: 15.2 },
  { month: 5, gridRun: 21.5, batteryRun: 9.1, gensetRun: 13.4 },
  { month: 6, gridRun: 20.8, batteryRun: 8.5, gensetRun: 12.7 },
  { month: 7, gridRun: 21.1, batteryRun: 9.3, gensetRun: 14.1 },
  { month: 8, gridRun: 20.9, batteryRun: 8.8, gensetRun: 13.7 },
  { month: 9, gridRun: 21.3, batteryRun: 9.6, gensetRun: 14.5 },
  { month: 10, gridRun: 20.4, batteryRun: 8.2, gensetRun: 12.8 },
  { month: 11, gridRun: 21.6, batteryRun: 9.4, gensetRun: 14.3 },
  { month: 12, gridRun: 20.7, batteryRun: 8.9, gensetRun: 13.2 },
  { month: 13, gridRun: 21.2, batteryRun: 8.6, gensetRun: 14.0 },
  { month: 14, gridRun: 20.3, batteryRun: 9.1, gensetRun: 13.1 },
  { month: 15, gridRun: 21.8, batteryRun: 8.8, gensetRun: 14.4 },
  { month: 16, gridRun: 20.5, batteryRun: 9.3, gensetRun: 12.9 },
  { month: 17, gridRun: 21.4, batteryRun: 8.7, gensetRun: 13.8 },
  { month: 18, gridRun: 20.9, batteryRun: 9.0, gensetRun: 13.5 },
];


const GridBatteryGensetChart: React.FC = () => {
  return (
    <Card className="flex flex-col flex-1 items-center h-[300px]">
      <CardHeader className="flex w-full justify-start pb-0">
        <CardTitle className="text-[14px] text-textcolor font-[500]">
          Grid, Battery, Genset Consumption - Trend
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={initialData} className="text-[12px] w-full">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month"allowDataOverflow tickLine={false} interval={0} tickMargin={0}  strokeDasharray="3 3"/>
            <YAxis allowDataOverflow type="number" strokeDasharray="3 3" tickLine={false} yAxisId="1" />
            <Tooltip />
            <Line
              yAxisId="1"
              type="linear"
              dataKey="gridRun"
              stroke="#8979FF"
              animationDuration={300}
              dot={{
                fill: "#8979FF",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              yAxisId="1"
              type="linear"
              dataKey="batteryRun"
              stroke="#FF928A"
              animationDuration={300}
              dot={{
                fill: "#FF928A",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              yAxisId="1"
              type="linear"
              dataKey="gensetRun"
              stroke="#3CC3DF"
              animationDuration={300}
              dot={{
                fill: "#3CC3DF",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default GridBatteryGensetChart;
