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
  values(photos).filter(photo => photo.public)
);


export const findPhoto = (photos, id) => {
  for (let i = 0; i < photos.length; i++) {
    if(photos[i].id === id) return i;
  }
};
