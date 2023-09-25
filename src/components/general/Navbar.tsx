"use client";
import BtnDesign from "./BtnDesign";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = (props: { navbarFixed: boolean }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tagname");
  const contactUrl = "/contact" === pathname;
  const registerUrl = "/register" === pathname;

  return (
    <div
      className={`w-full px-24 pt-8 pb-6 ${
        contactUrl || registerUrl || props.navbarFixed
          ? "border-none"
          : "border-b border-gray-600 border-opacity-50"
      }`}
    >
      <div className="flex justify-between ">
        <div className=" text-[36px] font-bold">
          {/* logo */}
          <Link href={"/"}>
            <span className="text-white font-sans">
              get<span className=" text-pinnk">linked</span>
            </span>
          </Link>
        </div>

        {/* links */}
        <div className="flex items-center justify-between gap-x-14 text-white ">
          <div
            className={`text-base duration-500 cursor-pointer hover:text-lightPink ${
              tagName === "timeline"
                ? "bg-clip-text text-transparent bg-gradient-to-r font-bold from-[#FE34B9] to-[#903AFF]"
                : "font-normal"
            }`}
          >
            <Link href={"/?tagname=timeline"}>Timeline</Link>
          </div>
          <div
            className={`text-base duration-500 cursor-pointer hover:text-purp ${
              tagName === "overview"
                ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#FE34B9] to-[#903AFF] "
                : "font-normal"
            }`}
          >
            <Link href={"/?tagname=overview"}>Overview</Link>
          </div>
          <div
            className={`text-base duration-500 cursor-pointer hover:text-lightPink ${
              tagName === "faq"
                ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#FE34B9] to-[#903AFF] "
                : "font-normal"
            }`}
          >
            <Link href={"/?tagname=faq"}>FAQs</Link>
          </div>
          <div
            className={`text-base  duration-500 cursor-pointer hover:text-purp ${
              contactUrl
                ? "text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#FE34B9] to-[#903AFF] "
                : "font-normal"
            }`}
          >
            <Link href={"/contact"}>Contact</Link>
          </div>
          <Link href={"/register"} className="cursor-pointer ">
            <BtnDesign text="Register" register={registerUrl ? true : false} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
