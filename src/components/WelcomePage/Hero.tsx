import { BrainCircuit, RadioTower } from "lucide-react"
import OptionCard from "../ui/OptionCard"

function Hero() {
  return (
    <div className="w-[968px] h-[100%] flex flex-col justify-center items-center gap-[48px]">
        <div className="flex flex-col gap-[8px] justify-center items-center">
                <p className="text-[32px] text-center text-blue leading-[26px] tracking-[-1px] font-[500]">Welcome to MLNetworks</p>
                <p className="text-textcolor text-[20px] text-center leading-[26px] tracking-[-1px]">Choose an AI Module to Begin</p>
        </div>
        <div className="flex gap-[32px] w-full">
            <OptionCard title={"TelcoAI"} subtitle={"AI insights to optimize telecom network performance and customer experience."} Icon={RadioTower} link={"#"}/>
            <OptionCard title={"Power AI"} subtitle={"AI-driven solutions for managing power demand and optimizing energy use."} Icon={BrainCircuit} link={"/powerDemand"}/>
        </div>
    </div>
  )
}

export default Hero