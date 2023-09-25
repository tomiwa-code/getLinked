"use client";
import Image from "next/image";
import { useEffect } from "react";
import successfully from "public/successfully.png";
import successful from "public/successful.png";
import Link from "next/link";
import purpleStart from "public/purpleStart.png";
import pinkStar from "public/pinkStar.png";
import whiteStar from "public/whiteStar.png";
import { motion } from "framer-motion";
import { blink } from "@/utils/variants";

const Success = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="inset-0 bg-dark bg-opacity-90 absolute z-[99] py-20 flex items-center justify-center">
      <motion.div
        variants={blink}
        initial="initial"
        animate="animate"
        custom={0.9}
        className="absolute top-[10%] left-[70%]"
      >
        <Image width={25} height={25} src={purpleStart} alt="star" />
      </motion.div>

      <motion.div
        variants={blink}
        initial="initial"
        animate="animate"
        custom={0.7}
        className="absolute top-[40%] left-[35%] opacity-50"
      >
        <Image width={20} height={20} src={whiteStar} alt="star" />
      </motion.div>

      <motion.div
        variants={blink}
        initial="initial"
        animate="animate"
        custom={1.3}
        className="absolute top-[80%] left-[65%]"
      >
        <Image width={25} height={25} src={pinkStar} alt="star" />
      </motion.div>

      <div className="w-[550px] min-h-[500px] bg-glass border border-pinnk rounded px-10 py-12">
        <div className="relative min-h-[250px] justify-center flex">
          <div className="absolute w-52 left-16">
            <Image
              src={successfully}
              alt="successIcon"
              height={1000}
              width={1000}
            />
          </div>
          <div className="absolute w-[270px]">
            <Image
              src={successful}
              alt="success image"
              height={1000}
              width={1000}
            />
          </div>
        </div>

        <p className="text-white text-center font-semibold text-2xl">
          Congratulations <br /> you have successfully Registered!
        </p>

        <p className="text-center text-white text-sm mt-2">
          Yes, it was easy and you did it! <br />
          check your mail box for next step 😉
        </p>

        <Link
          href={"/register"}
          className="mt-5 w-full flex justify-center items-center h-14 text-center text-white rounded-md py-3 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-gradient-to-r hover:from-[#903AFF] hover:to-[#FE34B9] duration-700 cursor-pointer"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Success;
