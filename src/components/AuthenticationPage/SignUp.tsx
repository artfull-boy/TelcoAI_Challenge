import Image from "next/image";
import Link from "next/link";

function SignUp() {
  return (
    <div className="flex flex-col pl-[85px] justify-center h-full">
      <div className="flex flex-col gap-[72px] items-start w-[352px]">
        <div className="flex flex-col gap-[16px]">
          <Image
            src={"/assets/images/AuthenticationPage/authenticationShape.svg"}
            width={38}
            height={29}
            alt="shape"
          />
          <p className="title-gradient font-[600] text-[40px] leading-[37px] tracking-[-1px]">
            AI Powered Telco
            <br />
            Transformation.
          </p>
          <p className="text-[14px] leading-[21px] text-textcolor tracking-[-1px]">
            We help Telcos to design, operate and optimize their networks more
            intelligently through an end-to-end data platform.
          </p>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <p className="text-[14px] leading-[21px] text-textcolor tracking-[-1px]">
            Continue with Google using your professional account
          </p>
          <Link href={"/welcome"}>
            <button className="w-full text-white font-[500] leading-[19.63px] text-[16px] text-center bg-blue py-[16px] px-[28px] rounded-[8px] flex gap-[12px] justify-center items-center hover:bg-[#0E17C5] transition-all duration-500 ease group">
              <div className="flex items-center justify-center w-[28px] h-[18px]">
                <Image
                  src={"/assets/images/AuthenticationPage/googleLogo.svg"}
                  width={18}
                  height={18}
                  className="group-hover:w-[28px] transition-all duration-500 ease"
                  alt="logo google"
                />
              </div>
              Sign in with Google
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-[14px] text-textcolor gap-0 mt-[158px]">
        <p>By clicking continue, you agree to our</p>
        <p>
          <span className="text-blue underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-blue underline cursor-pointer">
            Privacy Policy
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default SignUp;
