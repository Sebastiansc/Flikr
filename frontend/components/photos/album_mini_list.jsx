import React from 'react';
import { Link } from 'react-router';

const AlbumMiniList = ({albums}) => {
  debugger;
  return (
    <div className='albums-mini-list'>
      {albums.map(album => {
        return(
          <div key={album.id} className='mini-gallery-item-container'>
            <figure className='mini-gallery-item'
              style={{backgroundImage: `url('${album.cover_photo.thumb_url}')`}}>
              <Link className='mini-image-link'
                to={`home/album/${album.owner_id}/${album.id}`}/>
            </figure>
            <div className='mini-gallery-info'>
              <Link
                to={`home/album/${album.owner_id}/${album.id}`}>{album.title}
              </Link>
              <span>
                {album.items} {album.items === 1 ? 'photo' : 'photos'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumMiniList;
