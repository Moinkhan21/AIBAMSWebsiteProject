import React, { useState, useEffect } from "react";
import "../../Styles/social.css"; // Adjust path if necessary
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaYoutube,
  FaTiktok,
  FaArrowUp
} from "react-icons/fa";

const Social = ({ headerRef }) => { // Accept headerRef as a prop
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to header function
  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="social-icons flex justify-center items-center m-auto text-center">
      <a 
        className="mr-4 text-gray-400 hover:text-white transition-colors"
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a 
        className="mr-4 text-gray-400 hover:text-white transition-colors"
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </a>
      <a 
        className="mr-4 text-gray-400 hover:text-white transition-colors"
        href="https://x.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} />
      </a>
      <a 
        className="mr-4 text-gray-400 hover:text-white transition-colors"
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        className="mr-4 text-gray-400 hover:text-white transition-colors"
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaYoutube size={24} />
      </a>
      <a 
        className="text-gray-400 hover:text-white transition-colors"
        href="https://tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaTiktok size={24} />
      </a>

      
    </div>
  );
};

export default Social;