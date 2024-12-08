"use client"

import { ColumnDef } from "@tanstack/react-table"
import {Settings2 } from "lucide-react"

export type Payment = {
  id: string
  generatedOn: Date,
  gridRun: number,
  gridFail: number,
  batteryRun: number,
  solarRun: number,
  gensetRun: number,
  fuelLevel: number,
  fuelConsumption: number,
  fuelCost: number
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "generatedOn",
    header: "GeneratedOn",
  },
  {
    accessorKey: "gridRun",
    header: "Grid Run (Hrs)",
  },
  {
    accessorKey: "gridFail",
    header: "Grid Fail (Hrs)",
  },
  {
    accessorKey: "batteryRun",
    header: "Battery Run (Hrs)",
  },
  {
    accessorKey: "solarRun",
    header: "Solar Run (Hrs)",
  },
  {
    accessorKey: "gensetRun",
    header: "Genset Run (Hrs)",
  },
  {
    accessorKey: "fuelLevel",
    header: "Fuel Level (L)",
  },
  {
    accessorKey: "fuelConsumption",
    header: "Fuel consumption(L)",
  },
  {
    accessorKey: "fuelCost",
    header: "Fuel Cost ($)",
  },
  {
    accessorKey: "actions",
    header: () => {
        return (
            <div className="size-[32px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer">
                <Settings2 size={18} />
            </div>
        )
    },
  }
]
