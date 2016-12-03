import React from 'react';
import JustifiedGallery from '../photos/justified_gallery';

const ByTagGallery = ({photos, tag}) => {
  return(
    <div className='centered-by-tag'>
      <h1>{tag.name}</h1>
      <JustifiedGallery rowHeight={250} photos={photos}
        link={`/home/tagPhotos/${tag.id}/`}/>
    </div>
  );
};

export default ByTagGallery;
