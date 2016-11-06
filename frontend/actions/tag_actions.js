export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const FETCH_TAGS = 'FETCH_TAGS';
export const CREATE_TAG = 'CREATE_TAG';
export const RECEIVE_TAG = 'RECEIVE_TAG';
export const DESTROY_TAG = 'DESTROY_TAG';
export const REMOVE_TAG = 'REMOVE_TAG';

export const fetchTags = () => ({
  type: FETCH_TAGS
});

export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const createTag = (photoId, tag) => ({
  type: CREATE_TAG,
  photoId,
  tag
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const destroyTag = id => ({
  type: DESTROY_TAG,
  id
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});
