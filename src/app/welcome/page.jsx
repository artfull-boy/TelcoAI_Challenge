import Hero from "@/components/WelcomePage/Hero"
import Navbar from "@/components/WelcomePage/Navbar"

function Welcome() {
  return (
    <div className="bg-[#F8FAFC] w-full h-[100vh] flex flex-col gap-0 items-center">
        <Navbar />
        <Hero />
    </div>
  )
}

export default Welcome