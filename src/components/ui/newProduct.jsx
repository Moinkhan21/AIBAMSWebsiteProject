import React, { useState } from "react";
import {
  Globe,
  DollarSign,
  Box,
  Users,
  Megaphone,
  Wrench,
  Activity,
  Settings,
} from "lucide-react";
import CustomButton from "../button.jsx";

// Noise Texture Component
const NoiseTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    style={{ filter: "contrast(170%) brightness(1000%)" }}
  >
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.8"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

const ToolsGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const tools = [
    {
      id: 1,
      name: "Website & App",
      icon: <Globe size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      name: "Sales & Marketing",
      icon: <DollarSign size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-pink-500 to-rose-500",
    },
    {
      id: 3,
      name: "Inventory",
      icon: <Box size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-purple-500 to-blue-500",
    },
    {
      id: 4,
      name: "Human Resources",
      icon: <Users size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-indigo-400 to-blue-500",
    },
    {
      id: 5,
      name: "Marketing",
      icon: <Megaphone size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-blue-600 to-sky-400",
    },
    {
      id: 6,
      name: "Services",
      icon: <Wrench size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-purple-600 to-fuchsia-400",
    },
    {
      id: 7,
      name: "Efficiency",
      icon: <Activity size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-blue-600 to-sky-400",
    },
    {
      id: 8,
      name: "Etc",
      icon: <Settings size={32} className="text-white" />,
      gradient: "bg-gradient-to-b from-purple-600 to-fuchsia-400",
    },
  ];

  return (
    <div className="bg-transparent w-full p-12 -mb-50 ">
      <div
        className="max-w-6xl mx-auto grid grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap-6"
        data-aos="zoom-in-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        {tools.map((tool) => (
          <div
            key={tool.id}
            className={`backdrop-blur-md bg-white/10 border border-white/20 shadow-lg w-[250px] rounded-xl p-6 relative overflow-hidden transition-all duration-300 ease-in-out shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] ${
              hoveredId === tool.id ? "h-64" : "h-40"
            }`}
            onMouseEnter={() => setHoveredId(tool.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Noise Texture */}
            <NoiseTexture />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 mx-auto">
                {tool.icon}
              </div>
              <p className="text-white text-xl text-center font-medium mb-4">
                {tool.name}
              </p>
              <div
                className={`transition-opacity duration-300 ${
                  hoveredId === tool.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-center text-sm">
                  Click to learn more about {tool.name}
                </p>
                <div className="flex justify-center mt-4">
                  <CustomButton size="small">Learn More</CustomButton>
                </div>
              </div>
            </div>
            <div
              className={`absolute inset-0 w-full transition-all duration-500 ${
                tool.gradient
              } ${
                hoveredId === tool.id
                  ? "opacity-20 bottom-0"
                  : "opacity-0 -bottom-full"
              }`}
            />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ToolsGrid;
