import React from 'react';
import { Link, withRouter } from 'react-router';

const AlbumGalleryItem = ({klass, length, album, deleteAlbum, router}) => (
  <div className={`${klass}-item`}
    key={album.id}
    style={{backgroundImage: `url('${album.cover_photo.feed_url}')`}}>
    <Link to={`home/album/${album.id}`} className='album-link-overlay'></Link>
    <div className={`${klass}-tools`}
        onClick={() => router.push(`home/album/${album.id}`)}>
      <h4>{album.title}</h4>
      <span>
        {length}
        {(length === 1) ? ' photo' : ' photos'}
      </span>
    </div>
    <i className="fa fa-trash-o" id={`${klass}-delete`} aria-hidden="true"
      onClick={() => deleteAlbum(album.id)}>
    </i>
  </div>
);

export default withRouter(AlbumGalleryItem);
