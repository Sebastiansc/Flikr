export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const FETCH_TAGS = 'FETCH_TAGS';
export const CREATE_TAG = 'CREATE_TAG';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const DESTROY_TAG = 'DESTROY_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';
export const FETCH_PHOTO_TAGS = 'FETCH_PHOTO_TAGS';
export const RECEIVE_PHOTO_TAGS = 'RECEIVE_PHOTO_TAGS';

export const fetchTags = () => ({
  type: FETCH_TAGS
});

export const receiveTags = (tags) => ({
  type: RECEIVE_TAGS,
  tags
});

export const createTag = (photoId, tag) => ({
  type: CREATE_TAG,
  photoId,
  tag
});

export const receiveTag = (photoId, tag) => ({
  type: RECEIVE_TAG,
  photoId,
  tag
});

export const destroyTag = (photoId, tagId) => ({
  type: DESTROY_TAG,
  photoId,
  tagId
});

export const removeTag = (photoId, tag) => ({
  type: REMOVE_TAG,
  photoId,
  tag
});

export const fetchPhotoTags = photoId => ({
  type: FETCH_PHOTO_TAGS,
  photoId
});

export const receivePhotoTags = tags => ({
  type: RECEIVE_PHOTO_TAGS,
  tags
});
