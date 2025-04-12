import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Nandan Pathak", role: "Full-Stack Developer" },
  { name: "Shiv Gadway", role: "Full-Stack Developer" },
  { name: "Vyonish Momaya", role: "Sales & Marketing" },
  { name: "Himnish Parmar", role: "Tech Lead" },
  { name: "Mohd. Shakib Raza", role: "CMO" },
  { name: "Shubham Parmar", role: "Founder & CEO" },
];

const TestPage = () => {
  return (
    <div className="flex flex-col items-center text-center px-10 py-40">
      {/* About Section */}
      <div className="max-w-3xl mb-100">
        <h1 className="text-[80px] font-bold tracking-wider">About AIBAMS</h1>
        <p className="!text-[22px] text-gray-100 mt-5 tracking-widest">Transforming Ideas into Digital Excellence</p>
        <p className="text-gray-100 mt-10  tracking-widest">
          SHDPIXEL is a visionary brand hub, bringing together diverse industries under one umbrella.
          With innovative brands like Metamatrix Technologies, AIBAMS, and Broken Blind Pictures, 
          we are constantly evolving and expanding into new domains. Our mission is to redefine 
          possibilities by blending creativity, technology, and business innovation.
        </p>
      </div>

      {/* Core Team Section */}
      <div className="max-w-5xl w-full">
        <h2 className="!text-5xl font-bold tracking-wider">Our Core Team</h2>
        <p className="text-gray-100 mt-2 mb-8 tracking-wider">
          A team of exceptional talent, united by a passion for innovation and excellence.
        </p>

        {/* Grid for Team Members */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#45454521] p-6 shadow-lg rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
            
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Last Two Members Centered */}
        <div className="flex justify-center gap-8 mt-8">
          {teamMembers.slice(4).map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#45454521] p-6 shadow-lg rounded-lg text-center w-64 border-2 border-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
             
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
