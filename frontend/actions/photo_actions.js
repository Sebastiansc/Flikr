export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const CREATE_PHOTO = 'CREATE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';
export const RENEW_PHOTO = 'RENEW_PHOTO';
export const FETCH_BY_TAG = 'FETCH_BY_TAG';

export const requestPhotos = tags => ({
  type: REQUEST_PHOTOS,
  tags
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const createPhoto = photo => ({
  type: CREATE_PHOTO,
  photo
});

export const deletePhoto = id => ({
  type: DELETE_PHOTO,
  id
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const updatePhoto = photo => ({
  type: UPDATE_PHOTO,
  photo
});

export const renewPhoto = photo => ({
  type: RENEW_PHOTO,
  photo
});

export const fetchByTag = id => ({
  type: FETCH_BY_TAG,
  id
});
