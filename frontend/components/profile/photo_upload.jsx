import React from 'react';

const PhotoUpload = ({createPhoto, setId, albumId, show}) => {
  const formatUrl = (url, size) => {
    const rootUrl = url.slice(0,46);
    const tailUrl = url.slice(46);
    return `${rootUrl}c_scale,h_${size}/${tailUrl}`;
  };

  const openWidget = () => cloudinary.openUploadWidget(cloudinaryOptions,
       (errors, photos) => {
         photos.forEach(photo => {
           const thumb_url = formatUrl(photo.secure_url, 145);
           const show_url = formatUrl(photo.secure_url, 1200);
           const feed_url = formatUrl(photo.secure_url, 700);
           createPhoto({
             photo: {
               img_url: photo.secure_url,
               title: photo.original_filename,
               thumb_url,
               show_url,
               feed_url
             },
            album_id: albumId,
           });
        });
      }
    );

  return(
    <li id={setId} style={{display: `${show}`}}
      className='photo-upload'
      onClick={() => openWidget()}>
      <i className="fa fa-upload in-cover-photo" aria-hidden="true"></i>
    </li>
  );
};

export default PhotoUpload;
