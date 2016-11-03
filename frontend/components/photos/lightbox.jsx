import React from 'react';

const LightBox = ({photo}) => (
  <div className='lightbox-container'>
    <div className='lightbox-image'>
      <img src={photo.img_url}></img>
    </div>
    <span className='lightbox-r-arrow'>></span>
    <span className='lightbox-l-arrow'>prev</span>
  </div>
);

export default LightBox;
