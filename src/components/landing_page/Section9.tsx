"use client";
import whiteStar from "public/whiteStar.png";
import purpleStar from "public/purpleStar.png";
import manlock from "public/manLock.png";
import BtnDesign from "../general/BtnDesign";
import Image from "next/image";
import { motion } from "framer-motion";
import { PurpleFlare } from "../general/Flares";
import { blink, fadeIn } from "@/utils/variants";
import { Padlock } from "../general/Icons";

const Section9 = () => {
  return (
    <div className="pb-20 border-b border-gray-700 border-opacity-50 relative px-40 w-full py-20">
      <div className="absolute bottom-[20%] left-0">{PurpleFlare}</div>

      <div className="flex items-center relative">
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={2}
          className="absolute -left-20 bottom-[20%]"
        >
          <Image src={purpleStar} width={30} height={30} alt="star" />
        </motion.div>

        {/* writeup */}
        <div className="w-1/2 relative">
          <div className="-space-y-2 text-[32px] font-bold text-white font-sans relative">
            <motion.div
              variants={blink}
              initial="initial"
              animate="animate"
              custom={2}
              className="absolute opacity-50 right-[40%]"
            >
              <Image src={whiteStar} width={25} height={25} alt="star" />
            </motion.div>

            <motion.p
              variants={fadeIn("up")}
              custom={0.3}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              Privacy Policy and
            </motion.p>
            <motion.p
              variants={fadeIn("up")}
              custom={0.5}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-pinnk"
            >
              Terms
            </motion.p>
          </div>
          <motion.p
            variants={fadeIn("up")}
            custom={0.7}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" text-gray-300 opacity-75 text-[14px] font-normal mt-5"
          >
            Last updated on September 12, 2023
          </motion.p>

          <motion.p
            variants={fadeIn("up")}
            custom={0.9}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white font-normal text-[15px] mt-8"
          >
            Below are our privacy & policy, which outline a lot of goodies.{" "}
            <br /> it&apos;s our aim to always take of our participant
          </motion.p>

          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={1.2}
            className="absolute right-[5%] top-[15%]"
          >
            <Image src={purpleStar} width={30} height={30} alt="star" />
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            initial="initial"
            whileInView="animate"
            custom={1.1}
            viewport={{ once: true }}
            className="border border-pinnk rounded-md mt-10 py-14 px-16 bg-glass w-[500px]"
          >
            <p className="text-[14px] font-normal text-white leading-loose">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <div className="mt-8">
              <p className=" text-pinnk text-[16px] font-bold">
                Licensing Policy
              </p>
              <p className=" text-white text-[14px] font-bold">
                Here are terms of our Standard License:
              </p>
            </div>

            <div className="mt-5 space-y-5">
              <div className="flex justify-between gap-x-5 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path
                    d="M5 8L7 10.5L13.5 6"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                <div className="text-white font-normal text-[14px]">
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </div>
              </div>

              <div className="flex justify-between gap-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                  <path
                    d="M5 8L7 10.5L13.5 6"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>

                <div className=" text-white font-normal text-[14px]">
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </div>
              </div>

              {/* btn */}
              <div className=" flex justify-center mt-10">
                <BtnDesign text="Read More" register={false} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* image */}
        <div className="w-1/2 pl-10 relative ">
          {/* Stars  */}
          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={2}
            className="absolute left-[20%] bottom-20"
          >
            <Image src={purpleStar} width={20} height={20} alt="star" />
          </motion.div>

          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={2}
            className="absolute top-[25%] right-[30%]"
          >
            <Image src={whiteStar} width={20} height={20} alt="star" />
          </motion.div>

          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={2}
            className="absolute left-[10%] bottom-0"
          >
            <Image src={whiteStar} width={20} height={20} alt="star" />
          </motion.div>

          <motion.div
            variants={blink}
            initial="initial"
            animate="animate"
            custom={2}
            className="absolute right-[10%] opacity-50 -bottom-[10%]"
          >
            <Image src={whiteStar} width={20} height={20} alt="star" />
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.3}
          >
            <div className="relative w-1/2">{Padlock}</div>
            <div className="absolute w-[120%] -bottom-[25%] -left-28">
              <Image
                src={manlock}
                width={1000}
                height={1000}
                priority
                alt="man lock"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
