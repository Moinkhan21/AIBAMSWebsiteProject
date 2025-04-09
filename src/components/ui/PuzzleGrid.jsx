import { useState, useMemo } from "react";
import { motion, LayoutGroup } from "framer-motion";
import "@flaticon/flaticon-uicons/css/all/all.css";

// Define puzzle tiles with emoji icons and Tailwind background colors
const items = [
  {
    id: 1,
    icon: 'fi-tr-browser text-black',
    title: "Website & App",
    description: "Description for tile 1",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 2,
    icon: 'fi fi-ts-megaphone-announcement-leader text-black',
    title: "Sales & Marketing",
    description: "Description for tile 2",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 3,
    icon: 'fi fi-ts-hr text-black',
    title: "HR & Recruitment",
    description: "Description for tile 3",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 4,
    icon: 'fi fi-tr-calculator-money text-black',
    title: "Finance & Accounting",
    description: "Description for tile 4",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 5,
    icon: 'fi fi-tr-supplier-alt text-black',
    title: "ERP & CRM",
    description: "Description for tile 5",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 6,
    icon: 'fi fi-tr-operation text-black',
    title: "Operations",
    description: "Description for tile 6",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 7,
    icon: 'fi fi-tr-dolly-flatbed text-black',
    title: "Logistics & Supply Chain",
    description: "Description for tile 7",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
  {
    id: 8,
    icon: "",
    title: "ABCD",
    description: "Description for tile 8",
    color: "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500]",
  },
];

// Main component: PuzzleGrid
const PuzzleGrid = () => {
  const [activeItem, setActiveItem] = useState(1); // Initially active tile

  // Calculate how the tiles should be arranged based on the active one
  const layout = useMemo(() => {
    let firstRow = [0, 1];
    let secondRow = [2, 3, 4];
    let thirdRow = [5, 6, 7];

    switch (activeItem) {
      case 3:
      case 4:
        firstRow = [0, 1, 4];
        secondRow = [2, 3];
        break;
      case 5:
        firstRow = [1, 4];
        secondRow = [0, 2, 3];
        break;
      case 6:
      case 7:
        firstRow = [1, 4, 3];
        secondRow = [0, 2, 7];
        thirdRow = [5, 6];
        break;
      case 8:
        firstRow = [1, 4, 3];
        secondRow = [2, 7];
        thirdRow = [0, 5, 6];
        break;
    }

    return { firstRow, secondRow, thirdRow };
  }, [activeItem]);

  return (
    <div className="flex flex-col w-full h-full max-w-2xl mx-auto gap-2">
      {/* Grid Heading */}
      <h2 className="text-center mb-4 text-lg font-semibold text-gray-700">
        Puzzle Grid Challenge
      </h2>

      {/* Group layout for animations */}
      <LayoutGroup>
        {[layout.firstRow, layout.secondRow, layout.thirdRow].map(
          (row, idx) => (
            <Row
              key={idx}
              row={row}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          )
        )}
      </LayoutGroup>

      {/* Hint for interaction */}
      <p className="text-center mt-4 text-gray-600 text-sm">
        Tap a tile to expand and solve the puzzle visually!
      </p>
    </div>
  );
};

// Row component: one horizontal line of tiles
function Row({ row, activeItem, setActiveItem }) {
  return (
    <div className="flex gap-2">
      {row.map((index) => {
        const item = items[index];
        return (
          <PuzzleTile
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        );
      })}
    </div>
  );
}

// PuzzleTile component: an individual animated tile
function PuzzleTile({ item, isActive, onClick }) {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden ${item.color}`}
      onClick={onClick}
      layout
      layoutId={`item-${item.id}`} // ID required for shared layout animation
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        flex: isActive ? 2 : 1, // Make active tile expand
        height: "200px",
        //width: isActive ? "300px" : "150px", // Double width when active
        display: "flex",
        flexDirection: isActive ? "row" : "column",
        alignItems: "center",
        justifyContent: isActive ? "space-between" : "center",
        //marginLeft: isActive ? "5rem" : "0",
        gap: isActive ? "1rem" : "0",
      }}
    >
      <motion.div
        className={`${
          isActive ? "w-1/3 items-center" : ""
        } flex flex-col justify-center text-center gap-2`}
        layout
        style={{
          marginLeft: isActive ? "1rem" : "0",
        }}
      >
        {/* Icon scaling when active */}
        <motion.div
          className="text-4xl"
          animate={{ scale: isActive ? 1.5 : 1 }}
          transition={{ duration: 0.2 }}
        >
               <i className={item.icon}></i>
        </motion.div>

        {/* Title - always visible */}
        <div className="text-base font-semibold text-black">{item.title}</div>
      </motion.div>

      {/* Right Column: Description + Button */}
      {isActive && (
        
        <motion.div
          className="w-2/3 flex flex-col justify-center"
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm mb-2 text-black">{item.description}</p>
          <button className="self-start px-3 py-1 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-100 transition">
            Learn More
          </button>
        </motion.div>
      )}

      {/* Active glow effect */}
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

export default PuzzleGrid;
