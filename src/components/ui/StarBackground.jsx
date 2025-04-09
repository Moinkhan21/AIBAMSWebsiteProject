import React from 'react';
import { useLocation } from 'react-router-dom';

const StarBackground = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (!isHome) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div className="stars-container absolute inset-0">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default StarBackground; 