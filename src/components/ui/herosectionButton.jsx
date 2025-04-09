import React from 'react';

const ButtonHero = ({ 
  text = "Get started", 
  onClick, 
  className = "",
  showIcon = true,
  type = "button",
  disabled = false,
  gradient = "from-yellow-400 via-yellow-500 to-yellow-600",
  size = "medium"  // Added size prop
}) => {
  // Define size variants
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-[0.85rem] -mt-[0.5px] text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative group">
        <button 
          type={type}
          onClick={onClick}
          disabled={disabled}
          aria-label={text}
          className="relative inline-block p-px font-semibold leading-6 text-white shadow-2xl cursor-pointer rounded-xl transition-transform duration-300 ease-in-out hover:scale-101 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
          <span className={`relative z-10 block ${sizeStyles[size]} rounded-xl bg-gray-900`}> {/* Updated base color and added size */}
            <div className="relative z-10 flex items-center space-x-2">
              <span className="transition-all duration-500 group-hover:translate-x-1">{text}</span>
              {showIcon && (
                <svg 
                  className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" 
                  data-slot="icon" 
                  aria-hidden="true" 
                  viewBox="0 0 20 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    clipRule="evenodd" 
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" 
                    fillRule="evenodd" 
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>
          </span>
        </button>
      </div>
    </div>
  );
}

export default ButtonHero;