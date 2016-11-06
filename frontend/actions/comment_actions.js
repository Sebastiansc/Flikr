export const FETCH_PHOTO_COMMENTS = 'FETCH_PHOTO_COMMENTS';
export const RECEIVE_PHOTO_COMMENTS = 'RECEIVE_PHOTO_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const RENEW_COMMENT = 'RENEW_COMMENT';

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const renewComment = comment => ({
  type: RENEW_COMMENT,
  comment
});


export const fetchPhotoComments = photoId => ({
  type: FETCH_PHOTO_COMMENTS,
  photoId
});

export const receivePhotoComments = comments => ({
  type: RECEIVE_PHOTO_COMMENTS,
  comments
});
