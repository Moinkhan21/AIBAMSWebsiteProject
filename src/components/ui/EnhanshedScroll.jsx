import React from 'react'; 
import '../../Styles/EnchantedScroll.css';

const EnchantedScroll = () => {
  const paragraphTexts = [
    "Empowering businesses with AI-driven solutions for smarter decisions.",
    "Seamless automation, intelligent insights, and next-gen efficiency.",
    "Transforming ideas into reality with cutting-edge technology."
  ];
  
  return (
    <div className="enchanted-wrapper">
      <div className="enchanted-section">
        <main>
          <div className="scrollbar ml-10 mt-70" />
          <div className="containerModified">
            {[1, 2, 3].map((num, index) => (
              <p key={num} className={`paragraph-${num}`}>
                {paragraphTexts[index]}
              </p>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnchantedScroll;