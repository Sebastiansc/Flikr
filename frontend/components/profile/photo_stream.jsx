import React from 'react';
import ExploreGallery from '../photos/explore';

const PhotoStream = ({photos, requestPhotos}) => {
  return(
    <main>
      <div className='photo-stream-tools'></div>
      <ExploreGallery photos={photos} requestPhotos={requestPhotos}/>
    </main>
  );
};

export default PhotoStream;
