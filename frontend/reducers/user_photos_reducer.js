import {RECEIVE_USER_INFO,
        RECEIVE_USER_PHOTOS} from '../actions/user_actions';
import { RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const UserPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user.photos || [];
    case RECEIVE_PHOTO:
    debugger;
      newState[action.photo.id] = action.photo;
      return newState;
    case RECEIVE_USER_PHOTOS:
      return action.photos;
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    default:
      return state;
  }
};

export default UserPhotosReducer;
