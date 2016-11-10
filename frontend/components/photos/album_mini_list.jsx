import React from 'react';
import { Link } from 'react-router';

const AlbumMiniList = ({albums}) => (
  <div className='albums-mini-list'>
    {albums.map(album => {
      const photos = album.photos || [];
      return(
        <div key={album.id} className='mini-gallery-item-container'>
          <figure className='mini-gallery-item'
            style={{backgroundImage: `url('${album.cover_photo.thumb_url}')`}}>
            <Link className='mini-image-link 'to={`home/album/${album.id}`}/>
          </figure>
          <div className='mini-gallery-info'>
            <Link
               to={`home/album/${album.owner.id}/${album.id}`}>{album.title}
             </Link>
            <span>
              {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
            </span>
          </div>
        </div>
      );
    })}
  </div>
);

export default AlbumMiniList;
