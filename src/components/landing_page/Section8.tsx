"use client";
import { blink, fadeIn, staggerParent } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import liberty_assured from "public/liberty_assured.png";
import liberty from "public/liberty.png";
import winwise_logo from "public/winwise_logo.png";
import wisper_logo from "public/wisper_logo.png";
import paybox from "public/paybox.png";
import vizualPlus from "public/vizualPlus.png";
import pinkStar from "public/pinkStar.png";
import whiteStar from "public/whiteStar.png";
import purpleStart from "public/purpleStart.png";
import { PurpleFlare } from "../general/Flares";

const Section8 = () => {
  return (
    <div className="w-full relative text-center text-white py-20 border-b border-gray-700 border-opacity-50 px-40">
      <motion.div
        variants={fadeIn("up")}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.3, once: true }}
        className="absolute bottom-32 right-32"
      >
        {PurpleFlare}
      </motion.div>

      <div className="absolute -left-12">{PurpleFlare}</div>

      {/* Title  */}
      <div className="space-y-5">
        <motion.p
          variants={fadeIn("up")}
          custom={0.3}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-sans font-bold text-[32px]"
        >
          Partners and Sponsors
        </motion.p>
        <motion.p
          variants={fadeIn("up")}
          custom={0.5}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-base font-normal text-[14px]"
        >
          Getlinked Hackathon 1.0 is honored to have the following <br /> major
          companies as its partners and sponsors
        </motion.p>
      </div>

      <motion.div
        variants={staggerParent}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.5, once: true }}
        className="border rounded-md border-pinnk mt-20 py-24 flex items-center justify-center relative"
      >
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.9}
          className="absolute -top-[5%] left-[10%]"
        >
          <Image src={purpleStart} width={30} height={30} alt="star" priority />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.9}
          className="absolute top-[15%] left-[58%]"
        >
          <Image src={pinkStar} width={25} height={25} alt="star" priority />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={1.5}
          className="absolute bottom-[15%] left-[55%]"
        >
          <Image src={whiteStar} width={25} height={25} alt="star" priority />
        </motion.div>

        <div className="grid grid-cols-3">
          {/* Liberty assured  */}
          <motion.div
            variants={fadeIn("up")}
            custom={0.3}
            className="flex items-center relative after:absolute after:h-1 after:w-[250px] after:-translate-x-1/2 after:left-1/2 after:bg-pinnk after:bottom-0 before:absolute before:w-1 before:h-[100px] before:-translate-y-1/2 before:top-1/2 before:bg-pinnk before:right-0 justify-center h-[150px] w-[300px]"
          >
            <div className="w-[100px]">
              <Image
                src={liberty_assured}
                alt="liberty assured"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>

          {/* Liberty pay  */}
          <motion.div
            variants={fadeIn("up")}
            custom={0.5}
            className="flex items-center relative after:absolute after:h-1 after:w-[250px] after:-translate-x-1/2 after:left-1/2 after:bg-pinnk after:bottom-0 before:absolute before:w-1 before:h-[100px] before:-translate-y-1/2 before:top-1/2 before:bg-pinnk before:right-0 justify-center h-[150px] w-[300px]"
          >
            <div className="w-[200px]">
              <Image
                src={liberty}
                alt="liberty pay"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>

          {/* WinWise  */}
          <motion.div
            variants={fadeIn("up")}
            custom={0.7}
            className="flex items-center relative after:absolute after:h-1 after:w-[250px] after:-translate-x-1/2 after:left-1/2 after:bg-pinnk after:bottom-0 before:absolute justify-center h-[150px] w-[300px]"
          >
            <div className="w-[100px]">
              <Image
                src={winwise_logo}
                alt="winwise_logo"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>

          {/* Whisper  */}
          <motion.div
            variants={fadeIn("up")}
            custom={0.9}
            className="flex items-center relative before:absolute before:w-1 before:h-[100px] before:-translate-y-1/2 before:top-1/2 before:bg-pinnk before:right-0 justify-center h-[150px] w-[300px]"
          >
            <div className="w-[100px]">
              <Image
                src={wisper_logo}
                alt="wisper"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>

          {/* Paybox  */}
          <motion.div
            variants={fadeIn("up")}
            custom={1.1}
            className="flex items-center relative before:absolute before:w-1 before:h-[100px] before:-translate-y-1/2 before:top-1/2 before:bg-pinnk before:right-0 justify-center h-[150px] w-[300px]"
          >
            <div className="w-[150px]">
              <Image
                src={paybox}
                alt="paybox"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>

          {/* vizualize  */}
          <motion.div
            variants={fadeIn("up")}
            custom={1.3}
            className="flex items-center relative  justify-center h-[150px] w-[300px]"
          >
            <div className="w-[200px]">
              <Image
                src={vizualPlus}
                alt="vizualPlus"
                width={1000}
                height={1000}
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section8;
