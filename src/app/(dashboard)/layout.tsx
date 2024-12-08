"use client";
import { AppSidebar } from "@/components/Dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Dashboard/Navbar";
import Header from "@/components/Dashboard/Header";
import KeyMetrics from "@/components/Dashboard/KeyMetrics";
import SelectTime from "@/components/Dashboard/SelectTime";
import Charts from "@/components/Dashboard/Charts";
import MapChart from "@/components/Dashboard/MapChart";


export default function Page() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen={true} open={open}>
      <AppSidebar isOpen={open} setOpen={setOpen} />
      <SidebarInset>
        <Navbar
          title={
            pathname.includes("powerDemand")
              ? "Power & Energy"
              : "Power demand prediction"
          }
        />
        <Header pathname={pathname} />
        <div className="flex flex-1 flex-col gap-4  pt-0">
          <KeyMetrics />
          <SelectTime />
          <Charts />
          <MapChart />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
