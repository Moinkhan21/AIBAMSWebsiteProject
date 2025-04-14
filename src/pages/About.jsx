import React from "react";
import { motion } from "framer-motion";
import defaultImage from "../assets/7fd6a598-ccc0-4e8b-93ff-48828d0016f6-removebg-preview.png"; // Ensure correct import

const teamMembers = [
  
  { name: "Shiv Gadway", role: "Full-Stack Developer" },
  { name: "Vyonish Momaya", role: "Sales & Marketing" },
  { name: "Himnish Parmar", role: "Tech Lead" },
  { name: "Mohd. Shakib Raza", role: "CMO" },
  { name: "Shubham Parmar", role: "Founder & CEO" },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center text-center px-10 py-40">
      {/* About Section */}
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl mb-15 ">
        <h1 className="sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider">About AIBAMS</h1>
        <p className="sm:text-lg md:text-xl lg:text-2xl text-gray-100 mt-5 tracking-widest">Transforming Ideas into Digital Excellence</p>
        <p className="text-gray-100 mt-10  tracking-widest sm:text-sm md:text-md lg:text-lg">
          SHDPIXEL is a visionary brand hub, bringing together diverse industries under one umbrella.
          With innovative brands like Metamatrix Technologies, AIBAMS, and Broken Blind Pictures, 
          we are constantly evolving and expanding into new domains. Our mission is to redefine 
          possibilities by blending creativity, technology, and business innovation.
        </p>
      </div>

      {/* Core Team Section */}
      <div className="max-w-5xl">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider">Our Core Team</h2>
        <p className="text-gray-100 mt-2 mb-8 tracking-wider sm:text-md md:text-lg lg:text-xl">
          A team of exceptional talent, united by a passion for innovation and excellence.
        </p>

        {/* Grid for Team Members */}
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#45454521] p-6 shadow-lg rounded-lg text-center w-64 border-2 border-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={defaultImage}
                alt={member.name}
                className="  mx-auto mb-4 object-cover "
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Last Two Members Centered */}
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 justify-center">
          {teamMembers.slice(3).map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#45454521] p-6 shadow-lg rounded-lg text-center w-64 border-2 border-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img
                src={defaultImage}
                alt={member.name}
                className=" mx-auto mb-4 object-cover "
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
