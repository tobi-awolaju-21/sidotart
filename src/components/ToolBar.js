import React from 'react';
import './componetStyles/ToolBar.css'

const ToolBar = () => {
    // Check if the window width is less than or equal to 767 pixels
    const isMobile = window.innerWidth <= 767;
  
    return (
      <div className={`toolbar ${isMobile ? 'mobile' : ''}`}>
        <span style={{ padding: '15px', color: 'black', fontSize: '30px' }}>SidotArt</span>
       
      <div id="items">
        <div>
            Shop.
        </div>

        <div>
            . Portfolio.
        </div>

        <div>
            .  Mailing list.
        </div>

        <div>
            .  about
        </div>

       </div>

       
        <div id="toggle-btn">&#9776;</div>
      </div>
    );
  };
  
  export default ToolBar;
  