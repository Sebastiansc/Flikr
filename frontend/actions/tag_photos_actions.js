export const FETCH_BY_TAG = 'FETCH_BY_TAG';
export const RECEIVE_TAG_PHOTOS = 'RECEIVE_TAG_PHOTOS';

export const fetchByTag = tagId => ({
  type: FETCH_BY_TAG,
  tagId
});

export const receiveTagPhotos = photos => ({
  type: RECEIVE_TAG_PHOTOS,
  photos
});
