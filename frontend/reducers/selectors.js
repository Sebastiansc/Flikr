import {values} from 'lodash';

export const photosArray = photos => {
  return values(photos) || [];
};

export const commentsArray = comments => {
  return values(comments) || [];
};

export const selectPhoto = (photos, id) => {
  return photosArray(photos).filter( photo => (
    photo.id === id
  ))[0] || {} ;
};

export const publicPhotos = photos => (
  values(photos).filter(photo => photo.public)
);


export const findTag = (tags, tag) => {
  for (let i = 0; i < tags.length; i++) {
    if(tags[i].id === tag.id) return i;
  }
};
