import React from 'react';
import MainImage from './main_image';
import UserDescription from './user_description';
import ExtraPhotoDetails from './extra_photo_details';
// Children: MainImage, UserDescription, ExtraPhotoDetails

const PhotoDetail = ({photo, photos}) => (
  <div>
    <MainImage photo={photo} photos={photos}/>
    <UserDescription/>
    <ExtraPhotoDetails/>
  </div>
);

export default PhotoDetail;
