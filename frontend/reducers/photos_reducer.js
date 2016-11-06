import {RECEIVE_PHOTOS,
        RECEIVE_PHOTO,
        REMOVE_PHOTO,
        RENEW_PHOTO} from '../actions/photo_actions';
import {RECEIVE_USER_INFO} from '../actions/person_actions';
import merge from 'lodash/merge';
import {findPhoto} from './selectors';

const _defaultState = {
};

const PhotosReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_USER_INFO:
      return action.userPhotos;
    case RENEW_PHOTO:
      newState[action.photo.id] = null;
      newState[action.photo.id] = action.photo;
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
