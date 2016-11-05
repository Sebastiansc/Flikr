import React from 'react';
import ExploreGallery from '../photos/explore';

const PhotoStream = ({photos, requestPhotos}) => {
  const location = window.location.hash.slice(2);
  return(
    <main>
      <div className='photo-stream-tools'></div>
      <ExploreGallery photos={photos} requestPhotos={requestPhotos}
        klass={'profile-gallery'}/>
    </main>
  );
};

export default PhotoStream;
