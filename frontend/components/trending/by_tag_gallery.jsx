import React from 'react';
import ExploreGallery from '../photos/explore';

const ByTagGallery = ({photos, tag}) => {
  return(
    <div className='centered-by-tag'>
      <h1>{tag.name}</h1>
      <ExploreGallery photos={photos}/>
    </div>
  );
};

export default ByTagGallery;
