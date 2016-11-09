export const FETCH_USER_ALBUMS = 'FETCH_USER_ALBUMS';
export const FETCH_PHOTO_ALBUMS = 'FETCH_PHOTO_ALBUMS';
export const FETCH_ALBUM = 'FETCH_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const ADD_PHOTO = 'ADD_PHOTO';
export const CREATE_AND_ADD_PHOTO = 'CREATE_AND_ADD_PHOTO';
export const CREATE_ALBUM = 'CREATE_ALBUM';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const UPDATE_ALBUM = 'UPDATE_ALBUM';
export const DELETE_ALBUM = 'DELETE_ALBUM';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';

export const fetchUserAlbums = userId => ({
  type: FETCH_USER_ALBUMS,
  userId
});

export const fetchPhotoAlbums = photoId => ({
  type: FETCH_PHOTO_ALBUMS,
  photoId
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const fetchAlbum = albumId => ({
  type: FETCH_ALBUM,
  albumId
});

export const createAlbum = (album, photoIds) => ({
  type: CREATE_ALBUM,
  album,
  photoIds
});

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const updateAlbum = album => ({
  type: UPDATE_ALBUM,
  album
});

export const deleteAlbum = albumId => ({
  type: DELETE_ALBUM,
  albumId
});

export const removeAlbum = album => ({
  type: REMOVE_ALBUM,
  album
});

export const addPhoto = (albumId, photoId) => ({
  type: ADD_PHOTO,
  albumId,
  photoId
});

export const createAndAddPhoto = (albumId, photo) => ({
  type: CREATE_AND_ADD_PHOTO,
  albumId,
  photo
});
