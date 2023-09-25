"use client";
import { fadeIn } from "@/utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const NavbarToggle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {scrollPosition > 100 && (
          <motion.div
            variants={fadeIn("down")}
            initial="initial"
            whileInView="animate"
            custom={0.5}
            className="fixed w-full bg-glass z-50 backdrop-blur-md"
          >
            <Navbar navbarFixed={true} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={fadeIn("down")}
        initial="initial"
        animate="animate"
        custom={0.9}
      >
        <Navbar navbarFixed={false} />
      </motion.div>
    </>
  );
};

export default NavbarToggle;
