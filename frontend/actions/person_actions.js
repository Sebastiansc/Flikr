export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const GET_USER = 'GET_USER';

export const getUser = id => ({
  type: GET_USER,
  id
});

export const receiveUserInfo = userPhotos => ({
  type: RECEIVE_USER_INFO,
  userPhotos
});
