import BtnDesign from "../general/BtnDesign";
import { PurpleFlareL } from "../general/Flares";
import purplestar from "public/purplestart.png";
import whiteStar from "public/whiteStar.png";
import { motion } from "framer-motion";
import { blink, slideIn } from "@/utils/variants";
import Image from "next/image";
import { useRef } from "react";
import { makeRequest } from "@/utils/requestMethod";
import { API_URL } from "@/utils/urls";

const Form = () => {
  const formDataRef = useRef<HTMLFormElement>(null);

  const fromHandle = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const first_name = formDataRef.current?.["firstName"].value;
    const mail = formDataRef.current?.["mail"].value;
    const message = formDataRef.current?.["message"].value;

    const data = { first_name, mail, message };
    try {
      const res = await makeRequest.post(API_URL.CONTACT, data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-1/2 relative">
      <motion.div
        variants={blink}
        initial="initial"
        animate="animate"
        custom={0.9}
        className="absolute -top-[10%] right-10 opacity-50"
      >
        <Image width={25} height={25} src={whiteStar} alt="star" />
      </motion.div>

      <motion.div
        variants={blink}
        initial="initial"
        animate="animate"
        custom={0.9}
        className="absolute bottom-[10%] -right-[10%]"
      >
        <Image width={25} height={25} src={whiteStar} alt="star" />
      </motion.div>

      <motion.div
        variants={blink}
        initial="initial"
        animate="animate"
        custom={1.5}
        className="absolute bottom-[20%] left-[1%]"
      >
        <Image width={25} height={25} src={purplestar} alt="star" />
      </motion.div>

      <div className="absolute bottom-[40%] right-10">{PurpleFlareL}</div>
      <motion.form
        ref={formDataRef}
        onSubmit={fromHandle}
        variants={slideIn("right", "ease")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.3}
        className="bg-glass rounded-xl text-white shadow-md px-16 py-10 flex items-center justify-center flex-col space-y-10"
      >
        <div className="text-left w-full font-sans">
          <span className="text-pinnk text-[20px] font-semibold">
            Questions or need assistance?
          </span>{" "}
          <br />
          <span className=" text-pinnk text-[20px] font-semibold">
            Let us know about it!
          </span>
        </div>

        <input
          className="border rounded border-white bg-glass px-6 py-3 w-full focus:outline-none"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
        />

        <input
          className=" w-full border rounded border-white bg-glass px-6 py-3 focus:outline-none"
          type="email"
          placeholder="Mail"
          name="mail"
          required
        />

        <textarea
          className=" w-full resize-none border rounded border-white bg-glass shadow-myshadow px-6 py-3 focus:outline-none"
          placeholder="Message"
          name="message"
          id=""
          cols={20}
          rows={5}
          required
        ></textarea>

        <div className=" mt-5 flex justify-center">
          <BtnDesign register={false} text="Submit" />
        </div>
      </motion.form>
    </div>
  );
};

export default Form;
