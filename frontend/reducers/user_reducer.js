import {RECEIVE_USER_INFO,
        UPDATE_USER_COVER,
        UPDATE_PROFILE_PIC} from '../actions/user_actions';
import {LOGOUT} from '../actions/session_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
    debugger;
      return action.user.info;
    case UPDATE_USER_COVER:
      newState.cover_photo = action.user.info.cover_photo;
      return newState;
    case UPDATE_PROFILE_PIC:
      newState.image_url = action.user.info.image_url;
      return newState;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default UserReducer;
