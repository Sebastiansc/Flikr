import { RECEIVE_USER_INFO } from '../actions/user_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';
import merge from 'lodash/merge';

const UserPhotosReducer = (state = [], action) => {
  Object.freeze(state);
  const newState = [].concat(state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
    debugger;
      return action.user.info.photos || [];
    case RECEIVE_PHOTO:
      return newState.push(action.photo);
    default:
      return state;
  }
};

export default UserPhotosReducer;
