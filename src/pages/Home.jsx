import React, { forwardRef, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Home.css";
import { motion, useScroll, useTransform } from "framer-motion";

import PlatformArc from "../components/ui/Arc.jsx";
import ButtonHero from "../components/ui/herosectionButton.jsx";
import EnchantedScroll from "../components/ui/EnhanshedScroll.jsx";
import FourGrid from "../components/ui/Fourgrid.jsx";
import ToolsGrid from "../components/ui/newProduct.jsx";
import VerticalScrollSection from "../components/ui/newStackingcards.jsx";
import BackgroundDots from "../components/ui/constantbg.jsx";
import Dashboard from "../components/ui/Windows8.jsx";

// Custom easing function for ultra-smooth transition
const smoothEase = (progress) => {
  // Cubic bezier-like smooth easing
  return progress < 0.5 
    ? 4 * progress ** 3 
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
};

const Hero = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  const fourGridSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fourGridSectionRef,
    offset: ["start end", "start start"],
  });

  // Apply custom smooth easing to the margin top transformation
  const marginTop = useTransform(
    scrollYProgress, 
    [0, 1], 
    ["50px", "250px"], 
    { ease: smoothEase }
  );

  return (
    <>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <BackgroundDots />
        </div>

        <section
          ref={ref}
          className="relative z-10 flex flex-col items-center text-center text-white pt-35"
        >
          <motion.div
            className="flex flex-row items-center font-semibold text-[94px] leading-tight tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="whitespace-nowrap">Beyond Just a Tool</span>
          </motion.div>

          <div className="absolute h-full -mt-20 ml-[80%] flex flex-col justify-end bg-primary-500 opacity-50 w-100 blur-2xl rounded-l-full"></div>
          <motion.div
            className="pt-10 text-[27px] text-secondary-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              AIBAMS isn't just a tool—it's the next generation of business{" "}
              <br />
              solutions, integrating AI, automation, and analytics for <br />
              maximum efficiency.
            </p>
          </motion.div>
          <motion.div
            className="mt-20 flex justify-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="mt-1">
              <button className="relative overflow-hidden bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black font-bold py-3 px-10 rounded-full transition-all duration-200 ease-out hover:shadow-[0_0_25px_12px_rgba(255,255,255,0.4)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-white/30 before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:left-full hover:before:opacity-100">
                Get Started
              </button>
            </div>
            <div className="mt-1">
              <button className="bg-black text-[#fad643] font-bold py-[12px] px-6 rounded-full transition-all duration-200 ease-out hover:border-1 hover:border-white">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </section>

        <div className="relative z-10">
          <motion.section
            ref={fourGridSectionRef}
            className="pt-20"
            style={{ marginTop, willChange: "margin-top" }}
          >
            <div>
              <FourGrid />
            </div>
          </motion.section>

          <div className="-mt-60">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <PlatformArc />
            </motion.div>
          </div>

          <section className="relative z-10 product mt-25">
            <motion.div
              className="product-title text-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center items-center gap-10">
                <div className="font-bold text-5xl md:text-6xl leading-tight tracking-wide text-primary-300">
                  <span>FUSION SUITE</span>
                </div>
              </div>
            </motion.div>
          </section>

          <motion.div
            className="mt-25"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ToolsGrid />
          </motion.div>

          <div className="mt-50 ml-[44%] justify-center">
            <button className="bg-black text-[#fad643] border-amber-50 border-1 font-bold py-[12px] px-6 rounded-full transition-all duration-200 ease-out cursor-pointer">
              View Details
            </button>
          </div>

          <section className="relative -z-10 text-3xl text-center mt-60 tracking-wider">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="pl-10 font-bold text-secondary-400 pr-5">
                Web Builder{" "}
              </span>
              on
              <br />
              <span className="firetext">STEROIDS</span>
            </motion.h1>
            <motion.div
              className="flex items-center justify-center pt-20 pb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mt-1">
                <button className="relative !text-xl overflow-hidden bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black font-bold py-3 px-6 rounded-full transition-all duration-200 ease-out hover:shadow-[0_0_25px_12px_rgba(255,255,255,0.4)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-white/30 before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:left-full">
                  Get Started
                </button>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";
export default Hero;