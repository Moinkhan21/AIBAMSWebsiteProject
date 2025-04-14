import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CardHover from '../ui/hoverside.jsx';

// Add noise texture component
const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ filter: 'contrast(170%) brightness(1000%)' }}>
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

// GridItem component (unchanged)
const GridItem = ({ title, description, subDescription, icon, className, index, hoverComponent, subText, subText2, extraText }) => {
  const getSvgPosition = (index) => {
    const positions = [
      { right: '60px', bottom: '-50px' },
      { left: '52%', bottom: '120px' },
      { right: '47%', top: '60px' },
      { left: '-300px', top: '10%' }
    ];
    return positions[index % positions.length];
  };

  const getSvgSize = (index) => {
    const sizes = ["w-80 h-80", "w-96 h-96", "w-200 h-200", "w-64 h-64"];
    return sizes[index % sizes.length];
  };

  const getSvgRotation = (index) => {
    const rotations = ["rotate(0deg)", "rotate(180deg)", "rotate(0deg)", "rotate(30deg)"];
    return rotations[index % rotations.length];
  };

  const getBlurIntensity = (index) => {
    const blurValues = [
      { initial: "blur(0px)", hover: "blur(80px)" },
      { initial: "blur(0px)", hover: "blur(40px)" },
      { initial: "blur(0px)", hover: "blur(50px)" },
      { initial: "blur(0px)", hover: "blur(150px)" }
    ];
    return blurValues[index % blurValues.length];
  };

  const svgPosition = getSvgPosition(index);
  const svgSize = getSvgSize(index);
  const svgRotation = getSvgRotation(index);
  const blurIntensity = getBlurIntensity(index);

  const svgStyle = {
    ...svgPosition,
    zIndex: -1,
    position: 'absolute',
    width: svgSize.split(' ')[0],
    height: svgSize.split(' ')[1],
    transform: svgRotation,
  };

  return (
    <div className={`relative ${className} overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden rounded-[40px]">
        <div className="absolute" style={svgStyle}>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="600" 
            height="250" 
            viewBox="0 0 685 422" 
            fill="#0000FF" 
            filter="url(#glow)"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", opacity: { duration: 1 } }}
            whileHover={{ scale: 1, transition: { duration: 0.3 } }}
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="25" result="blur1"/>
                <feFlood floodColor="#0000FF" floodOpacity="1" result="color1"/>
                <feComposite operator="in" in="color1" in2="blur1" result="blur1_colored"/>
                <feGaussianBlur stdDeviation="15" result="blur2"/>
                <feFlood floodColor="#4169E1" floodOpacity="0.8" result="color2"/>
                <feComposite operator="in" in="color2" in2="blur2" result="blur2_colored"/>
                <feGaussianBlur stdDeviation="8" result="blur3"/>
                <feFlood floodColor="#00BFFF" floodOpacity="0.6" result="color3"/>
                <feComposite operator="in" in="color3" in2="blur3" result="blur3_colored"/>
                <feGaussianBlur stdDeviation="4" result="blur4"/>
                <feFlood floodColor="#87CEFA" floodOpacity="0.4" result="color4"/>
                <feComposite operator="in" in="color4" in2="blur4" result="blur4_colored"/>
                <feMerge>
                  <feMergeNode in="blur1_colored"/>
                  <feMergeNode in="blur2_colored"/>
                  <feMergeNode in="blur3_colored"/>
                  <feMergeNode in="blur4_colored"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
                <feDropShadow dx="0" dy="0" stdDeviation="30" floodColor="#ffd302" floodOpacity="0.8"/>
              </filter>
            </defs>
            <path d="M684.5 293.786L684.5 422L-6.10352e-05 422L-2.72891e-05 35.9897C-2.72891e-05 35.9897 63.9087 -56.2401 130.001 55C201 174.5 321.5 288 514.003 189C682.047 102.578 684.5 228.995 684.5 293.786Z" fill="#ffd302"/>
            <defs>
              <radialGradient id="paint0_radial_88_1237" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(345.706 273.77) rotate(-90) scale(247.77 762.294)">
                <stop stopColor="#D6FF11"/>
                <stop offset="1" stopColor="#FFFF11"/>
              </radialGradient>
            </defs>
          </motion.svg>
        </div>
      </div>

      <motion.div
        className="bg-[#191919] p-4 relative h-full w-full text-white cursor-pointer overflow-hidden backdrop-blur-none"
        initial={{ scale: 1, backdropFilter: blurIntensity.initial, backgroundColor: "rgba(33, 33, 33, 0.99)", borderRadius: "40px", boxShadow: "0 0 0 rgba(0, 0, 255, 0)" }}
        whileHover={{ borderRadius: "40px", scale: 1, backdropFilter: blurIntensity.hover, backgroundColor: "rgba(33, 33, 33, 0.5)", boxShadow: "0 8px 32px rgba(0, 0, 255, 0.2)" }}
        transition={{ duration: 0.3, ease: "easeOut", backdropFilter: { duration: 0.4, ease: "easeInOut" }, backgroundColor: { duration: 0.4, ease: "easeInOut" }, boxShadow: { duration: 0.4, ease: "easeInOut" } }}
      >
        <NoiseTexture />
        <div className="relative z-10 flex flex-col h-full mr-1">
          <div className={`title-container ${index === 1 ? 'mb-4 w-3/4' : index === 0 ? 'mb-8' : 'mb-2'} ${index === 2 ? 'w-1/2' : ''}`}>
            <h3 className={`
              ${index === 0 ? 'xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold mt-5' : ''}
              ${index === 1 ? 'sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight mt-5' : ''}
              ${index === 2 ? 'sm:text-3xl lg:text-4xl font-semibold leading-none mt-5' : ''}
              ${index === 3 ? 'sm:text-3xl lg:text-4xl font-light leading-none mt-5' : ''}
            `}>
              {title}
            </h3>
          </div>
          
          <div className={`description-container 
            ${index === 0 ? 'w-full mt-0' : ''} 
            ${index === 1 ? 'w-3/4 mt-2' : ''} 
            ${index === 2 ? 'w-3/4 mt-5' : ''} 
            ${index === 3 ? 'text-center w-full mt-[20px] ' : ''}
          `}>
            <p className={`
              ${index === 0 ? 'sm:text-lg md:text-xl lg:text-2xl font-light mb-4' : ''}
              ${index === 1 ? 'sm:text-lg md:text-xl lg:text-2xl font-light mb-2' : ''}
              ${index === 2 ? 'sm:text-3xl md:text-4xl lg:text-5xl font-light ' : ''}
              ${index === 3 ? 'sm:text-6xl md:text-7xl lg:text-8xl font-bold' : ''}
            `}>
              {description}
            </p>
            {subDescription && (
              <p className={`
                ${index === 0 ? 'text-xl text-gray-400 leading-relaxed w-full' : ''}
                ${index === 1 ? 'sm:text-xl lg:text-2xl xl:text-2xl text-gray-400 leading-relaxed w-full sm:w-3/4' : ''}
                ${index === 2 ? 'sm:text-xl lg:text-2xl xl:text-2xl text-gray-400 leading-relaxed w-full mt-6 ' : ''}
                ${index === 3 ? 'xs:text-2xl sm:text-2xl lg:text-3xl font-light mt-2 text-center ' : ''}
              `}>
                {subDescription}
              </p>
            )}
            {extraText && (
              <p className="text-base text-gray-400 mt-6 w-4/5">
                {extraText}
              </p>
            )}
          </div>
          
        </div>
      </motion.div>
    </div>
  );
};

const FourGrid = () => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "start start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);

  return (
    <div className="container mx-auto py-5 px-4 md:px-4" style={{ minHeight: "35vh", position: "relative" }}>
      <motion.div
        ref={gridRef}
        className="grid grid-cols-4 gap-6 md:gap-8 w-full mx-auto h-[650px]"
        style={{ 
          scale,
          transform: `translate(0%, ${scrollYProgress * 5}%) translate3d(0px, ${y}px, 0px)`,
          willChange: 'transform'
        }}
        initial={{ scale: 0.5, y: -200 }}
        transition={{ 
          ease: "easeOut", 
          duration: 1.5,
          transform: {
            type: "spring",
            stiffness: 60,
            damping: 30
          }
        }}
      >
        <GridItem
          index={0}
          title="Big Idea"
          description="AI-Powered Business Suite"
          subDescription=""
          className="col-span-1 row-span-3"
        />
        <GridItem
          index={1}
          title="AI-Driven Customization & Automation"
          description="Includes"
          subDescription="Unlock the power of AI for tailored solutions."
          // icon={["AI", "ML", "Analytics"]}
          // subText={["Custom", "Machine", "Data"]}
          // subText2={["Solutions", "Learning", "Insights"]}
          className="col-span-3 row-span-3"
          hoverComponent={<CardHover />}
        />
        <GridItem
          index={2}
          title="Responsive"
          description="& Mobile Friendly"
          subDescription="Stay connected on any device with a seamless, optimized experience."
          className="col-span-3 row-span-3"
        />
        <GridItem
          index={3}
          title="Up to"
          description="8+"
          subDescription="Product"
          extraText=""
          className="col-span-1 row-span-3 flex items-center justify-center"
        />
      </motion.div>
    </div>
  );
};

export default FourGrid;

