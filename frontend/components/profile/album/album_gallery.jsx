import React from 'react';
import Masonry from '../../photos/explore';
import { Link } from 'react-router';
import AlbumGalleryItem from './album_gallery_item';

const AlbumGallery = ({albums}) => {
  return(
    <main className='albums-gallery'>
      {albums.map(album => (
        <AlbumGalleryItem album={album}/>
      ))}
    </main>
  );
};

export default AlbumGallery;
