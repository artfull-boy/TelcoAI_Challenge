import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Charts from "@/components/Dashboard/PowerGeneration/Charts";

function page() {
  return (
    <div className="flex flex-col gap-0">
      <div className="flex px-[24px] py-[14.5px] justify-between items-center w-full border-t-[1px] border-t-[#E2E8F0]">
        <div className="flex flex-col gap-[4px]">
            <p className="text-[16px] font-[600] text-textcolor leading-[16px] tracking-[-0.3px]">
            Power Generation Segregation
            </p>
            <p className="text-[13px] text-[#64748B] leading-[17px]">
            Analyze power generation by source across different levels of operation to optimize energy sourcing.
            </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between w-[100px] text-textcolor text-[14px] font-[600] bg-[#F1F5F9] p-[10px] rounded-[8px]">
            Network
            <ChevronDown color="#334155" size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Signal</DropdownMenuItem>
            <DropdownMenuItem>Cost</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Charts />
    </div>
  );
}

export default page;
