import React from 'react';
import Masonry from '../../photos/explore';
import { Link } from 'react-router';
import AlbumGalleryItem from './album_gallery_item';

const AlbumGallery = ({albums, deleteAlbum}) => (
  <main className='albums-gallery'>
    {albums.map(album => (
      <AlbumGalleryItem key={album.id} album={album}
          length={album.photos.length}
          deleteAlbum={deleteAlbum}
          klass='album-gallery'/>
    ))}
  </main>
);

export default AlbumGallery;
