"use client";

import Image from "next/image";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

type ChartData = {
  date: string;
  Historical: number;
  Predicted: number;
};

type LinearChartProps = {
  title: string;
  chartData: ChartData[];
  YAxisName: string;
};

const renderTick = ({ x, y, payload }: {
  x: number;
  y: number;
  payload: { value: string };
}) => {
  const date = new Date(payload.value);
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();
  return (
    <text x={x} y={y + 5} textAnchor="middle" fontSize={10}>
      <tspan x={x} dy="0.6em">
        {month}
      </tspan>
      <tspan x={x} dy="1.2em">
        {year}
      </tspan>
    </text>
  );
};

export function LinearChart({title, chartData, YAxisName}: LinearChartProps) {
  return (
    <div className="relative bg-white p-4 rounded-[8px] flex-1">
      <h2 className="text-[14px] font-[500] mb-2">{title}</h2>
      <LineChart
        data={chartData}
        width={400}
        height={285}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickLine={false}
          tick={renderTick}
          interval={31}
        />
        <YAxis
          tickFormatter={(value) => value.toFixed(0)}
          label={{
            value: YAxisName,
            position: "top",
            offset: 10,
            style: { textAnchor: "middle", fontWeight: "normal" },
          }}
          className="text-[12px]"
        />
        <Legend
          verticalAlign="top"
          height={36}
          content={({ payload }) => (
            <ul className="flex justify-center items-center gap-3 text-[10px]">
              {payload?.map((entry, index) => (
                <li
                  key={`item-${index}`}
                  className="flex gap-2"
                  style={{ color: entry.color }}
                >
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.333374"
                      y="7"
                      width="16"
                      height="2"
                      fill="currentColor"
                    />
                    <rect
                      x="4.83337"
                      y="4.5"
                      width="7"
                      height="7"
                      rx="3.5"
                      fill="currentColor"
                      stroke="white"
                    />
                  </svg>

                  <span style={{ color: entry.color }}>{entry.value}</span>
                </li>
              ))}
            </ul>
          )}
        />

        <Line
          type="monotone"
          dataKey="Historical"
          stroke="#3954FF"
          dot={false}
          strokeWidth={1}
        />
        <Line
          type="monotone"
          dataKey="Predicted"
          stroke="#13AB0E"
          dot={false}
          strokeWidth={1}
        />
      </LineChart>
    </div>
  );
}
