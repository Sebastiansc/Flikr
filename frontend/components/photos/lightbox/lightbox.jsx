import React from 'react';
import LightBoxHeader from './lightbox_header';

const LightBox = ({photo}) => {
  return(
    <div className='lightbox-container'>
      <LightBoxHeader author={photo.author} id={photo.id}/>
      <div className='lightbox-image'>
        <img src={photo.img_url}></img>
      </div>
      <span className='lightbox-r-arrow'>></span>
      <span className='lightbox-l-arrow'>prev</span>
    </div>
  );
};

export default LightBox;
