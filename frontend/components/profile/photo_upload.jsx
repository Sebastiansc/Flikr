import React from 'react';
import { values } from 'lodash';

const PhotoUpload = ({createPhoto, setId, albumId, show}) => {
  const formatUrl = (url, size) => {
    const rootUrl = url.slice(0,46);
    const tailUrl = url.slice(46);
    return `${rootUrl}c_scale,h_${size}/${tailUrl}`;
  };

  const openWidget = () => {
    window.cloudinary.openUploadWidget(window.cloudinaryOptions,
      (errors, photos) => {
        if(!values(errors).length) {
         photos.forEach(photo => {
           const thumbUrl = formatUrl(photo.secure_url, 145);
           const showUrl = formatUrl(photo.secure_url, 1200);
           const feedUrl = formatUrl(photo.secure_url, 500);
           createPhoto({
             photo: {
               img_url: photo.secure_url,
               title: photo.original_filename,
               thumb_url: thumbUrl,
               show_url: showUrl,
               feed_url: feedUrl
             },
             album_id: albumId
           });
         });
        }
    });
  };

  return(
    <li id={setId} style={{display: `${show}`}}
      className='photo-upload'
      onClick={() => openWidget()}>
      <i className="fa fa-upload in-cover-photo" aria-hidden="true"></i>
    </li>
  );
};

export default PhotoUpload;
