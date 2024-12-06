import Video from "@/components/AuthenticationPage/Video";
import SignUp from "@/components/AuthenticationPage/SignUp";

export default function Home() {
  return (
    <div className="flex w-full h-[100vh]">
      <Video />
      <SignUp />
    </div>
  );
}
