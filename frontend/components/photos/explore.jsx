import React from 'react';
import JustifiedGallery from './justified_gallery';

const ExploreGallery = ({photos, klass, requestPhotos}) =>(
  <div>
    <JustifiedGallery photos={photos} rowHeight={230}
      link={`/home/photos/`}
      scroll={true}
      requestPhotos={requestPhotos}/>
  </div>
);

export default ExploreGallery;
