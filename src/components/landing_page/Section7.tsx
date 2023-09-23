"use client";
import { blink, bounce, fadeIn, staggerParent } from "@/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import cup from "public/cup.png";
import silver_medal from "public/silver_medal.png";
import gold_medal from "public/gold_medal.png";
import bronze_medal from "public/bronze_medal.png";
import purplestart from "public/purplestart.png";
import whiteStar from "public/whiteStar.png";
import { PurpleFlare } from "../general/Flares";

const Section7 = () => {
  return (
    <div className="py-20 px-40 border-b border-gray-700 border-opacity-50  relative z-20 prizeBgImg before:bg-[#100B20] before:absolute before:inset-0 before:z-10">
      <div className="w-full flex relative z-30">
        <div className="w-1/2 relative">
          <motion.div
            className="absolute left-[30%]"
            variants={blink}
            initial="initail"
            animate="animate"
            custom={2}
          >
            <Image
              priority
              width={20}
              height={20}
              src={purplestart}
              alt="purple star"
            />
          </motion.div>
        </div>
        <div className="w-1/2 space-y-5 pl-20 relative">
          <motion.div
            className="absolute right-[35%] bottom-[8%]"
            variants={blink}
            initial="initail"
            animate="animate"
            custom={2.5}
          >
            <Image
              priority
              width={20}
              height={20}
              src={purplestart}
              alt="purple star"
            />
          </motion.div>

          <div className="-space-y-2 font-sans">
            <motion.p
              variants={fadeIn("up")}
              initial="initial"
              whileInView="animate"
              custom={0.3}
              viewport={{ once: true }}
              className=" text-[32px] font-bold text-white"
            >
              Prizes and
            </motion.p>
            <motion.p
              variants={fadeIn("up")}
              initial="initial"
              whileInView="animate"
              custom={0.5}
              viewport={{ once: true }}
              className=" text-[32px] font-bold text-pinnk"
            >
              Rewards
            </motion.p>
          </div>

          <motion.p
            variants={fadeIn("up")}
            custom={0.7}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white text-[14px] font-normal"
          >
            Highlight of the prizes or rewards for winners <br /> and for
            participants.
          </motion.p>
        </div>
      </div>

      <div className="w-full flex mt-5 relative z-30">
        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          whileInView="animate"
          custom={0.3}
          viewport={{ once: true }}
          className="w-1/2 relative pr-14 -mt-16"
        >
          <div className="absolute z-10 left-32 top-5">{PurpleFlare}</div>
          <div className="relative z-20">
            <Image src={cup} alt="cup" width={1000} height={1000} />
          </div>

          <motion.div
            className="absolute right-0 top-[25%]"
            variants={blink}
            initial="initail"
            animate="animate"
            custom={1.5}
          >
            <Image
              priority
              width={25}
              height={25}
              src={whiteStar}
              alt="white star"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-[30%]"
            variants={blink}
            initial="initail"
            animate="animate"
            custom={1}
          >
            <Image
              priority
              width={20}
              height={20}
              src={whiteStar}
              alt="white star"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          className="w-1/2 flex gap-x-8 pt-48 relative"
        >
          {/* Second Position   */}
          <motion.div variants={fadeIn("up")} custom={0.3}>
            <motion.div
              variants={bounce}
              custom={2}
              className="border-2 relative rounded-md border-pinnk bg-pinnk bg-opacity-20 w-[150px] h-[200px] pt-20"
            >
              <div className="absolute w-32 h-32 left-1/2 -translate-x-1/2 -top-16">
                <Image
                  src={silver_medal}
                  alt="silver_medal"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-2xl">2nd</p>
                <p className="text-white font-medium">Runner</p>
              </div>
              <p className="text-pinnk font-bold text-xl text-center">
                N300,000
              </p>
            </motion.div>
          </motion.div>

          {/* First Position  */}
          <motion.div variants={fadeIn("up")} custom={0.5}>
            <motion.div
              variants={bounce}
              custom={2.5}
              className="border-2 relative rounded-md border-purp mt-8 bg-purp bg-opacity-20 w-[150px] h-[180px] pt-16"
            >
              <div className="absolute w-52 h-52 left-1/2 -translate-x-1/2 -top-40">
                <Image
                  src={gold_medal}
                  alt="gold_medal"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-2xl">1st</p>
                <p className="text-white font-medium">Runner</p>
              </div>
              <p className="text-purp mt-3 font-bold text-xl text-center">
                N400,000
              </p>
            </motion.div>
          </motion.div>

          {/* Third position  */}
          <motion.div variants={fadeIn("up")} custom={0.5}>
            <motion.div
              variants={bounce}
              custom={1.5}
              className="border-2 relative rounded-md border-pinnk bg-pinnk bg-opacity-20 w-[150px] h-[200px] pt-20"
            >
              <div className="absolute w-32 h-32 left-1/2 -translate-x-1/2 -top-16">
                <Image
                  src={bronze_medal}
                  alt="bronze_medal"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-white text-2xl">3nd</p>
                <p className="text-white font-medium">Runner</p>
              </div>
              <p className="text-pinnk font-bold text-xl text-center">
                N150,000
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-[30%] right-[5%]"
            variants={blink}
            initial="initail"
            animate="animate"
            custom={1.9}
          >
            <Image
              priority
              width={25}
              height={25}
              src={whiteStar}
              alt="white star"
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 right-[25%] opacity-50"
            variants={blink}
            initial="initail"
            animate="animate"
            custom={1.2}
          >
            <Image
              priority
              width={25}
              height={25}
              src={whiteStar}
              alt="white star"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          custom={0.3}
          initial="initial"
          animate="animte"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute z-10 -right-10 bottom-20"
        >
          {PurpleFlare}
        </motion.div>
      </div>
    </div>
  );
};

export default Section7;
