"use client";
import { AppSidebar } from "@/components/Dashboard/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Dashboard/Navbar";

export default function Page() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  return (
    <SidebarProvider defaultOpen={true} open={open}>
      <AppSidebar isOpen={open} setOpen={setOpen} />
      <SidebarInset>
        <Navbar title={pathname.includes("powerDemand") ? "Power & Energy" : "Power demand prediction"} />
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/powerDemand" className={`font-[500] ${pathname.includes("powerGeneration") ? "text-blue underline" : ""}`}>
                    Power demand prediction
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {pathname.includes("powerGeneration") && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block">
                      <ChevronRight size={8} color="#94A3B8" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-[500]">
                        Power Generation Segregation
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
