"use client";

import { ChevronUp, type LucideIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: {
    title: string;
    url: string;
  }[];
}

export function NavMain({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <>
    <div className="bg-[#F8FAFCCC] py-[8px] px-[12px] rounded-[8px] flex gap-[8px]">
    <Image src={"/assets/images/Dashboard/netis.png"} width={40} height={40} alt="logo netis" />
    <div className="flex flex-col gap-[4px]">
      <p className="text-[16px] leading-[14px] font-[600] tracking-[-0.4px] text-[#333]">NETIS Group</p>
      <p className="text-[#333] text-[12px] leading-[14px]">Telecommunications</p>
    </div>
  </div>
    <SidebarMenu>
      {items.map((item) => {
        const isActive = item.url === pathname;

        return item.items?.length > 0 ? (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={true}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`bg-white p-[8px] flex gap-[8px] justify-center items-center hover:bg-[#F8FAFC] transition-all duration-500 group-data-[state=open]/collapsible:bg-[#F8FAFC] ${
                    isActive ? "bg-[#F8FAFC]" : ""
                  }`}
                >
                  {item.icon && (
                    <div
                      className={`bg-[#F1F5F9] p-[4px] rounded-[5px] transition-all duration-500 group-data-[state=open]/collapsible:bg-blue "
                      }`}
                    >
                      <item.icon
                        width={16}
                        height={16}
                        strokeWidth={1.5}
                        className={`group-data-[state=open]/collapsible:text-white transition-all duration-500 text-textcolor
                        `}
                      />
                    </div>
                  )}
                  <span className="text-textcolor text-[12px] font-[500]">
                    {item.title}
                  </span>
                  <ChevronUp className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-[#F8FAFC]">
                <SidebarMenuSub className={`border-l-[transparent] border-l-[4px]`}>
                  {item.items?.map((subItem) => {
                    const isSubActive = pathname === subItem.url;
                    return (
                      <SidebarMenuSubItem key={subItem.title} className="relative ">
                        {isSubActive && <div className="absolute left-[-15px] bottom-[50%] translate-y-[50%] transition-all duration-500 h-[21px] w-[4px] bg-blue rounded-[2px]">
                          </div>}
                        <SidebarMenuSubButton asChild>
                          <a
                            href={subItem.url}
                            className={`${
                              isSubActive ? "text-blue" : "text-textcolor"
                            }`}
                          >
                            <span className="text-[12px] font-[500]">
                              {subItem.title}
                            </span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    );
                  })}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ) : (
          <SidebarMenuItem key={item.title} className="w-full">
            <SidebarMenuButton
              tooltip={item.title}
              className={`p-[8px] flex gap-[8px] justify-start items-center hover:bg-[#F8FAFC] transition-all duration-500 w-[100%] ${
                isActive ? "bg-[#F8FAFC]" : "bg-white"
              }`}
            >
              {item.icon && (
                <div
                  className={`p-[4px] rounded-[5px] ${
                    isActive ? "bg-blue" : "bg-[#F1F5F9]"
                  }`}
                >
                  <item.icon
                    width={16}
                    height={16}
                    strokeWidth={1.5}
                    className={`${isActive ? "text-white" : "text-textcolor"}`}
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
    </>
  );
}
