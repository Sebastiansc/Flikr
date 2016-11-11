import React from 'react';
import JustifiedGallery from '../photos/justified_gallery';

const PhotoStream = ({photos}) => {
  const location = window.location.hash.slice(2);
  return(
    <main className='photostream'>
      <JustifiedGallery photos={photos} rowHeight={350}/>
    </main>
  );
};

export default PhotoStream;
