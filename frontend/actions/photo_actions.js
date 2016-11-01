export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const CREATE_PHOTO = 'CREATE_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const UPDATE_PHOTO = 'UPDATE_PHOTO';


export const requestPhotos = tags => ({
  type: REQUEST_PHOTOS,
  tags
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const createPhoto = photo => ({
  type: CREATE_PHOTO,
  photo
});

export const deletePhoto = id => ({
  type: DELETE_PHOTO,
  id
});

export const updatePhoto = photo => ({
  type: UPDATE_PHOTO,
  photo
});

export const removePhoto = id => ({
  type: REMOVE_PHOTO,
  id
});
