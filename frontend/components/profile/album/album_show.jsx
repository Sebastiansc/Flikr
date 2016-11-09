import React from 'react';
import ExploreGallery from '../../photos/explore';
import AlbumUpdateArea from './album_update_area';

const AlbumShow = ({album, updateAlbum, createAndAddPhoto}) => {
  return(
    <div className='album-show'>
      <div className='album-show-cover'
        style={{backgroundImage: `url('${album.cover_photo.feed_url}')`}}>
        <div className='dimining'></div>
        <AlbumUpdateArea album={album} updateAlbum={updateAlbum}
            createAndAddPhoto={createAndAddPhoto}/>
        <span className='autorship'>{`By: ${album.owner.username}`}</span>
        <i className="fa fa-pencil in-cover-photo" aria-hidden="true"></i>
      </div>
      <ExploreGallery photos={album.photos}/>
    </div>
  );
};

export default AlbumShow;
