import { Ellipsis, Maximize2 } from "lucide-react"

type ChartDescriptionProps = {
    title: string,
    description: string
}
function ChartDescription({title, description}:ChartDescriptionProps) {
  return (
    <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[2px] ">
            <p className="text-[14px] font-[600] leading-[16px] tracking-[-0.3px] text-textcolor">
              {title}
            </p>
            <p className="text-[13px] leading-[17px] tracking-[-0.2px] text-[#64748B]">
              {description}
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="size-[32px] cursor-pointer bg-white rounded-[50%] flex items-center justify-center">
                <Maximize2 color="#333333" size={18}/>
            </div>
            <div className="size-[32px] cursor-pointer bg-white rounded-[50%] flex items-center justify-center">
                <Ellipsis color="#333333" size={18}/>
            </div>
          </div>
        </div>
  )
}

export default ChartDescription