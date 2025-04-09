import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import BackgroundDots from "../components/ui/constantbg.jsx";
import { useLocation } from 'react-router-dom';

const TermsLayout = ({ children, showBackground = false }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs whenever the pathname changes

  return (
    <div className="min-h-screen flex flex-col bg-secondary-500 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {showBackground && <BackgroundDots />}
      </div>
      <main className="flex-grow w-full relative px-4 py-8 md:px-8 md:py-12">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default TermsLayout;