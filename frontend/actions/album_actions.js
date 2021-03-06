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
export const DROP_PHOTO = 'DROP_PHOTO';
export const CLEAR_PHOTO = 'CLEAR_PHOTO';
export const CHANGE_COVER_PHOTO = 'CHANGE_COVER_PHOTO';
export const UPDATE_COVER_PHOTO = 'UPDATE_COVER_PHOTO';
export const FETCH_ALBUM_PHOTOS = 'FETCH_ALBUM_PHOTOS';
export const RECEIVE_ALBUM_PHOTOS = 'RECEIVE_ALBUM_PHOTOS';
export const RECEIVE_ALBUM_PHOTO = 'RECEIVE_ALBUM_PHOTO';

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

export const dropPhoto = (photoId, albumId) => ({
  type: DROP_PHOTO,
  albumId,
  photoId,
});

export const clearPhoto = photo => ({
  type: CLEAR_PHOTO,
  photo,
});

export const changeCoverPhoto = (albumId, photoId) => ({
  type: CHANGE_COVER_PHOTO,
  albumId,
  photoId
});

export const updateCoverPhoto = (coverPhoto, albumId) => ({
  type: UPDATE_COVER_PHOTO,
  coverPhoto,
  albumId
});

export const fetchAlbumPhotos = albumId => ({
  type: FETCH_ALBUM_PHOTOS,
  albumId
});

export const receiveAlbumPhotos = photos => ({
  type: RECEIVE_ALBUM_PHOTOS,
  photos
});

export const receiveAlbumPhoto = photo => ({
  type: RECEIVE_ALBUM_PHOTO,
  photo
});
