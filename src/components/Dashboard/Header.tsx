"use client"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { ChevronRight, Search, Settings2, X } from "lucide-react";
  import { Input } from "@/components/ui/input";
import { useState } from "react";

type HeaderProps = {
    pathname: string
}

function Header({pathname}:HeaderProps) {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 overflow-hidden border-t-[1px] border-t-[#E2E8F0]">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            {!openSearchBar && (
              <Breadcrumb className="w-auto transition-all duration-500 ease-in-out">
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink
                      href="/powerDemand"
                      className={`font-[500] ${
                        pathname.includes("powerGeneration")
                          ? "text-blue underline"
                          : ""
                      }`}
                    >
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
            )}

            <div className={`flex justify-start items-center relative transition-all duration-500  ${openSearchBar ? "w-full" : "w-auto"}`}>
              <Search
                size={18}
                className="cursor-pointer transition-all duration-500"
                onClick={() => setOpenSearchBar(true)}
              />
              <Input
                type="text"
                placeholder="Type to find data, Reports, or insights..."
                className={`border-none focus-visible:ring-0 transition-all duration-500 caret-blue block absolute  ${
                  openSearchBar ? "right-[-15px] opacity-100" : "right-[-100%] opacity-0 cursor-default"
                }`}
              />
              {openSearchBar && (
                <div className="absolute flex gap-[4px] right-[16px] bottom-[50%] translate-y-[60%] transition-all duration-500">
                  <div
                    className="size-[32px] bg-white rounded-[50%] cursor-pointer"
                    onClick={() => setOpenSearchBar(false)}
                  >
                    <X size={16} />
                  </div>
                  <div className="size-[32px] bg-white rounded-[50%] opacity-30 cursor-pointer">
                    <Settings2 size={16} color="#333333" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
  )
}

export default Header