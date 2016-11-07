import React from 'react';
import Masonry from 'react-masonry-component';
import TrendingGalleryItem from './tag_gallery_item';

const masonryOptions = {
  transitionDuration: 0
};

const TrendingGallery = ({tags}) => {
  return(
    <main className='trending-gallery'>
      <h1>Trending</h1>
      <Masonry>
        {tags.map(tag => <TrendingGalleryItem key={tag.id} tag={tag}/>)}
      </Masonry>
    </main>
  );
};

export default TrendingGallery;
