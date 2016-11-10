import React from 'react';
import Tags from './tags';
import {values} from 'lodash';
import AlbumMiniList from './album_mini_list';
import FavoriteContainer from './favorites_container';

const ExtraPhotoDetail = ({photo, comments, createTag, destroyTag}) => {
  return(
    <section className='extras-section'>
      <div className='extra-top-row'>
        <div className='count'>
          <span>{values(comments).length}</span>
          <span>comments</span>
        </div>
        <div className='count'>
          <span>{values(photo.favorites).length}</span>
          <span>faves</span>
        </div>
        <FavoriteContainer photo={photo}/>
        <div className='taken-info'>
          <span>Taken {photo.taken} ago</span>
          <span className='copyright'>&copy;</span>
        </div>
      </div>
      <AlbumMiniList albums={values(photo.albums)}/>
      <Tags tags={photo.tags} createTag={createTag} destroyTag={destroyTag}/>
    </section >
  );
};

export default ExtraPhotoDetail;
