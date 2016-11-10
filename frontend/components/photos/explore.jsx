import React from 'react';
import JustifiedGallery from './justified_gallery';

const ExploreGallery = ({photos, klass}) =>(
  <div>
    <JustifiedGallery photos={photos}
        rowHeight={230}/>
  </div>
);

export default ExploreGallery;
