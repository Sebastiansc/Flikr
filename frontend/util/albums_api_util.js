export const fetchUserAlbums = (userId, success) => {
  $.ajax({
    url: `api/users/${userId}/albums`,
    success
  });
};

export const fetchPhotoAlbums = (photoId, success) => {
  $.ajax({
    url: `api/photos/${photoId}/albums`,
    success
  });
};

export const postAlbum = (album, success) => {
  $.ajax({
    url: `api/albums`,
    type: 'post',
    data: album,
    success
  });
};

export const patchAlbum = (album, success) => {
  $.ajax({
    url: `api/albums/${album.id}`,
    type: 'patch',
    data: {album},
    success
  });
};

export const fetchAlbum = (id, success) => {
  $.ajax({
    url: `api/albums/${id}`,
    success
  });
};

export const deleteAlbum = (id, success) => {
  $.ajax({
    url: `api/albums/${id}`,
    type: 'delete',
    success
  });
};

export const addPhoto = (albumId, photoId, success) => {
  $.ajax({
    url: `api/albums/${albumId}/${photoId}`,
    type: 'post',
    success
  });
};

export const createAndAddPhoto = (albumId, photo, success) => {
  $.ajax({
    url: `api/albums/${albumId}/photos`,
    type: 'post',
    data: {photo},
    success
  });
};

export const dropPhoto = (albumId, photoId, success) => {
  $.ajax({
    type: 'delete',
    url: `api/albums/${albumId}/${photoId}`,
    success
  });
};

export const changeCoverPhoto = (albumId, photoId) => {
  $.ajax({
    type: 'post',
    url: `api/albums/${albumId}/${photoId}`
  });
};
