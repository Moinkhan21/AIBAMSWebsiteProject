import React, { useEffect, useRef } from "react";
import '../../Styles/IntegrationsSection.css'; // Add this CSS file
import { 
  FcAcceptDatabase, FcBarChart, FcBinoculars, FcCollaboration, 
  FcElectricalSensor, FcElectronics, FcFlowChart, FcLockPortrait, 
  FcMultipleDevices 
} from "react-icons/fc";
import { VscDebugConsole } from "react-icons/vsc";
import { WiTime3 } from "react-icons/wi";
import { PiAirplayFill } from "react-icons/pi";
import { RiBowlLine } from "react-icons/ri";
import '@flaticon/flaticon-uicons/css/all/all.css';

import img1 from "../../assets/increase.png";

const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ filter: 'contrast(170%) brightness(1000%)' }}>
    <filter id='noiseFilter'>
      <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch' />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg>
);

const IntegrationsSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            console.log("Section is in view!"); // Debug log
            const icons = section.querySelectorAll('.icon-container');
            icons.forEach((icon) => {
              icon.classList.add('animate-in'); // Trigger animation
            });
            hasAnimated.current = true;
          }
        });
      },
      { 
        threshold: 0.2, // 20% of the section must be visible
        rootMargin: '0px 0px -100px 0px' // Trigger 100px before fully in view
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full py-16 bg-transparent" style={{ minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="absolute text-center mt-55 z-20 mx-57 my-50">
          <h2 className="!text-5xl font-bold text-white leading-tight mb-6">
            <span>Seamless integrations</span> <br />with your entire tech stack
          </h2>
          <div className="mt-1">
            <button className="relative overflow-hidden bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black font-bold py-3 px-10 rounded-full transform transition-all duration-500 ease-in-out hover:shadow-[0_0_25px_12px_rgba(255,255,255,0.4)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-white/30 before:opacity-0 before:transition-all before:duration-500 hover:before:left-full hover:before:opacity-100">
              See all Integrations
            </button>
          </div>
        </div>

        <div className="relative w-full h-full mx-auto" style={{ maxWidth: "1500px" }}>
          <div className="relative inset-0 grid grid-cols-12 gap-6">
            {Array(72).fill(0).map((_, i) => (
              <div key={i} className="bg-[#2b2b2b4f] rounded-xl w-20 h-20"></div>
            ))}
          </div>
          
          <div className="absolute left-1/4 translate-x-2 top-1">
            <div className="icon-container adp-icon w-20 h-20 bg-[#141414] rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] flex items-center justify-center relative z-10">
              <i class="fi fi-tr-browser text-5xl text-black"></i>

              </div>
            </div>
          </div>

          <div className="absolute left-1/2 translate-x-27 top-0">
            <div className="icon-container bg-[#141414] personio-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-[#141414] flex items-center justify-center relative z-10">
              </div>
            </div>
          </div>

          <div className="absolute right-1/4 translate-x-25 top-26">
            <div className="icon-container bg-[#141414] teams-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] flex items-center justify-center relative z-10">
              <i className="fi fi-ts-megaphone-announcement-leader text-5xl text-black"></i>
              </div>
            </div>
          </div>

          <div className="absolute right-1/4 -translate-x-71 top-26">
            <div className="icon-container bg-[#141414] slack-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] flex items-center justify-center relative z-10">
              <i className="fi fi-ts-hr text-5xl text-black"></i>
              </div>
            </div>
          </div>

          <div className="absolute top-26">
            <div className="icon-container bg-[#141414] jira-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] flex items-center justify-center relative z-10">
              <i className="fi fi-tr-calculator-money text-5xl text-black"></i>
              </div>
            </div>
          </div>

          <div className="absolute left-1/4 -translate-x-47 top-63 -translate-y-1/2 z-4">
            <div className="icon-container bg-[#141414] google-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <div className="w-20 h-20  flex items-center justify-center relative z-10">
              </div>
            </div>
          </div>

          <div className="absolute right-16 top-52 translate-x-18">
            <div className="icon-container bg-[#141414] gusto-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 flex  items-center justify-center relative z-10">
              </div>
            </div>
          </div>

          <div className="absolute right-1/4 translate-x-2 top-112.5 -translate-y-8">
            <div className="icon-container bg-[#141414] greenhouse-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-[#141414]  flex items-center justify-center relative z-10">
              </div>
            </div>
          </div>

          <div className="absolute left-1/4 -translate-x-22 bottom-26">
            <div className="icon-container bg-[#141414] loading-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 flex bg-[#141414] items-center justify-center relative z-10">
              </div>
            </div>
          </div>

          <div className="absolute right-22 bottom-52">
            <div className="icon-container bg-[#141414] user-smile-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 flex bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] items-center justify-center relative z-10">
              <i className="fi fi-tr-supplier-alt text-5xl text-black"></i>
              </div>
            </div>
          </div>

          <div className="absolute bottom-26 left-0">
            <div className="icon-container bg-[#141414] salesforce-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 flex bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] items-center justify-center relative z-10">
              <i className="fi fi-tr-operation text-5xl text-black"></i>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-20 bottom-0">
            <div className="icon-container bg-[#141414] hubspot-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 flex bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] items-center justify-center relative z-10">
              <i className="fi fi-tr-dolly-flatbed text-5xl text-black"></i>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-21">
            <div className="icon-container bg-[#141414] workday-icon w-20 h-20 rounded-xl shadow-lg flex items-center justify-center overflow-hidden relative">
              <NoiseTexture />
              <div className="w-20 h-20 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] flex items-center justify-center relative z-10">
                <RiBowlLine size={50} color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;

