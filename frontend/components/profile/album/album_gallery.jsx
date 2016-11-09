import React from 'react';
import Masonry from '../../photos/explore';
import { Link } from 'react-router';
import AlbumGalleryItem from './album_gallery_item';

const AlbumGallery = ({albums, deleteAlbum}) => {
  return(
    <main className='albums-gallery'>
      {albums.map(album => (
        <AlbumGalleryItem key={album.id} album={album}
            deleteAlbum={deleteAlbum}/>
      ))}
    </main>
  );
};

export default AlbumGallery;
