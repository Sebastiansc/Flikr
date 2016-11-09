import React from 'react';
import { Link, withRouter } from 'react-router';

const AlbumGalleryItem = ({album, deleteAlbum, router}) => (
  <div className='album-gallery-item'
    key={album.id}
    style={{backgroundImage: `url('${album.cover_photo.feed_url}')`}}>
    <Link to={`home/album/${album.id}`} className='album-link-overlay'></Link>
    <div className='album-tools'
        onClick={() => router.push(`home/album/${album.id}`)}>
      <h4>{album.title}</h4>
      <span>
        {1 + album.photos.length}
        {(1 + album.photos.length > 1) ? ' photos' : ' photo'}
      </span>
    </div>
    <i className="fa fa-trash-o" id='album-delete' aria-hidden="true"
      onClick={() => deleteAlbum(album.id)}>
    </i>
  </div>
);

export default withRouter(AlbumGalleryItem);
