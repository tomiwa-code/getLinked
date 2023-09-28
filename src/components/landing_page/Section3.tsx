"use client";
import grayStar from "public/whiteStar.png";
import lady from "public/lady.png";
import { PurpleFlare } from "../general/Flares";
import Image from "next/image";
import { motion } from "framer-motion";
import { blink, fadeIn, staggerParent } from "@/utils/variants";
import { Hbg } from "../general/Icons";

const Section3 = () => {
  return (
    <div className="relative border-b border-gray-700 border-opacity-50">
      <motion.div
        variants={fadeIn("")}
        custom={0.3}
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
        initial="initial"
        className="absolute left-48 top-14"
      >
        {PurpleFlare}
      </motion.div>

      <div className="flex w-full">
        {/* writeup */}
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          className="mt-56 pl-40 w-1/2 relative"
        >
          <div className="flex relative ">
            <div className=" text-[32px] font-bold text-white -space-y-2 font-sans">
              <motion.p variants={fadeIn("up")} custom={0.3}>
                Rules and
              </motion.p>
              <motion.p
                variants={fadeIn("up")}
                custom={0.5}
                className=" text-pinnk"
              >
                Guidelines
              </motion.p>
            </div>
            <motion.div
              variants={blink}
              initial="initial"
              animate="animate"
              custom={0.9}
              className="absolute -top-10 left-52 opacity-50"
            >
              <Image
                priority
                className=""
                width={26}
                height={32}
                src={grayStar}
                alt="graystar"
              />
            </motion.div>
          </div>
          <motion.div variants={fadeIn("up")} custom={0.7} className="mt-5">
            <p className="text-[14px] font-normal text-white leading-loose">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as <br />
              clear as day: to shape the future. Whether you&apos;re a coding genius,
              a <br />
              design maverick, or a concept wizard, you&apos;ll have the chance to
              transform <br />
              your ideas into reality. Solving real-world problems, pushing the
              boundaries <br />
              of technology, and creating solutions that can change the world,{" "}
              <br />
              that&apos;s what we&apos;re all about!
            </p>
          </motion.div>
          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={1.5}
            className="absolute right-10"
          >
            <Image priority width={26} height={32} src={grayStar} alt="strat" />
          </motion.div>
        </motion.div>

        {/* Image
        priority */}
        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          whileInView="animate"
          custom={0.2}
          viewport={{ amount: 0.2, once: true }}
          className="w-1/2 pr-20 relative"
        >
          <Image priority src={lady} alt="lady" className="relative z-20" />
          <div className="absolute top-28 z-10 w-[100px] h-[100px] right-60">
            <Hbg size="125px" />
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("")}
        custom={0.3}
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
        initial="initial"
        className="absolute right-32 bottom-28"
      >
        {PurpleFlare}
      </motion.div>
    </div>
  );
};

export default Section3;
