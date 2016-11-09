import React from 'react';

const AlbumUploadGallery = props => (
  <div className='album-upload-stream'>
    {props.photos.map(photo => (
      <div key={photo.id}
          className={`album-upload-item ${props.setItemClass(photo.id)}`}
          style={{backgroundImage: `url('${photo.feed_url}')`}}
          onClick={() => props.toggleInclusion(photo.id)}>
      <i className={`fa fa-check ${props.setCheckClass(photo.id)}`}
         aria-hidden="true">
      </i>
      </div>
    ))}
  </div>
);

export default AlbumUploadGallery;
