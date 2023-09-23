"use client";
import chain from "public/chain.png";
import man from "public/man.png";
import globe from "public/globe.png";
import flare from "public/flare.png";
import whiteStar from "public/whiteStar.png";
import creative from "public/creative.png";
import { HrLine } from "../general/Icons";
import { BlueFlare, PurpleFlare } from "../general/Flares";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { blink, fadeIn, globeRotate, timer } from "../../utils/variants";
import BtnDesign from "../general/BtnDesign";
import Image from "next/image";

const Section1 = () => {
  const [typeEffect] = useTypewriter({
    words: ["HR Innovation"],
    typeSpeed: 100,
    loop: 5,
  });

  return (
    <div className="pl-24 border-b w-full border-gray-600 border-opacity-50 flex min-h-[500px]">
      {/* write-ups */}
      <div className="pt-[130px] relative w-1/2">
        <motion.div
          variants={fadeIn("")}
          custom={0.3}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-32"
        >
          {PurpleFlare}
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.4}
          className="absolute top-14 left-16"
        >
          <Image
            src={whiteStar}
            alt="whiteStar"
            width={20}
            height={20}
            priority
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.3}
          className="relative"
        >
          <Image
            className="absolute -top-4 right-48"
            src={creative}
            alt="creative"
            width={35}
            height={35}
            priority
          />
          <p className="text-white text-[70px] font-bold font-sans">
            getlinked Tech
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.5}
          className="relative"
        >
          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={1.5}
            className="absolute right-0 opacity-50 -top-28"
          >
            <Image
              src={whiteStar}
              alt="whiteStar"
              width={20}
              height={20}
              priority
            />
          </motion.div>

          <p className="-mt-5 text-white text-[70px] font-bold font-sans">
            Hackathon <span className=" text-pinnk">1.0</span>
          </p>
          <Image
            className="absolute right-28 top-8"
            src={chain}
            alt="chain"
            width={60}
            height={60}
            priority
          />
          <Image
            className="absolute right-16 top-12"
            src={flare}
            alt="flare"
            width={40}
            height={40}
            priority
          />
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.6}
          className=" text-white text-[18px] font-normal "
        >
          Participate in getlinked tech Hackathon 2023 stand <br />a chance to
          win a Big prize
        </motion.div>

        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          custom={0.8}
          className="mt-10 "
        >
          <BtnDesign text="Register" />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={1}
          className="absolute opacity-50 bottom-44 right-44"
        >
          <Image
            src={whiteStar}
            alt="whiteStar"
            width={20}
            height={20}
            priority
          />
        </motion.div>

        <motion.div
          variants={timer}
          initial="initial"
          animate="animate"
          className="relative flex space-x-5 text-white mt-14"
        >
          <div className=" text-[60px] font-normal font-uniOne">
            00<span className=" text-[14px] mr-2">H</span>
          </div>
          <div className=" text-[60px] font-normal font-uniOne">
            00<span className=" text-[14px] mr-2">M</span>
          </div>
          <div className=" text-[60px] font-normal font-uniOne">
            00<span className=" text-[14px]">S</span>
          </div>
        </motion.div>
      </div>

      {/* image */}
      <div className="relative w-1/2 mt-6">
        <motion.div
          variants={fadeIn("")}
          initial="initial"
          animate="animate"
          custom={0.5}
          className="absolute right-14"
        >
          <p className=" text-white text-[30px] font-bold italic">
            Igniting a Revolution in <span>{typeEffect}</span>
          </p>
          <p className="absolute w-[200px] right-0">{HrLine}</p>
        </motion.div>

        <motion.div
          variants={fadeIn("right")}
          initial="initial"
          animate="animate"
          custom={1.5}
          className="relative mt-20"
        >
          <div className="absolute z-10 left-36 top-16">{BlueFlare}</div>
          <Image
            className="max-w-full saturate-0"
            src={man}
            alt="man"
            priority
          />
          <motion.div
            variants={globeRotate}
            animate="animate"
            className="absolute top-0 left-0 z-20"
          >
            <Image className="max-w-[80%]" src={globe} alt="globe" priority />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1;
