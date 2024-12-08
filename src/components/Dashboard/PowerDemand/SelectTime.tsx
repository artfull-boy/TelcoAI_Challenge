import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function SelectTime() {
  return (
    <div className="flex px-[24px] py-[14.5px] justify-between items-center w-full border-t-[1px] border-t-[#E2E8F0]">
      <div className="flex gap-[8px]">
        <ToggleGroup type="single" defaultValue="past_month">
          <ToggleGroupItem
            value="past_month"
            className="data-[state=on]:bg-blue data-[state=on]:text-[#D7E6FF]"
          >
            <p className="text-[13px] font-[600]">Past month</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="quarter"
            className="data-[state=on]:bg-blue data-[state=on]:text-[#D7E6FF]"
          >
            <p className="text-[13px] font-[600]">Quarter</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="year"
            className="data-[state=on]:bg-blue data-[state=on]:text-[#D7E6FF]"
          >
            <p className="text-[13px] font-[600]">Year</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-between w-[100px] text-textcolor text-[14px] font-[600] bg-[#F1F5F9] p-[10px] rounded-[8px]">
            Network
            <ChevronDown color="#334155" size={16}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Signal</DropdownMenuItem>
          <DropdownMenuItem>Cost</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SelectTime;
