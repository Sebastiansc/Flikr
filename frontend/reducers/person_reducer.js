import {RECEIVE_USER_INFO} from '../actions/person_actions';
import {RECEIVE_PHOTO, RENEW_PHOTO} from '../actions/photo_actions';
import {LOGOUT} from '../actions/session_actions';
import merge from 'lodash/merge';
import {findPhoto} from './selectors';

const _nullPerson = {
  photos: []
};



const PersonReducer = (state = _nullPerson, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_USER_INFO:
      return action.user.owner;
    case RECEIVE_PHOTO:
      newState.photos.push(action.photo);
      return newState;
    case RENEW_PHOTO:
      const index = findPhoto(state.photos, action.photo.id);
      newState.photos.splice(index, 1);
      newState.photos.push(action.photo);
      return newState;
    case LOGOUT:
      return _nullPerson;
    default:
      return state;
  }
};

export default PersonReducer;
