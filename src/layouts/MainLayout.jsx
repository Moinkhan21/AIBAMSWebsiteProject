import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/Stater';
import BackgroundDots from "../components/ui/constantbg.jsx";
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children, showStars = false, showBackground = false }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs whenever the pathname changes

  return (
    <div className="min-h-screen flex flex-col bg-secondary-500 relative overflow-hidden">
      {showStars && <StarBackground />}
      <Navbar />
      <div className="absolute inset-0 z-0">
        {showBackground && <BackgroundDots />}
      </div>
      <main className="flex-grow w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;