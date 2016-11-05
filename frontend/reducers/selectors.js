import {values} from 'lodash';

export const photosArray = photos => {
  return values(photos) || [];
};

export const selectPhoto = (photos, id) => {
  return photosArray(photos).filter( photo => (
    photo.id === id
  ))[0] || {} ;
};

export const publicPhotos = photos => (
  photos.filter(photo => photo.public)
);
