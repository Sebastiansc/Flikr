import React from 'react';
import JustifiedGallery from '../../photos/justified_gallery';

const FavoritesGallery = ({photos, personId}) => (
  <main className="photostream">
    <JustifiedGallery rowHeight={350} photos={photos} favorites={true}
        personId={personId}/>
  </main>
);

export default FavoritesGallery;
