import React from 'react';
import '../../Styles/thirdcardSecond.css'; // Import the CSS file

const CardList = () => {
  const cards = [
    { id: 1, title: 'ichi' },
    { id: 2, title: 'nie' },
    { id: 3, title: 'sanen' },
    { id: 4, title: 'yoen' },
  ];

  return (
    <div className="card-list-container">
      {cards.map((card) => (
        <div key={card.id} className="card-list-card">
          <h3 className="card-list-title">{card.title}</h3>
          <div className="card-list-bar">
            <div className="card-list-emptybar"></div>
            <div className="card-list-filledbar"></div>
          </div>
          {/* <div className="card-list-circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="card-list-stroke" cx="60" cy="60" r="50" />
            </svg>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CardList;