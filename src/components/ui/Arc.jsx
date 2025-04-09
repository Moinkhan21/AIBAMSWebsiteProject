import { motion } from "framer-motion";
import "../../Styles/platformApps.css"; // Ensure styles exist
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import ButtonHero from "../ui/herosectionButton";

// Noise Texture Component
const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" style={{ filter: 'contrast(170%) brightness(1000%)' }}>
    <filter id='noiseFilter'>
      <feTurbulence 
        type='fractalNoise' 
        baseFrequency='0.8' 
        numOctaves='4' 
        stitchTiles='stitch'
      />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg>
);

const icons = ["💖", "🔄", "👁️", "✨", "🌱", "🔗", "🔃"];
const arcPositions = [
  { left: "0%", top: "85%" },   // Left edge, lower point
  { left: "15%", top: "50%" },   // Quarter point, curved down slightly
  { left: "32.5%", top: "30%" },   // Approaching center, flatter top
  { left: "50%", top: "20%" },   // Center, highest but flattened
  { left: "67.5%", top: "30%" },   // Approaching right, flatter top
  { left: "85%", top: "50%" },   // Three-quarter point, curved down
  { left: "100%", top: "85%" },   // Right edge, lower point
];

export default function PlatformArc() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-[600px] bg-transparent text-center p-6 mt-50">
      {/* Animated Background */}
      <div className="circles  mt-[250px]  self-center inset-0 flex items-center justify-center " data-aos="fade-in" style={{
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      >
        <div className="circle1"></div>
        <div className="circle2"></div> 
        <div className="circle3"></div>
      </div>

      {/* Icons in an Irregular Arc using arcPositions */}
      <div className="relative w-[450px] h-[200px] -ml-15 -mt-30 -mb-5 " data-aos="fade-up">
        {icons.map((icon, index) => {
          const position = arcPositions[index];

          return (
            <motion.div
              key={icon + index}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: [0.5, 1.1, 1], y: 0 }}
              transition={{ delay: index * 0.15, duration: 1, ease: "easeOut" }}
              className="cursor-pointer mt-10 absolute z-10 w-15 h-15 flex items-center justify-center shadow-lg rounded-xl text-2xl hover:scale-110 hover:-translate-0.5 transition-all overflow-hidden bg-amber-50"
              style={{
                left: position.left,
                top: position.top,
                transform: "translate(-50%, -50%)", // Center icons properly
              }}
            >
              
              {/* Icon */}
              <span className="relative z-10">{icon}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Text and Button */}
      <div className="bg-[#ffd900e3] mt-32 uppercase text-[#ffffff] px-4 py-1 rounded-full text-sm font-semibold mb-4" data-aos="fade-up" data-aos-delay="200">
        ai enabled
      </div>
      <h1 className="ml-5 text-4xl font-bold text-white max-w-xl mr-2" data-aos="fade-up" data-aos-delay="400">
        All operations for your business, simplified
      </h1>
      <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
        {/* <ButtonHero /> */}
      </div>
    </div>
  );
}