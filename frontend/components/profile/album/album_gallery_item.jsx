import React from 'react';
import { Link } from 'react-router';

const AlbumGalleryItem = ({album, deleteAlbum}) => (
  <div className='album-gallery-item'
    key={album.id}
    style={{backgroundImage: `url('${album.cover_photo.feed_url}')`}}>
    <Link to={`home/album/${album.id}`} className='album-link-overlay'></Link>
    <div className='album-tools'>
      <h4>{album.title}</h4>
      <span>{album.photos.length} photos</span>
    </div>
    <i className="fa fa-trash-o" id='album-delete' aria-hidden="true"
      onClick={() => deleteAlbum(album.id)}>
    </i>
  </div>
);

export default AlbumGalleryItem;
