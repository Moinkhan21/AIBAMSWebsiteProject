import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { Globe, DollarSign, Box, Users, Megaphone, Wrench, Activity, Settings } from 'lucide-react';

const AnimatedSquare = ({ Icon, size }) => {
  const divRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;
    if (!divElement) return;

    const animation = anime({
      targets: divElement,
      translateX: function(el) {
        return el.getAttribute('data-x') || 30;
      },
      translateY: function(el, i) {
        return 8 + (-8 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + 0.05;
      },
      borderRadius: function() {
        return ['50%', anime.random(10, 20) + '%'];
      },
      duration: function() {
        return anime.random(1200, 1800);
      },
      delay: function() {
        return anime.random(0, 400);
      },
      direction: 'alternate',
      loop: false,
      autoplay: false
    });

    animationRef.current = animation;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationRef.current.play();
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    observer.observe(divElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const squareSize = size === 'large' ? 200 : 100;
  const iconSize = size === 'large' ? 100 : 28;

  return (
    <div
      ref={divRef}
      data-x="30"
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        backgroundColor: 'rgba(0, 140, 255, 0.1)',
        width: `${squareSize}px`,
        height: `${squareSize}px`,
        borderRadius: '12px',
        boxShadow: '0 0 20px rgba(0, 140, 255, 0.2)',
        border: '1px solid rgba(0, 140, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)',
        marginLeft: size === 'large' ? '-60px' : '-40px',
        marginTop: size === 'large' ? '-30px' : '-20px'
      }}
    >
      <Icon size={iconSize} color="#393ea1" />
    </div>
  );
};

const ProductDisplay = ({ productId, size }) => {
  const icons = [
    Globe,
    DollarSign,
    Box,
    Users,
    Megaphone,
    Wrench,
    Activity,
    Settings
  ];

  const Icon = icons[productId - 1] || Globe;

  return (
    <div style={{ 
      position: 'relative',
      width: '100%',
      height: size === 'large' ? '150px' : '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10px'
    }}>
      <AnimatedSquare Icon={Icon} size={size} />
    </div>
  );
};

export default ProductDisplay;