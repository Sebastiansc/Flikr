import React from 'react';
import JustifiedGallery from '../../photos/justified_gallery';

const FavoritesGallery = ({photos}) => (
  <main className="photostream">
    <JustifiedGallery rowHeight={350} photos={photos}/>
  </main>
);

export default FavoritesGallery;
