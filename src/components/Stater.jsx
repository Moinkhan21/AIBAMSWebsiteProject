import React, { useEffect, useState, useRef } from "react";
import "../Styles/spotlightBorder.css";
import { Spotlight } from "../components/ui/spotlight-new.jsx";
import "../Styles/Starter.css";  
import "../Styles/Arrowdown.css";
import enhanceScrollBehavior from "../components/ui/enhanceScrollBehavior.jsx"; 
import { useLocation } from 'react-router-dom';

document.documentElement.style.scrollBehavior = "auto"; // Prevent smooth scrolling conflicts
window.scrollTo(0, 0); // Reset scroll
document.documentElement.style.willChange = "scroll-position"; // Force repaint
document.documentElement.offsetHeight; // Force reflow before animation

function Starter({ headerRef, starterEndRef }) { // Accept starterEndRef as a prop
  const [showArrow, setShowArrow] = useState(true);
  const shootingLineRef = useRef(null);
  const animationFrameRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    console.log("Effect ran"); // Debugging step 1
    console.log("Starter end ref:", starterEndRef); // Debug starterEndRef

    const startAnimation = () => {
      enhanceScrollBehavior();

      const header = document.querySelector("nav.primary-menu");
      if (!header) {
        console.error("🚨 Navigation header not found");
        return;
      }
      console.log("✅ Header found:", header);

      const shootingLine = shootingLineRef.current;
      if (!shootingLine) {
        console.error("🚨 Shooting line element not found");
        return;
      }
      console.log("✅ Shooting line found:", shootingLine);

      const headerTop = header.getBoundingClientRect().top + window.scrollY;
      console.log("📌 Header position:", headerTop);

      // Reset page scroll before animation
      window.scrollTo(0, 0);
      shootingLine.style.transform = "translateY(-150px) scaleY(0.5)";
      shootingLine.style.opacity = "1";

      // Ensure reflow is forced before animation starts
      shootingLine.offsetHeight;

      const easeOutQuad = (t) => t * (2.028 - t); // Smooth easing function

      const startScrollAnimation = () => {
        let startTime = null;
        const duration = 2000; // 2 seconds
      
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutQuad(progress);
      
          const scrollPosition = Math.round(headerTop * easedProgress); // No offset
          window.scrollTo(0, scrollPosition);
      
          let yPos = -150;
          let scale = 0.5;
          let scaleX = 1; // Keep horizontal scale at 1 initially
          let borderRadius = "70%"; // Initial rounded effect for smooth transition
      
          if (progress <= 0.3) {
            yPos = -150 + (progress / 0.3) * 180;
          } else if (progress <= 0.6) {
            yPos = 30 + ((progress - 0.3) / 0.3) * 70;
            scale = 0.5 + ((progress - 0.3) / 0.3) * 0.5;
          } else {
            yPos = 100 + ((progress - 0.6) / 0.4) * 120;
            scale = 1 - ((progress - 0.6) / 0.4) * 0.5;
      
            // Make the shooting star pointy
            scaleX = 0.4 + (progress - 0.6) / 0.4 * 0.8;  // Scale X to make it thinner
            borderRadius = "50% 50% 0% 0% 0% 0%"; // Create a pointy shape (like a triangle)
          }
      
          // Apply transformations to the shooting line
          shootingLineRef.current.style.transform = `translateY(${yPos}px) scaleY(${scale}) scaleX(${scaleX})`;
          shootingLineRef.current.style.borderRadius = borderRadius;
      
          if (progress > 0.9) {
            shootingLineRef.current.style.opacity = `${1 - (progress - 0.9) / 0.1}`;
          }
      
          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(animate);
          } else {
            // Ensure that at the end, the shooting line stays pointy and doesn't reset
            shootingLineRef.current.style.transform = `translateY(${yPos}px) scaleY(${scale}) scaleX(${scaleX})`;
            shootingLineRef.current.style.borderRadius = borderRadius;
            shootingLineRef.current.style.opacity = '0'; // To fade out the line at the end (if needed)
            setTimeout(() => {
              window.scrollTo({ top: headerTop + 20, behavior: "smooth" });
              console.log("✅ Final position:", window.scrollY, "Expected:", headerTop);
            }, 50);
          }
        };
      
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      

      // Ensure animation starts as soon as possible
      setTimeout(() => {
        console.log("🚀 Starting animation...");
        startScrollAnimation();
      }, 500);
    };

    // Start animation when the component mounts
    startAnimation();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isHome) return null;

  return (
    <>
      <div className="logo-container-main">
        <Spotlight />
        <h1 className="logo-main">AIBAMS</h1>
        <p className="tagline -ml-6">AI Business & Management System</p>

        <div className="shooting-line-wrapper">
          <div
            className="shooting-line"
            ref={shootingLineRef}
            style={{
              transform: "translateY(-150px) scaleY(0.5)",
              opacity: 1,
            }}
          />
        </div>

        {showArrow && (
          <div className="arrow-container">
            <div className="arrow-down"></div>
          </div>
        )}
      </div>

      {/* Add a div at the end of the component that serves as the scroll target */}
      <div ref={starterEndRef} className="starter-end-marker" />
    </>
  );
}

const StarBackground = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (!isHome) return null;

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="stars-container">
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

export default Starter;
export { StarBackground };