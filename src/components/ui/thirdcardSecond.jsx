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
        </div>
      ))}
    </div>
  );
};

export default CardList;