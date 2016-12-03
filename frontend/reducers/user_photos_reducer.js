import { RECEIVE_USER_INFO } from '../actions/user_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const UserPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user.photos;
    case RECEIVE_PHOTO:
    newState.unshift(action.photo);
    return newState;
    default:
      return state;
  }
};

export default UserPhotosReducer;
