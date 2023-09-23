"use client";
import Image from "next/image";
import manThinking from "public/manThinking.png";
import purplestar from "public/purplestart.png";
import pinkStar from "public/pinkStar.png";
import whiteStar from "public/whiteStar.png";
import { motion } from "framer-motion";
import { blink, fadeIn, slideIn, staggerParent } from "@/utils/variants";
import { QLogo } from "../general/Icons";

const Section5 = () => {
  return (
    <div className="w-full flex justify-between pt-28 pb-20 px-40 border-b border-gray-700 border-opacity-50">
      {/* writeups */}
      <div className="w-1/2 relative">
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.5}
          className="absolute -top-10 -left-10"
        >
          <Image
            priority
            width={25}
            height={25}
            src={purplestar}
            alt="purple star"
          />
        </motion.div>

        <div className="w-[253px] h-[86px] text-white text-[32px] font-bold -space-y-2 font-sans">
          <motion.p
            variants={fadeIn("up")}
            custom={0.3}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Frequently
          </motion.p>
          <motion.p
            variants={fadeIn("up")}
            custom={0.5}
            whileInView="animate"
            initial="initial"
            viewport={{ once: true }}
          >
            Ask <span className=" text-pinnk">Question</span>
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("up")}
          custom={0.7}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className=" mt-5 w-[342px] h-[55px] text-white text-[14px] font-normal"
        >
          We got answers to the questions that you might <br />
          want to ask about getlinked Hackathon 1.0
        </motion.div>

        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            variants={slideIn("left", "spring")}
            custom={0.2}
            className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-10 flex justify-between items-center"
          >
            Can I work on a project I started before the hackathon?{" "}
            <span className=" text-[20px] font-normal text-pinnk ">+</span>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring")}
            custom={0.4}
            className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center"
          >
            What happens if I need help during the hackathon?{" "}
            <span className=" text-[20px] font-normal text-pinnk ">+</span>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring")}
            custom={0.6}
            className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center"
          >
            What happens if I don't have an idea for a project?
            <span className=" text-[20px] font-normal text-pinnk ">+</span>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring")}
            custom={0.8}
            className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center"
          >
            Can I join a team or do I have to come with one?
            <span className=" text-[20px] font-normal text-pinnk ">+</span>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring")}
            custom={1}
            className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center"
          >
            What happens after the hackathon ends
            <span className=" text-[20px] font-normal text-pinnk ">+</span>
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring")}
            custom={1.2}
            className=" w-[427px] text-[14px] font-normal text-white border-b border-pinnk pb-2 mt-5 flex justify-between items-center"
          >
            Can I work on a project I started before the hackathon?
            <span className=" text-[20px] font-normal text-pinnk ">+</span>
          </motion.div>
        </motion.div>
      </div>

      {/* image */}
      <div className="w-1/2 relative">
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.8}
          className="absolute -top-5 left-[50%]"
        >
          <Image
            priority
            width={27}
            height={27}
            src={pinkStar}
            alt="pink star"
          />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.9}
          className="absolute top-[20%] left-[15%]"
        >
          <Image
            priority
            width={27}
            height={27}
            src={pinkStar}
            alt="pink star"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          custom={0.5}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="absolute left-28"
        >
          <div className="absolute opacity-70">
            <QLogo size="40" />
          </div>
          <div className="absolute -top-16 left-20">
            <QLogo size="70" />
          </div>
          <div className="absolute left-52 opacity-80">
            <QLogo size="40" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          custom={0.5}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Image
            priority
            width={741}
            height={741}
            src={manThinking}
            alt="man thinking"
          />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={1.8}
          className="absolute bottom-[45%] opacity-50"
        >
          <Image
            priority
            width={27}
            height={27}
            src={whiteStar}
            alt="white star"
          />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.3}
          className="absolute bottom-0 left-[70%]"
        >
          <Image
            priority
            width={27}
            height={27}
            src={whiteStar}
            alt="white star"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section5;
