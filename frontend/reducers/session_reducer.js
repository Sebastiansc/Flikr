import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {
  currentUser: {},
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      return {
        currentUser: {},
        errors: action.errors
      };
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
