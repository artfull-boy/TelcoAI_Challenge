"use client";
import { AppSidebar } from "@/components/Dashboard/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactInstance, ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Dashboard/Navbar";
import Header from "@/components/Dashboard/Header";

interface PageProps {
  children: ReactNode;
}

export default function Page({children}:PageProps) {
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
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
