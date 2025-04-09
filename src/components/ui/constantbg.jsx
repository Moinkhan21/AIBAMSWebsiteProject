import React, { useEffect, useRef } from "react";
import "../../Styles/BackgroundDots.scss";

const BackgroundDots = () => {
  const canvasRef = useRef(null);
  const dots = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    // Create blurred glowing dots
    const createDots = () => {
      for (let i = 0; i < 5; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 20 + 180, // Larger blurred dots
          dx: (Math.random() - 0.5) * 0.8, // Slow movement
          dy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.3 , // Semi-transparent for blur effect
        });
      }
    };

    // Draw blurred, glowing dots
    const drawDots = () => {
      ctx.clearRect(0, 0, width, height); // Clears the frame before redrawing
      ctx.fillStyle = "black"; // Ensure background is **always black**
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter"; // Ensures glow effect

      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0,0.15)`; // Soft blue glow
        ctx.shadowBlur = 0; // Strong blur
        ctx.shadowColor = "rgba(255, 215, 0 ,0.15)";
        ctx.fill();
        ctx.closePath();
      });

      ctx.globalCompositeOperation = "source-over"; // Reset blend mode
    };

    // Animate dots
    const animateDots = () => {
      dots.forEach((dot) => {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x > width || dot.x < 0) dot.dx *= -1;
        if (dot.y > height || dot.y < 0) dot.dy *= -1;
      });

      drawDots();
      requestAnimationFrame(animateDots);
    };

    createDots();
    animateDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="background-dots" />;
};

export default BackgroundDots;
