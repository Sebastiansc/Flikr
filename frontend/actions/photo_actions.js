export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const CREATE_PHOTO = 'CREATE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';


const requestPhotos = tags => ({
  type: REQUEST_PHOTOS,
  tags
});

const receivePhotos = photos => ({
  type: REQUEST_PHOTOS,
  photos
});

const receivePhoto = photos => ({
  type: RECEIVE_PHOTO,
  photos
});

const createPhoto = photo => ({
  type: REQUEST_PHOTOS,
  photo
});

const deletePhoto = id => ({
  type: REQUEST_PHOTOS,
  id
});

const updatePhoto = photo => ({
  type: UPDATE_PHOTO,
  photo
});

const removePhoto = id => ({
  type: REMOVE_PHOTO,
  id
});
