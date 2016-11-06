import {RECEIVE_USER_INFO} from '../actions/person_actions';
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
      return action.userPhotos.author;
    case LOGOUT:
      return _nullPerson;
    default:
      return state;
  }
};

export default PersonReducer;
