import { RECEIVE_USER_INFO } from '../actions/user_actions';
import merge from 'lodash/merge';

const UserPhotosReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user.info.photos || [];
    default:
      return state;
  }
};

export default UserPhotosReducer;
