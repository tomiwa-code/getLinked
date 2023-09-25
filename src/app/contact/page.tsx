"use client";
import Form from "@/components/contact/Form";
import { PurpleFlareL } from "@/components/general/Flares";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@/components/general/Icons";
import Image from "next/image";
import pinkStar from "public/pinkStar.png";
import { motion } from "framer-motion";
import { blink, slideIn } from "@/utils/variants";

const ContactPage = () => {
  return (
    <div className="w-full flex px-40 pt-16 pb-24 items-center">
      {/* get in touch */}
      <motion.div
        variants={slideIn("left", "ease")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.3}
        className="w-1/2 relative"
      >
        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.9}
          className="absolute -top-[20%] left-10"
        >
          <Image width={20} height={20} src={pinkStar} alt="pinkStar" />
        </motion.div>

        <div className="absolute z-10 -left-[20%]">{PurpleFlareL}</div>

        <div className="relative z-20 ">
          <span className=" text-pinnk text-[32px] font-semibold font-sans">
            Get in touch
          </span>

          <div className="text-white text-[16px] font-normal space-y-5 mt-5">
            <p className="">
              Contact <br /> Information
            </p>

            <p>
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>

            <p className="">Call Us : 07067981819</p>

            <p className="">
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>

            <div className="space-y-3">
              <p className="">Share on</p>
              <div className=" flex w-[120px] justify-between items-center">
                {Instagram}

                {Twitter}

                {Facebook}

                {LinkedIn}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* form */}
      <Form />
    </div>
  );
};

export default ContactPage;
