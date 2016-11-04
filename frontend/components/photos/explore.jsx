import React from 'react';
import ExploreGalleryItem from './explore_gallery_item';
import JustifiedLayout from 'react-justified-layout';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const ExploreGallery = ({photos, klass}) =>(
  <div>
    <Masonry className={klass} options={masonryOptions}>
      {photos.map( photo => {
        return (
          <ExploreGalleryItem
            key={photo.id} photo={photo}/>
        );
      })}
    </Masonry>
  </div>
);

export default ExploreGallery;
