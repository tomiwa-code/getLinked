"use client";
import bulb from "public/bulb.png";
import star from "public/purplestart.png";
import pinkStar from "public/pinkStar.png";
import arrow from "public/arrow.png";
import { motion } from "framer-motion";
import { blink, fadeIn, slideIn, staggerParent } from "@/utils/variants";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const Section2 = () => {
  const tagNameRef = useRef<null | HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const tagName = searchParams.get("tagname") === "overview";

  useEffect(() => {
    if (tagName) {
      tagNameRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [tagName]);

  return (
    <div
      ref={tagNameRef}
      className="flex w-full py-20 border-b border-gray-600 border-opacity-50 justify-evenly"
    >
      {/* image */}
      <div className="relative flex w-1/2 pl-40">
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.8}
          className="absolute left-40"
        >
          <Image
            className=""
            width={30}
            height={30}
            src={pinkStar}
            alt="pinkStar"
            priority
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.5, once: true }}
          className=" w-[490px] h-[477px] relative"
        >
          <Image src={bulb} alt="bulb" priority />
          <p className="absolute font-bold text-center text-white capitalize -translate-x-1/2 top-1/2 left-1/2">
            the big <br />
            ideal
          </p>
        </motion.div>
        <motion.div
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="absolute bottom-0 right-0"
        >
          <Image width={50} height={50} src={arrow} priority alt="arrow" />
        </motion.div>
      </div>

      {/* writeup */}
      <motion.div
        variants={staggerParent}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.3, once: true }}
        className="w-1/2 pt-32 pl-16 space-y-5"
      >
        <div className="flex ">
          <div className="-space-y-2 font-sans">
            <motion.div
              variants={fadeIn("up")}
              custom={0.3}
              className=" text-[32px] font-bold text-white"
            >
              Introduction to getlinked
            </motion.div>
            <motion.div
              variants={fadeIn("up")}
              custom={0.5}
              className=" text-[32px] font-bold text-pinnk"
            >
              tech Hackathon 1.0
            </motion.div>
          </div>

          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={1.7}
            className="flex items-center ml-20 "
          >
            <Image width={30} height={32} src={star} alt="start" priority />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("up")}
          custom={0.7}
          className=" text-white text-[14px] font-normal w-[535px] leading-loose"
        >
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as <br />
          clear as day: to shape the future. Whether you're a coding genius, a{" "}
          <br />
          design maverick, or a concept wizard, you'll have the chance to
          transform <br />
          your ideas into reality. Solving real-world problems, pushing the
          boundaries <br />
          of technology, and creating solutions that can change the world,{" "}
          <br />
          that's what we're all about!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section2;
