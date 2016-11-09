import {RECEIVE_USER_INFO, UPDATE_USER_COVER} from '../actions/person_actions';
import {LOGOUT} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullPerson = {
  photos: []
};



const PersonReducer = (state = _nullPerson, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user.info;
    case UPDATE_USER_COVER:
      newState.cover_photo = action.user.info.cover_photo;
      return newState;
    case LOGOUT:
      return _nullPerson;
    default:
      return state;
  }
};

export default PersonReducer;
