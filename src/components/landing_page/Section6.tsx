"use client";
import { fadeIn, slideIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { Line } from "../general/Icons";

const Section6 = () => {
  return (
    <div className="w-full text-white py-20 border-b border-gray-700 border-opacity-50 px-40">
      {/* Title  */}
      <div className="space-y-4 w-full text-center">
        <motion.p
          variants={fadeIn("up")}
          custom={0.3}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-sans font-bold text-[32px]"
        >
          Timeline
        </motion.p>
        <motion.p
          variants={fadeIn("up")}
          custom={0.5}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-base font-normal text-[14px]"
        >
          Here is the breakdown of the time we anticipate <br /> using for the
          upcoming event.
        </motion.p>
      </div>

      {/* First  */}
      <div className="flex items-center justify-center w-full mt-44">
        <motion.div
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.45}
          className="space-y-2 text-white text-right w-[40%]"
        >
          <p className="font-bold text-pinnk text-2xl">
            Hackathon Announcement
          </p>
          <p className="text-sm">
            The getlinked tech hackathon 1.0 is formally announced <br /> to the
            general public and teams begin to get ready to register
          </p>
        </motion.div>

        <div className="relative w-[20%] flex justify-center">
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.5}
            className="absolute -top-[240%] left-1/2 -translate-x-1/2"
          >
            {Line}
          </motion.div>
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] w-12 h-12 rounded-full flex items-center justify-center"
          >
            <p className="text-2xl font-bold">1</p>
          </motion.div>
        </div>

        <motion.p
          variants={slideIn("right", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.5}
          className="font-bold text-pinnk text-2xl w-[40%]"
        >
          November 18, 2023
        </motion.p>
      </div>

      {/* Second  */}
      <div className="flex items-center justify-center w-full mt-24">
        <motion.p
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.45}
          className="font-bold text-pinnk text-2xl w-[40%] text-right"
        >
          November 18, 2023
        </motion.p>

        <div className="relative w-[20%] flex justify-center">
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="absolute -top-[240%] left-1/2 -translate-x-1/2"
          >
            {Line}
          </motion.div>
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3 }}
            custom={0.3}
            className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] w-12 h-12 rounded-full flex items-center justify-center"
          >
            <p className="text-2xl font-bold">2</p>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          custom={0.5}
          className="space-y-2 text-white text-left w-[40%]"
        >
          <p className="font-bold text-pinnk text-2xl">
            Hackathon Announcement
          </p>
          <p className="text-sm">
            The getlinked tech hackathon 1.0 is formally announced <br /> to the
            general public and teams begin to get ready to register
          </p>
        </motion.div>
      </div>

      {/* Third  */}
      <div className="flex items-center justify-center w-full mt-24">
        <motion.div
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          custom={0.5}
          className="space-y-2 text-white text-right w-[40%]"
        >
          <p className="font-bold text-pinnk text-2xl">
            Teams Registration ends
          </p>
          <p className="text-sm">
            Interested Participants are no longer Allowed to <br />
            register
          </p>
        </motion.div>

        <div className="relative w-[20%] flex justify-center">
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3 }}
            custom={0.3}
            className="absolute -top-[240%] left-1/2 -translate-x-1/2"
          >
            {Line}
          </motion.div>
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3 }}
            custom={0.3}
            className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] w-12 h-12 rounded-full flex items-center justify-center"
          >
            <p className="text-2xl font-bold">3</p>
          </motion.div>
        </div>

        <motion.p
          variants={slideIn("right", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3 }}
          custom={0.5}
          className="font-bold text-pinnk text-2xl w-[40%]"
        >
          November 18, 2023
        </motion.p>
      </div>

      {/* Fourth  */}
      <div className="flex items-center justify-center w-full mt-24">
        <motion.p
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.45}
          className="font-bold text-pinnk text-2xl w-[40%] text-right"
        >
          November 18, 2023
        </motion.p>

        <div className="relative w-[20%] flex justify-center">
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="absolute -top-[240%] left-1/2 -translate-x-1/2"
          >
            {Line}
          </motion.div>
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] w-12 h-12 rounded-full flex items-center justify-center"
          >
            <p className="text-2xl font-bold">4</p>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.5}
          className="space-y-2 text-white text-left w-[40%]"
        >
          <p className="font-bold text-pinnk text-2xl">
            Announcement of the accepted teams and ideas
          </p>
          <p className="text-sm">
            All teams whom idea has been accepted into getlinked tech <br />
            hackathon 1.0 2023 are formally announced
          </p>
        </motion.div>
      </div>

      {/* Fifth  */}
      <div className="flex items-center justify-center w-full mt-24">
        <motion.div
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.45}
          className="space-y-2 text-white text-right w-[40%]"
        >
          <p className="font-bold text-pinnk text-2xl">
            Getlinked Hackathon 1.0 Offically Begins
          </p>
          <p className="text-sm">
            Accepted teams can now proceed to build their <br />
            ground breaking skill driven solutions
          </p>
        </motion.div>

        <div className="relative w-[20%] flex justify-center">
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="absolute -top-[240%] left-1/2 -translate-x-1/2"
          >
            {Line}
          </motion.div>
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] w-12 h-12 rounded-full flex items-center justify-center"
          >
            <p className="text-2xl font-bold">5</p>
          </motion.div>
        </div>

        <motion.p
          variants={slideIn("right", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.5}
          className="font-bold text-pinnk text-2xl w-[40%]"
        >
          November 18, 2023
        </motion.p>
      </div>

      {/* Sixth  */}
      <div className="flex items-center justify-center w-full mt-24">
        <motion.p
          variants={slideIn("left", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.45}
          className="font-bold text-pinnk text-2xl w-[40%] text-right"
        >
          November 18, 2023
        </motion.p>

        <div className="relative w-[20%] flex justify-center">
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="absolute -top-[240%] left-1/2 -translate-x-1/2"
          >
            {Line}
          </motion.div>
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            viewport={{ amount: 0.3, once: true }}
            custom={0.3}
            className="bg-gradient-to-r from-[#FE34B9] to-[#903AFF] w-12 h-12 rounded-full flex items-center justify-center"
          >
            <p className="text-2xl font-bold">6</p>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "spring")}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.3, once: true }}
          custom={0.5}
          className="space-y-2 text-white text-left w-[40%]"
        >
          <p className="font-bold text-pinnk text-2xl">Demo Day</p>
          <p className="text-sm">
            Teams get the opportunity to pitch their projects to judges. <br />
            The winner of the hackathon will also be announced on this day
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Section6;
