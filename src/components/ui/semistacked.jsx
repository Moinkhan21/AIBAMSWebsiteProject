import React from "react";


const StackedCards = () => {
  return (
    <div className="h-[500px] flex flex-col items-center justify-center">
      {/* Card 1 */}
      <div
        className="grid w-[350px] h-[175px] rounded-lg shadow-lg z-[3] bg-[#0dcb97] hover:mt-[100px] mt-[-50px] md:hover:mt-[-75px]"
        style={{
          gridTemplateColumns: "50px 250px",
          transform: "rotateX(50deg) rotateZ(50deg)",
          perspective: "400px",
          transition: "all 1s ease",
        }}
      >
        <p className="text-center text-[25px]">1</p>
        <p className="text-center text-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Card 2 */}
      <div
        className="grid w-[350px] h-[175px] rounded-lg shadow-lg z-[2] bg-[#4d3f98] text-white hover:mt-[100px] mt-[-50px]"
        style={{
          gridTemplateColumns: "50px 250px",
          transform: "rotateX(50deg) rotateZ(50deg)",
          perspective: "400px",
          transition: "all 1s ease",
        }}
      >
        <p className="text-center text-[25px]">2</p>
        <p className="text-center text-[25px]">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Card 3 */}
      <div
        className="grid w-[350px] h-[175px] rounded-lg shadow-lg z-[1] hover:mt-[100px] mt-[-50px]"
        style={{
          gridTemplateColumns: "50px 250px",
          transform: "rotateX(50deg) rotateZ(50deg)",
          perspective: "400px",
          transition: "all 1s ease",
        }}
      >
        <p className="text-center text-[25px]">3</p>
        <p className="text-center text-[25px]">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
    </div>
  );
};

export default StackedCards;