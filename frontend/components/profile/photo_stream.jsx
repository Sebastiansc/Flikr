import React from 'react';
import JustifiedGallery from '../photos/justified_gallery';

const PhotoStream = ({ photos, userId }) => {
  return(
    <main className='photostream'>
      <div className='photo-stream-tools'></div>
      <JustifiedGallery photos={photos} rowHeight={350}
        link={`/home/userPhotos/${userId}/`}/>
    </main>
  );
};

export default PhotoStream;
