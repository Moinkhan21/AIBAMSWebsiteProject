import React from 'react';

const Button = ({ size = 'small' }) => {
  const sizeStyles = {
    small: 'px-4 py-2 text-sm gap-2 rounded-xl shadow-sm',
    medium: 'px-6 py-3 text-lg gap-3 rounded-2xl shadow-md',
    large: 'px-8 py-4 text-xl gap-4 rounded-3xl shadow-lg',
  };

  const arrowSizes = {
    small: 'w-2.5 h-2.5',
    medium: 'w-3 h-3',
    large: 'w-4 h-4',
  };

  const lineSizes = {
    small: 'h-[1.5px] w-2.5 group-hover:w-1.5',
    medium: 'h-[2px] w-3 group-hover:w-4',
    large: 'h-[2.5px] w-4 group-hover:w-5',
  };

  const arrowHeadSizes = {
    small: 'h-1.5 w-1.5 border-r-[2px] border-b-[2px] -top-[2.4px] right-[-2px] group-hover:right-[-4px]',
    medium: 'h-2 w-2 border-r-2 border-b-2 -top-[3.5px] group-hover:right-[-8px]',
    large: 'h-2.5 w-2.5 border-r-[2.5px] border-b-[2.5px] -top-[4px] group-hover:right-[-10px]',
  };

  return (
    <button
      className={`group relative flex items-center ${sizeStyles[size]} bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black focus:outline-none focus:ring-2 focus:ring-[#645bff] focus:ring-offset-2`}
    >
      <span className="relative z-10">Learn more</span>
      <div className={`relative flex items-center justify-center ${arrowSizes[size]}`}>
        <div className={`relative ${lineSizes[size]} bg-white/80 transition-all duration-200 group-hover:bg-white`}>
          <div
            className={`absolute ${arrowHeadSizes[size]} border-white transition-all duration-200 -rotate-40`}
          />
        </div>
      </div>
    </button>
  );
};

export default Button;