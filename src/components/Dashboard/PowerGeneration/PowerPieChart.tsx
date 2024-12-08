// PowerPieChart.tsx
"use client"

import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chartData = [
  { name: "Grid Fail (Hrs)", value: 5.6, color: "#915ec3" },
  { name: "Battery Run (Hrs)", value: 10.4, color: "#fcad41" },
  { name: "Solar Run (Hrs)", value: 1, color: "#56c7c5" },
  { name: "Genset Run (Hrs)", value: 23, color: "#ffa07a" },
  { name: "Fuel Level (L)", value: 60, color: "#4169e1" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const yOffset = index * 12;

  return (
    <text
    x={x}
    y={y}
    fill="black"
    textAnchor={x > cx ? "start" : "end"}
    dominantBaseline="central"
    style={{ fontSize: "10px" }}
  >
    {`${(percent * 100).toFixed(2)}%`}
  </text>
  );
};

export function PowerPieChart() {
  return (
    <Card className="flex flex-col flex-1 items-center justify-center h-[300px]">
      <CardHeader className="flex w-full justify-start pb-0">
        <CardTitle className="text-[14px] text-textcolor font-[500]">Power Generation</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 min-w-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} wrapperStyle={{ fontSize: "12px", color:"#000000B2" }} />
            <Legend 
            layout="vertical"
            align="right"
            verticalAlign="middle"
            wrapperStyle={{ fontSize: "12px", color:"#000000B2"}}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
