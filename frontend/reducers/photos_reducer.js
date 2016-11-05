import {RECEIVE_PHOTOS,
        RECEIVE_PHOTO,
        REMOVE_PHOTO,
        RENEW_PHOTO} from '../actions/photo_actions';
import merge from 'lodash/merge';

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
      newState[action.id] = null;
      return newState;
    case RENEW_PHOTO:
    debugger;
      newState[action.photo.id] = null;
      newState[action.photo.id] = action.photo;
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
