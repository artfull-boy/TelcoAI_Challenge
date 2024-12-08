"use client";

import * as React from "react";
import {
  ChevronLeft,
  CircleDollarSign,
  CircleUser,
  Leaf,
  TrendingUpDown,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/Dashboard/nav-main";
import { NavUser } from "@/components/Dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Power demand prediction",
      url: "/powerDemand",
      icon: TrendingUpDown,
      items: [
        {
          title: "Power Generation Segregation",
          url: "/powerGeneration",
        },
      ],
    },
    {
      title: "Investment planning",
      url: "#",
      icon: CircleDollarSign,
    },
    {
      title: "Carbon emissions CO2",
      url: "#",
      icon: Leaf,
    },
  ],
  footerData: [
    {
      title: "Organization Settings",
      url: "#",
      icon: Users,
    },
    {
      title: "Account",
      url: "#",
      icon: CircleUser,
    },
  ],
};

export function AppSidebar({
  isOpen,
  setOpen,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="px-[8px]">
      <SidebarHeader>
        <Image
          src={"/assets/images/Dashboard/logo.svg"}
          width={231}
          height={83}
          alt="logo"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="w-[100%] p-0 pb-[56px] flex flex-col gap-4">
        <NavUser items={data.footerData} />
      </SidebarFooter>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 left-[8px] size-[24px] bg-[#F8FAFC] rounded-[4px] p-[4px]"
        aria-label="Close sidebar"
      >
        <ChevronLeft size={16} className={`duration-500 transition-transform ${isOpen == false ? "rotate-180 " : ""}`} />
      </button>
    </Sidebar>
  );
}
