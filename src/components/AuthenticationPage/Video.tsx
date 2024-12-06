import Image from "next/image"

function Video() {
  return (
    <div className="w-[877px] h-[100vh] relative bg-blue">
        <video
        src="/assets/videos/Authentication.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="opacity-[80%] absolute left-0 bottom-0 w-full h-full object-cover object-[20%] "
      ></video>
      <Image src={"/assets/images/AuthenticationPage/logo.svg"} width={134} height={20} alt="logo" className="absolute z-10 top-[53px] left-[51px]"/>
    </div>
  )
}

export default Video