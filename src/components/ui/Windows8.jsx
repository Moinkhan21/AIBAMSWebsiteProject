import React, { useState, useEffect } from 'react';
import '../../Styles/Dashboard.css';


const tilesData = [
  { id: 1, type: 'r-page', name: 'random-r-page', className: 'tile-big tile-1 slideTextUp', content: ['This tile\'s content slides up', 'View all tasks'] },
  { id: 2, type: 's-page', name: 'random-restored-page', className: 'tile-small bg-[#ff9a00] tile-2 slideTextRight', content: ['→', 'Tile\'s content slides right'] },
  { id: 3, type: 'r-page', name: 'random-r-page', className: 'tile-small last tile-3', content: ['📅'] },
  { id: 4, type: 'r-page', name: 'random-r-page', className: 'tile-big tile-4', image: 'images/blue.jpg', caption: 'Slide-out Caption from left', captionClass: 'caption-left' },
  { id: 5, type: 'r-page', name: 'random-r-page', className: 'tile-big tile-5 !text-white bg-[#fad643]', content: ['☁ Weather'] },
  { id: 6, type: 'r-page', name: 'random-r-page', className: 'tile-big tile-6 slideTextLeft', content: ['💬 Skype', 'Make a Call'] },
  { id: 7, type: 'r-page', name: 'random-r-page', className: 'tile-small tile-7 rotate3d rotate3dX', faces: ['📷', 'Launch Picasa'] },
  { id: 8, type: 'r-page', name: 'random-r-page', className: 'tile-small last tile-8 rotate3d rotate3dY', faces: ['📸', 'Launch Instagram'] },
  { id: 9, type: 'custom-page', name: 'random-r-page', className: 'tile-2xbig tile-9', image: 'images/summer.jpg', caption: 'Fixed Caption: Some Subtitle', captionClass: 'caption-bottom' },
  { id: 10, type: 's-page', name: 'custom-page', className: 'tile-big tile-10', content: ['Windows-8-like Animations with CSS3 & jQuery © Sara Soueidan'] },
];

const pagesData = [
  { name: 'random-restored-page', type: 's-page', title: 'Some minimized App', content: '' },
  { name: 'custom-page', type: 's-page', title: 'Thank You!', content: '' },
  { name: 'random-r-page', type: 'r-page', title: 'App Screen', content: 'Chew iPad power cord...' }, // Truncated for brevity
];

const Tile = ({ tile, onClick }) => {
  const { className, content, image, caption, captionClass, faces } = tile;

  if (image) {
    return (
      <li className={`tile ${className}`} onClick={onClick}>
        <figure>
          <img src={image} alt="Tile" />
          <figcaption className={`tile-caption ${captionClass}`}>{caption}</figcaption>
        </figure>
      </li>
    );
  }

  if (faces) {
    return (
      <li className={`tile ${className}`} onClick={onClick}>
        <div className="faces">
          <div className="front">{faces[0]}</div>
          <div className="back"><p>{faces[1]}</p></div>
        </div>
      </li>
    );
  }

  return (
    <li className={`tile ${className}`} onClick={onClick}>
      {content.map((text, index) => (
        <div key={index}><p dangerouslySetInnerHTML={{ __html: text }}></p></div>
      ))}
    </li>
  );
};

const Page = ({ page, isActive, onClose, tileColor }) => {
  const { name, type, title, content } = page;
  const animationClass = isActive
    ? type === 's-page'
      ? 'slidePageInFromLeft'
      : 'openpage'
    : '';

  return (
    <div
      className={`${type} ${name} ${animationClass}`}
      style={tileColor ? { backgroundColor: tileColor.bg, color: tileColor.text } : {}}
    >
      <div className="page-content">
        <h2 className="page-title">{title}</h2>
        {content && <p>{content}</p>}
      </div>
      <div
        className={`close-button ${type === 's-page' ? 's-close-button' : 'r-close-button'}`}
        onClick={onClose}
        style={tileColor ? { backgroundColor: tileColor.text, color: tileColor.bg } : {}}
      >
        x
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [activePage, setActivePage] = useState(null);
  const [dashboardVisible, setDashboardVisible] = useState(true);

  useEffect(() => {
    if (activePage) {
      setDashboardVisible(false);
    } else {
      setTimeout(() => setDashboardVisible(true), 300); // Match animation duration
    }
  }, [activePage]);

  const handleTileClick = (tile) => {
    const page = pagesData.find(p => p.name === tile.name);
    if (page) {
      const tileElement = document.querySelector(`.tile-${tile.id}`);
      const bg = window.getComputedStyle(tileElement).backgroundColor;
      const text = window.getComputedStyle(tileElement).color;
      setActivePage({ ...page, tileColor: { bg, text } });
    }
  };

  const handleClosePage = () => {
    const pageElement = document.querySelector(`.${activePage.name}`);
    if (activePage.type === 's-page') {
      pageElement.classList.remove('slidePageInFromLeft');
      pageElement.classList.add('slidePageBackLeft');
    } else {
      pageElement.classList.add('slidePageLeft');
      pageElement.classList.remove('openpage');
    }
    setTimeout(() => setActivePage(null), 800); // Match animation duration
  };

  return (
    <div className="demo-wrapper">
      {pagesData.map((page) => (
        <Page
          key={page.name}
          page={page}
          isActive={activePage && activePage.name === page.name}
          onClose={handleClosePage}
          tileColor={activePage && activePage.name === page.name ? activePage.tileColor : null}
        />
      ))}
      <div className={`dashboard clearfix ${dashboardVisible ? '' : 'fadeOutback'}`}>
        <ul className="tiles">
          <div className={`col1 clearfix ${dashboardVisible ? 'fadeInForward-1' : ''}`}>
            {tilesData.slice(0, 4).map((tile) => (
              <Tile key={tile.id} tile={tile} onClick={() => handleTileClick(tile)} />
            ))}
          </div>
          <div className={`col2 clearfix ${dashboardVisible ? 'fadeInForward-2' : ''}`}>
            {tilesData.slice(4, 8).map((tile) => (
              <Tile key={tile.id} tile={tile} onClick={() => handleTileClick(tile)} />
            ))}
          </div>
          <div className={`col3 clearfix ${dashboardVisible ? 'fadeInForward-3' : ''}`}>
            {tilesData.slice(8).map((tile) => (
              <Tile key={tile.id} tile={tile} onClick={() => handleTileClick(tile)} />
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;