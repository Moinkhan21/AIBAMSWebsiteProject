import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Fusionsuite.css";
import GridProducts from "../components/ui/newProductgrid.jsx";
import ProductDisplay from "../components/ui/productDisplay.jsx";
import Productcontainers from "../components/ui/Productcontainers.jsx";
import CustomButton from "../components/Button.jsx";
import ButtonHero from "../components/ui/herosectionButton.jsx";
import { motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import PuzzleGrid from "../components/ui/PuzzleGrid.jsx";



const Fusionsuite = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation runs only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="fusionsuite-container">
        <GridProducts data-aos="fade-up" />
        {/* <div className="mt-50">
      <Productcontainers data-aos="fade-up" />

      </div> */}
      <PuzzleGrid />

        <section className="bg-transparent mt-60">
          <div className="text-center p-20 font-bold tracking-widest line-height-100">
            <div className="flex justify-center items-center">
              <p
                className="text-[70px] md:text-5xl font-semibold text-white font-inter"
                data-aos="zoom-in"
              >
                Experience the
                <span className="highlight c1 px-2 hover:bg-[#D9EDF8] hover:text-black transition-colors">
                  Future
                </span>
                of <br />
                <span className="highlight c2 px-2 hover:bg-[#FFADAD] hover:text-black transition-colors">
                  AI-Powered
                </span>
                Solutions
              </p>
            </div>
          </div>
          <div
            className="mb-10 flex justify-center gap-6"
            data-aos="fade-up"
          >
            <motion.div
              className="mt-5 flex justify-center gap-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="mt-1">
                <button className="relative overflow-hidden bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black font-bold py-3 px-10 rounded-full transition-all duration-200 ease-out hover:shadow-[0_0_25px_12px_rgba(255,255,255,0.4)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-white/30 before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:left-full hover:before:opacity-100">
                  Lear more
                </button>
              </div>
              <div className="mt-1">
                <button className="bg-black text-[#fad643] font-bold py-[12px] px-6 rounded-full transition-all duration-200 ease-out hover:border-1 hover:border-white">
                  Join free
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Fusionsuite;
