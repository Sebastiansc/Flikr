import React from 'react';
import JustifiedGallery from './justified_gallery';

const ExploreGallery = ({photos, klass, requestPhotos}) =>(
  <div>
    <JustifiedGallery photos={photos}
        rowHeight={230}
        requestPhotos={requestPhotos}/>
  </div>
);

export default ExploreGallery;
