import React from 'react';
import { Link } from 'react-router';

const AlbumGalleryItem = ({album}) => (
  <div className='album-gallery-item'
    key={album.id}
    style={{backgroundImage: `url('${album.cover_photo.feed_url}')`}}>
  <Link to={`home/profile/${album.id}`} className='album-link-overlay'></Link>
    <div className='album-tools'>
      <h4>{album.title}</h4>
      <span>{album.photos.length} photos</span>
    </div>
  </div>
);

export default AlbumGalleryItem;
