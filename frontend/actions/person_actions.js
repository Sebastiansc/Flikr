export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const GET_USER = 'GET_USER';
export const CHANGE_USER_COVER = 'CHANGE_USER_COVER';
export const UPDATE_USER_COVER = 'UPDATE_USER_COVER';


export const getUser = id => ({
  type: GET_USER,
  id
});

export const receiveUserInfo = user => ({
  type: RECEIVE_USER_INFO,
  user
});

export const changeUserCover = (photoId, userId) => ({
  type: CHANGE_USER_COVER,
  photoId,
  userId
});

export const updateUserCover = (user) => ({
  type: UPDATE_USER_COVER,
  user
});
