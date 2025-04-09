import React, { useState } from 'react';

const CardHover = () => {
  const [hoveredCard, setHoveredCard] = useState('first'); // 'first' is default

  return (
    <div 
      className="w-[200px] h-[100px] rounded-md bg-[#21212100] flex gap-[10px] p-1"
      onMouseLeave={() => setHoveredCard('first')}
    >
      {/* First card */}
      <div
        className={`h-full overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-[#bab7b768] border border-[#ff5a9100] flex justify-center items-center ${
          hoveredCard === 'first' ? 'flex-[4]' : 'flex-1'
        }`}
        onMouseEnter={() => setHoveredCard('first')}  
      >
        <span
          className={`min-w-[14em] p-2 text-center transition-all duration-500 uppercase text-[#ffffff] tracking-[0.1em] ${
            hoveredCard === 'first' ? 'rotate-0' : 'rotate-[0deg]'
          }`}
        >
          analatics
        </span>
      </div>

      {/* Second card */}
      <div
        className={`h-full overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-[#bab7b768] border border-[#ff5a9100] flex justify-center items-center ${
          hoveredCard === 'second' ? 'flex-[4]' : 'flex-1'
        }`} 
        onMouseEnter={() => setHoveredCard('second')}
      >
        <span
          className={`min-w-[14em] p-2 text-center transition-all duration-500 uppercase text-[#ffffff] tracking-[0.1em] ${
            hoveredCard === 'second' ? 'rotate-0' : 'rotate-[0deg]'
          }`}
        >
          ai       </span>
      </div>

      {/* Third card */}
      <div
        className={`h-full overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-[#bab7b768] border border-[#ff5a9100] flex justify-center items-center ${
          hoveredCard === 'third' ? 'flex-[4]' : 'flex-1'
        }`}
        onMouseEnter={() => setHoveredCard('third')}
      >
        <span
          className={`min-w-[14em] p-2 text-center transition-all duration-500 uppercase text-[#ffffff] tracking-[0.1em] ${
            hoveredCard === 'third' ? 'rotate-0' : 'rotate-[0deg]'
          }`}
        >
          Ml
        </span>
      </div>
    </div>
  );
};

export default CardHover;