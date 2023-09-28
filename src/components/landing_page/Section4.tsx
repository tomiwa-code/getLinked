"use client";
import purpleStar from "public/purpleStar.png";
import manWoman from "public/manWoman.png";
import whiteStar from "public/whiteStar.png";
import BtnDesign from "../general/BtnDesign";
import Image from "next/image";
import { motion } from "framer-motion";
import { blink, fadeIn, slideIn, staggerParent } from "@/utils/variants";
import { PurpleFlare } from "../general/Flares";
import { Hbg } from "../general/Icons";

const Section4 = () => {
  return (
    <div className=" border-b border-gray-600 border-opacity-50">
      <div className=" mx-16">
        <div className="flex w-full pt-14 pb-24 items-center">
          {/* image */}
          <div className="w-1/2 relative px-10">
            <motion.div
              variants={blink}
              initial="initial"
              animate="animate"
              custom={1.6}
              className="absolute -top-10 left-44"
            >
              <Image
                priority
                width={25}
                height={25}
                src={purpleStar}
                alt="star"
              />
            </motion.div>

            <motion.div
              variants={fadeIn("up")}
              initial="initial"
              whileInView="animate"
              viewport={{ amount: 0.3, once: true }}
              custom={0.2}
              className="relative"
            >
              <Image
                priority
                className=" pt-10 z-20 relative"
                width={1000}
                height={1000}
                src={manWoman}
                alt="man and woman"
              />
              <div className="absolute top-5 z-10 w-[100px] h-[100px] left-[90px]">
                <Hbg size="100px" />
              </div>
            </motion.div>

            <motion.div
              variants={blink}
              initial="initial"
              animate="animate"
              custom={1.8}
              className="absolute top-72 left-[50%] opacity-50"
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
              variants={blink}
              initial="initial"
              animate="animate"
              custom={0.8}
              className="absolute right-16"
            >
              <Image
                priority
                width={20}
                height={20}
                src={whiteStar}
                alt="white star"
              />
            </motion.div>

            <div className="absolute bottom-40 left-20">{PurpleFlare}</div>
          </div>

          {/* writeup */}
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.2, once: true }}
            className="w-1/2 relative"
          >
            <div className=" text-[32px] font-bold text-white -space-y-2 font-sans">
              <motion.p variants={fadeIn("up")}>Judging Criteria</motion.p>
              <motion.p
                variants={fadeIn("up")}
                custom={0.2}
                className=" text-pinnk"
              >
                Key attributes{" "}
              </motion.p>
            </div>
            <motion.div
              variants={slideIn("right", "spring")}
              custom={0.9}
              className=" text-white text-[14px] font-normal leading-[173.5%] mt-5"
            >
              <span className=" text-[#FF26B9] text-[16px] font-bold">
                Innovation and Creativity
              </span>
              : Evaluate the uniqueness and creativity of the <br />
              solution. Consider whether it addresses a real-world problem in a
              novel <br />
              way or introduces innovative features.
            </motion.div>

            <motion.div
              variants={slideIn("right", "spring")}
              custom={1.2}
              className=" text-white text-[14px] font-normal leading-[173.5%] mt-5"
            >
              <span className=" text-[#FF26B9] text-[16px] font-bold">
                Functionality
              </span>
              : Assess how well the solution works. Does it perform its <br />
              intended functions effectively and without major issues? Judges
              would <br />
              consider the completeness and robustness of the solution.
            </motion.div>

            <motion.div
              variants={slideIn("right", "spring")}
              custom={1.4}
              className=" text-white text-[14px] font-normal leading-[173.5%] mt-5"
            >
              <span className=" text-[#FF26B9] text-[16px] font-bold">
                Impact and Relevance
              </span>
              : Determine the potential impact of the solution <br />
              in the real world. Does it address a significant problem, and is
              it relevant <br />
              to the target audience? Judges would assess the potential social,{" "}
              <br />
              economic, or environmental benefits.
            </motion.div>

            <motion.div
              variants={slideIn("right", "spring")}
              custom={1.6}
              className=" text-white text-[14px] font-normal leading-[173.5%] mt-5"
            >
              <span className=" text-[#FF26B9] text-[16px] font-bold">
                Technical Complexity
              </span>
              : Evaluate the technical sophistication of the solution. <br />
              Judges would consider the complexity of the code, the use of
              advanced <br />
              technologies or algorithms, and the scalability of the solution.
            </motion.div>

            <motion.div
              variants={slideIn("right", "spring")}
              custom={1.8}
              className=" text-white text-[14px] font-normal leading-[173.5%] mt-5"
            >
              <span className=" text-[#FF26B9] text-[16px] font-bold">
                Adherence to Hackathon Rules
              </span>
              : Judges will Ensure that the team adhered <br />
              to the rules and guidelines of the hackathon, including deadlines,
              use of <br />
              specific technologies or APIs, and any other competition-specific
              requirements.
            </motion.div>

            <motion.div variants={fadeIn("up")} custom={2} className=" mt-10">
              <BtnDesign text="Read More" register={false} />
            </motion.div>
            <div className="absolute -bottom-5 right-40">{PurpleFlare}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
