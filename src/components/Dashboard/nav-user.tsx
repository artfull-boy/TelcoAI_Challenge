"use client";
import {
  LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavUser({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {

  return (
    <SidebarGroup className="w-[100%] p-0 flex flex-col gap-[8px]">
      <SidebarGroupLabel className="text-[12px] font-[500] text-[#94A3B8]">Settings</SidebarGroupLabel>
      <SidebarGroupContent className="w-[100%] ml-0">
      <SidebarMenu className="w-[100%] ml-0">
      {items.map((item) => {
        return (
          <SidebarMenuItem key={item.title} className="w-full ml-0">
            <SidebarMenuButton
              tooltip={item.title}
              className={`p-[8px] flex gap-[8px] justify-start items-center hover:bg-[#F8FAFC] transition-all duration-500 w-[100%] bg-white
            `}
            >
              {item.icon && (
                <div
                  className={`p-[4px] rounded-[5px] 
                  bg-[#F1F5F9]
                }`}
                >
                  <item.icon
                    width={16}
                    height={16}
                    strokeWidth={1.5}
                    className={`text-textcolor`}
                  />
                </div>
              )}
              <span className="text-textcolor text-[12px] font-[500]">
                {item.title}
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
      </SidebarMenu>
      </SidebarGroupContent>
      
    </SidebarGroup>
  );
}
