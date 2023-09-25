"use client";
import Form from "@/components/register/Form";
import Image from "next/image";
import designer from "public/designer.png";
import { motion } from "framer-motion";
import { blink, slideIn } from "@/utils/variants";
import purplestar from "public/purplestart.png";
import whiteStar from "public/whiteStar.png";

const Register = () => {
  return (
    <div className="w-full min-h-[700px] pt-10 pb-24 flex px-20 items-center">
      {/* Image  */}
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
          custom={1.5}
          className="absolute top-[3%] left-28"
        >
          <Image width={25} height={25} src={purplestar} alt="star" />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={1.2}
          className="absolute bottom-[10%] right-10"
        >
          <Image width={30} height={30} src={purplestar} alt="star" />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.7}
          className="absolute bottom-[5%] left-10 opacity-50"
        >
          <Image width={30} height={30} src={whiteStar} alt="star" />
        </motion.div>

        <Image
          src={designer}
          priority
          alt="designer"
          width={1000}
          height={1000}
        />
      </motion.div>

      {/* Form  */}
      <Form />
    </div>
  );
};

export default Register;
