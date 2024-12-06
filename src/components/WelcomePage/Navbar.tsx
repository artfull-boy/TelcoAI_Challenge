import Image from "next/image"
import IconCard from "../ui/IconCard"
import { Bell, ChevronUp, Languages, LifeBuoy } from "lucide-react"

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full h-[68px] bg-white py-[16px] px-[24px]">
        <Image src='/assets/images/WelcomePage/logo.svg' width={126} height={19} alt="logo" />
        <div className="flex gap-[16px]">
            <IconCard Icon={Bell} />
            <IconCard Icon={Languages} />
            <IconCard Icon={LifeBuoy} />
            <div className="pl-[14px] flex gap-[6px] items-center">
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