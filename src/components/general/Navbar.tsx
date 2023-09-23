"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
import BtnDesign from "./BtnDesign";

const Navbar = () => {
  return (
    <motion.div
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      custom={0.9}
      className="w-full px-24 pt-8 pb-6 border-b border-gray-700 border-opacity-50"
    >
      <div className="flex justify-between ">
        <div className=" text-[36px] font-bold">
          {/* logo */}
          <span className="text-white font-sans">
            get<span className=" text-pinnk">linked</span>
          </span>
        </div>

        {/* links */}
        <div className="flex items-center justify-between gap-24 text-white ">
          <div className="text-base font-normal duration-500 cursor-pointer hover:text-lightPink">
            Timeline
          </div>
          <div className="text-base font-normal duration-500 cursor-pointer hover:text-purp">
            Overview
          </div>
          <div className="text-base font-normal duration-500 cursor-pointer hover:text-lightPink">
            FAQs
          </div>
          <div className="text-base font-normal duration-500 cursor-pointer hover:text-purp">
            Contact
          </div>
          <div className="cursor-pointer ">
            <BtnDesign text="Register" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
