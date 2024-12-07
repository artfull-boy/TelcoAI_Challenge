import Image from "next/image"
import IconCard from "../ui/IconCard"
import { Bell, ChevronUp, Languages, LifeBuoy, TrendingUpDown } from "lucide-react"

type NavbarProps = {
    title: string
}

function Navbar({title}:NavbarProps) {
  return (
    <div className="flex justify-between items-center w-full h-[68px] bg-white py-[16px] px-[24px]">
        <div className="flex items-center gap-[8px]">
            <div className="size-[37px] rounded-[50%] bg-[#E9F1FF] flex items-center justify-center">
                <TrendingUpDown color="#1722FF" size={16} />
            </div>
            <div className="flex flex-col items-start gap-[2px]">
                <p className="text-[16px] text-textcolor font-[600] leading-[14px] tracking-[-0.4px]">{title}</p>
                <p className="text-[#64748B] text-[12px] font-[500] leading-[20px]">NETIS Group</p>
            </div>
        </div>
        <div className="flex gap-[16px]">
            <IconCard Icon={Bell} />
            <IconCard Icon={Languages} />
            <IconCard Icon={LifeBuoy} />
            <div className="pl-[14px] flex gap-[6px] items-center cursor-pointer">
                <div className="size-[36px] bg-[#DCFEDA] rounded-[50%] flex items-center justify-center relative">
                    <p className="text-[12px] font-[600] leading-[11px] tracking-[-0.1px] text-center text-blue">
                        MK
                    </p>
                    <div className="absolute size-[6px] rounded-[50%] bg-[#38C976] border-[1.5px] border-[#fff] bottom-[3px] right-0"></div>
                </div>
                <ChevronUp width={14} height={14} color="#64748B" strokeWidth={2}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar