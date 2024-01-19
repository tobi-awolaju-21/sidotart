// components/PortfolioSection.js

import React from 'react';

const portfolioItems = [
  { id: 1, title: 'Project 1', image: 'image1.jpg' },
  { id: 2, title: 'Project 2', image: 'image2.jpg' },
  // Add more projects as needed
];

const PortfolioSection = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <ul>
      {portfolioItems.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <div style={{ backgroundColor: '#333', padding: '10px' }}>
        <button
          style={{
            color: 'white',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '24px',
          }}
          onClick={handleDrawerToggle}
        >
          ☰
        </button>
      </div>
      <nav style={{ display: mobileOpen ? 'block' : 'none' }}>{drawer}</nav>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {portfolioItems.map((item) => (
          <div key={item.id} style={{ flex: '1 0 33%', padding: '10px' }}>
            <PortfolioItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioItem = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
    </div>
  );
};

export default PortfolioSection;
