"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { PurpleFlareL } from "../general/Flares";
import { blink, slideIn } from "@/utils/variants";
import { ArrowDown, Check } from "../general/Icons";
import female from "public/female.png";
import boy from "public/boy.png";
import Image from "next/image";
import { useState } from "react";
import { makeRequest } from "@/utils/requestMethod";
import { API_URL } from "@/utils/urls";
import whiteStar from "public/whiteStar.png";
import Success from "./Success";

const Form = () => {
  const [showCat, setShowCat] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [catVal, setCatVal] = useState("Select your category");
  const [sizeVal, setSizeVal] = useState("Select");
  const [isChecked, setIsChecked] = useState(false);
  const [successRes, setSuccessRes] = useState(false);
  const formDataRef = useRef<HTMLFormElement>(null);

  const fromHandle = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const team_name = formDataRef.current?.["teamName"].value;
    const phone_number = formDataRef.current?.["phone"].value;
    const email = formDataRef.current?.["email"].value;
    const project_topic = formDataRef.current?.["project_topic"].value;
    const category = catVal;
    const group_size = sizeVal;

    const data: {
      team_name: string;
      phone_number: string;
      email: string;
      project_topic: string;
      category: string;
      group_size: string;
    } = {
      team_name,
      phone_number,
      email,
      project_topic,
      category,
      group_size,
    };
    try {
      const res = await makeRequest.post(API_URL.REGISTER, data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowSize = () => {
    setShowSize((prev) => !prev);
    if (showCat) {
      setShowCat(false);
    }
  };

  const handleShowCat = () => {
    setShowCat((prev) => !prev);
    if (showSize) {
      setShowSize(false);
    }
  };

  const handleCatValue = (param: string) => {
    setCatVal(param);
  };

  const handleSizeValue = (param: string) => {
    setSizeVal(param);
  };

  return (
    <>
      {successRes && <Success />}
      <div className="w-1/2 relative">
        {/* Overlay success  */}

        <div className="absolute bottom-[40%] right-10">{PurpleFlareL}</div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={0.9}
          className="absolute top-[5%] right-44 opacity-50"
        >
          <Image width={25} height={25} src={whiteStar} alt="star" />
        </motion.div>

        <motion.div
          variants={blink}
          initial="initial"
          animate="animate"
          custom={1.5}
          className="absolute -bottom-5 right-10"
        >
          <Image width={15} height={15} src={whiteStar} alt="star" />
        </motion.div>

        <motion.form
          ref={formDataRef}
          onSubmit={fromHandle}
          variants={slideIn("right", "ease")}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          className="bg-glass rounded-xl text-white shadow-md px-12 py-10 flex items-center justify-center flex-col"
        >
          <p className="text-left w-full font-sans text-pinnk text-[32px] font-semibold">
            Register
          </p>

          <div className="relative mb-5 mt-10 w-full text-left flex space-x-2">
            <p className="text-white">Be part of this movement!</p>
            <p className="text-pinnk">...............................</p>
            <div className="absolute w-8 h-8 flex -space-x-2 right-[55%] -top-5">
              <Image alt="female" src={female} width={1000} height={1000} />
              <Image alt="boy" src={boy} width={1000} height={1000} />
            </div>
          </div>

          <p className="text-white text-2xl text-left w-full mb-10">
            CREATE YOUR ACCOUNT
          </p>

          <div className="space-y-5">
            {/* First Row  */}
            <div className="flex gap-x-8 w-full">
              <div className="space-y-2 text-white w-1/2">
                <label htmlFor="teamName">Team&apos;s Name</label>
                <input
                  className="border rounded border-white bg-glass px-6 py-4 text-sm  w-full focus:outline-none"
                  type="text"
                  placeholder="Enter the name of your group"
                  name="teamName"
                  required
                  id="teamName"
                />
              </div>

              <div className="space-y-2 text-white w-1/2">
                <label htmlFor="phone">Phone</label>
                <input
                  className="border rounded border-white bg-glass px-6 py-4 text-sm  w-full focus:outline-none appearance-none"
                  type="number"
                  placeholder="Enter your phone number"
                  name="phone"
                  required
                  id="phone"
                />
              </div>
            </div>

            {/* Second Row  */}
            <div className="flex gap-x-8 w-full">
              <div className="space-y-2 text-white w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  className="border rounded border-white text-sm bg-glass px-6 py-4 w-full focus:outline-none"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  required
                  id="email"
                />
              </div>

              <div className="space-y-2 text-white w-1/2">
                <label htmlFor="project_topic">Project Topic</label>
                <input
                  className="border rounded border-white bg-glass px-6 py-4 text-sm w-full focus:outline-none"
                  type="text"
                  placeholder="What is your group project topic"
                  name="project_topic"
                  required
                  id="project_topic"
                />
              </div>
            </div>

            {/* Third Row  */}
            <div className="flex gap-x-8 w-full">
              <div className="text-white w-1/2 space-y-2">
                <p>Category</p>
                <div
                  onClick={handleShowCat}
                  className="relative flex items-center justify-between border rounded border-white bg-glass py-4 px-6"
                >
                  <p className="">{catVal}</p>
                  <motion.div animate={{ rotate: showCat ? 180 : 0 }}>
                    {ArrowDown}
                  </motion.div>

                  {showCat && (
                    <div className="absolute bg-glass w-full min-h-[100px] left-0 backdrop-blur-md rounded-md top-[110%] z-30 px-5 py-6 space-y-2">
                      <p
                        onClick={() => handleCatValue("Category 1")}
                        className="hover:bg-glass bg-opacity-50 px-3 py-2 cursor-pointer duration-200"
                      >
                        Category 1
                      </p>
                      <p
                        onClick={() => handleCatValue("Category 2")}
                        className="hover:bg-glass bg-opacity-50 px-3 py-2 cursor-pointer duration-200"
                      >
                        Category 2
                      </p>
                      <p
                        onClick={() => handleCatValue("Category 3")}
                        className="hover:bg-glass bg-opacity-50 px-3 py-2 cursor-pointer duration-200"
                      >
                        Category 3
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-white w-1/2 space-y-2">
                <p>Group Size</p>
                <div
                  onClick={handleShowSize}
                  className="relative flex items-center justify-between border rounded border-white bg-glass py-4 px-6"
                >
                  <p className="">{sizeVal}</p>
                  <motion.div animate={{ rotate: showSize ? 180 : 0 }}>
                    {ArrowDown}
                  </motion.div>

                  {showSize && (
                    <div className="absolute bg-glass w-full min-h-[100px] left-0 backdrop-blur-md rounded-md top-[110%] z-30 px-5 py-6 space-y-2">
                      <p
                        onClick={() => handleSizeValue("2")}
                        className="hover:bg-glass bg-opacity-50 px-3 py-2 cursor-pointer duration-200"
                      >
                        2
                      </p>
                      <p
                        onClick={() => handleSizeValue("3")}
                        className="hover:bg-glass bg-opacity-50 px-3 py-2 cursor-pointer duration-200"
                      >
                        3
                      </p>
                      <p
                        onClick={() => handleSizeValue("5 or more")}
                        className="hover:bg-glass bg-opacity-50 px-3 py-2 cursor-pointer duration-200"
                      >
                        5 or more
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-sm text-pinnk italic">
              Please review your registration details before submitting
            </p>

            <div className="flex space-x-2 text-white items-center">
              <label
                htmlFor="checkBox"
                className="w-4 h-4 border-white border rounded bg-glass"
                onClick={() => setIsChecked((prev) => !prev)}
              >
                {isChecked && Check}
              </label>
              <input type="checkbox" name="checkbox" id="checkBox" hidden />
              <p className="text-sm">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
          </div>

          <button className="mt-5 w-full flex justify-center items-center h-14 text-center text-white rounded-md py-3 bg-gradient-to-r from-[#FE34B9] to-[#903AFF] hover:bg-gradient-to-r hover:from-[#903AFF] hover:to-[#FE34B9] duration-700 cursor-pointer">
            Register Now
          </button>
        </motion.form>
      </div>
    </>
  );
};

export default Form;
