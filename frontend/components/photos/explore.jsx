import React from 'react';
import ExploreGalleryItem from './explore_gallery_item';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0.5
};

const ExploreGallery = props => (
  <div className='explore-gallery'>
    <h3>Explore</h3>
    <Masonry className={'my-gallery-class'} options={masonryOptions}>
      {props.photos.map( photo => (
        <ExploreGalleryItem photo={photo}/>
      ))}
    </Masonry>
  </div>
);

export default ExploreGallery;
