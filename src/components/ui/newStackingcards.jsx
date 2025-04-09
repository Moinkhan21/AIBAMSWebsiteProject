import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/VerticalScrollSection.css";
import StackedCards from "../ui/semistacked.jsx";
import CardsAgainstDevs from "../ui/cardSecond.jsx";
import CardList from "../ui/thirdcardSecond.jsx";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const VerticalScrollSection = () => {
  const scrollSectionRef = useRef(null);
  const itemsRef = useRef([]);-

  useEffect(() => {
    const section = scrollSectionRef.current;
    const items = itemsRef.current;

    // Initialize items' positions
    items.forEach((item, index) => {
      if (index !== 0) {
        gsap.set(item, { yPercent: 100 });
      }
    });

    // Create GSAP timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top",
        end: () => `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
      },
      defaults: { ease: "none" },
    });

    items.forEach((item, index) => {
      timeline.to(item, {
        scale: 0.9,
        borderRadius: "10px",
      });

      if (index < items.length - 1) {
        timeline.to(
          items[index + 1],
          {
            yPercent: 0,
          },
          "<"
        );
      }
    });

    // Cleanup ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="vss-main-wrapper">
      <div className="vss-section">
        <div className="vss-container-medium">
          <div className="vss-padding-vertical">
            
          </div>
        </div>
      </div>

      <div className="vss-scroll-section vss-vertical-section vss-section" ref={scrollSectionRef}>
        <div className="vss-wrapper">
          <div role="list" className="vss-list" style={{ position: 'relative' }}>
            {/* First Card */}
            <div
              role="listitem"
              className="vss-item"
              ref={(el) => (itemsRef.current[0] = el)}
              style={{
                backgroundColor: '#214799',
                position: 'absolute',
                width: '90%',
                height: '100%',
                top: 0,
                margin: 'auto',
                borderRadius: '20px'
              }}
            >
              <div className="vss-item_content !bg-transparent">
                <h2>Stacked Cards Section</h2>
                <p className="vss-item_p">
                  Interactive stacked cards with smooth animations and transitions.
                </p>
              </div>
              <div className="vss-item_media mt-50">
                <StackedCards />
              </div>
            </div>

            {/* Second Card */}
            <div
              role="listitem"
              className="vss-item"
              ref={(el) => (itemsRef.current[1] = el)}
              style={{
                backgroundColor: '#055c9d',
                position: 'absolute',
                width: '90%',
                height: '100%',
                top: 0,
                margin: 'auto',
                borderRadius: '20px'

              }}
            >
              <div className="vss-item_content !bg-transparent">
                
              </div>
              <div className="">
                <CardsAgainstDevs />
              </div>
            </div>

            {/* Third Card */}
            <div
              role="listitem"
              className="vss-item"
              ref={(el) => (itemsRef.current[2] = el)}
              style={{
                backgroundColor: '#292929',
                position: 'absolute',
                width: '90%',
                height: '100%',
                top: 0,
                margin: 'auto',
                borderRadius: '20px'
              }}
            >
              <div className="vss-item_content !bg-transparent">
                
              </div>
              <div className="vss-item_media  ">
                <CardList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vss-section">
        <div className="vss-padding-global">
          <div className="vss-container-medium">
            <div className="vss-padding-vertical">
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerticalScrollSection;


