import {RECEIVE_USER} from '../actions/person_actions';
import {RECEIVE_PHOTO} from '../actions/photo_actions';
import merge from 'lodash/merge';

const _nullPerson = {
  photos: []
};

const PersonReducer = (state = _nullPerson, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_PHOTO:
      const newState = merge({}, state);
      newState.photos.push(action.photo);
      return newState;
    default:
      return state;
  }
};

export default PersonReducer;
