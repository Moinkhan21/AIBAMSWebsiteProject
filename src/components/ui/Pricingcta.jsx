import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const InteractiveFooterCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full p-0 bg-black py-16  relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="relative inset-0 overflow-hidden opacity-30">
        <div className="absolute w-64 h-64 bg-yellow-500 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-yellow-600 rounded-full blur-3xl -bottom-40 -right-20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-full w-px bg-yellow-900 opacity-20"></div>
          ))}
        </div>
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full h-px bg-yellow-900 opacity-20"></div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          data-aos="fade-up"
        >
          <div 
            className="text-center md:text-left space-y-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2 
              className="sm:text-xl md:text-xl lg:text-2xl font-semibold bg-clip-text"
            >
              Ready to launch into the future?
            </h2>
            <p className="text-blue-100 sm:text-xl md:text-xl lg:text-2xl text-center">
              Join thousands of forward-thinking companies who've already <br /> upgraded their operations with our cutting-edge solutions.
            </p>
          </div>
          
          <div 
            className="xs:w-1 md:w-1/2 w-full max-w-md mt-10 -mb-10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="bg-black bg-opacity-60 border border-yellow-500 rounded-lg p-6 backdrop-blur-sm relative overflow-hidden">
              <NoiseTexture />
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <h3 
                    className="text-yellow-500 font-medium text-2xl text-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    Get started today
                  </h3>
                  
                  <div 
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-black border border-yellow-500 rounded-md py-3 px-4 text-white placeholder-yellow-300 placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-55 !mt-8 m-auto py-3 px-4 bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black hover:scale-105 duration-300 font-medium rounded-md transition flex items-center justify-center group"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <span>Start your free trial</span>
                    <svg 
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${hover ? 'translate-x-1' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  
                  <p 
                    className="text-yellow-500 text-sm my-5 -mb-0.5 text-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    No credit card required. 14-day free trial.
                  </p>
                </form>
              ) : (
                <div 
                  className="text-center py-6 space-y-4 relative z-10"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-600 mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">Thank you for signing up!</h3>
                  <p className="text-yellow-200">Check your inbox for next steps.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-yellow-400 underline text-sm mt-4"
                  >
                    Go back
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFooterCTA;