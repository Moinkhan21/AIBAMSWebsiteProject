import React, { useState } from 'react';

const GridGame = () => {
  // Initial grid state with 8 elements
  const initialGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, ]
  ];

  const [grid, setGrid] = useState(initialGrid);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (item) => {
    // If the item is already expanded, collapse it
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      // Expand the clicked item
      setExpandedItem(item);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg">
        {grid.map((row, rowIndex) => 
          row.map((item, colIndex) => (
            <div 
              key={`${rowIndex}-${colIndex}`}
              className={`
                w-24 h-24 
                flex items-center justify-center 
                border 
                transition-all duration-300 
                ${item === null ? 'bg-gray-200' : 'bg-blue-500 text-white'}
                ${expandedItem === item 
                  ? 'col-span-2 w-52 h-24' 
                  : 'col-span-1 w-24 h-24'}
                cursor-pointer
                overflow-hidden
              `}
              onClick={() => item !== null && handleItemClick(item)}
            >
              {item !== null ? item : ''}
            </div>
          ))
        )}
      </div>
      <p className="mt-4 text-gray-600">
        Click an item to expand it to two spaces
      </p>
    </div>
  );
};

export default GridGame;