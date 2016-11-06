import {RECEIVE_PHOTOS,
        RECEIVE_PHOTO,
        REMOVE_PHOTO,
        RENEW_PHOTO} from '../actions/photo_actions';
import {RECEIVE_USER_INFO} from '../actions/person_actions';
import {RECEIVE_TAG, REMOVE_TAG} from '../actions/tag_actions';
import merge from 'lodash/merge';
import {findTag} from '../reducers/selectors';

const _defaultState = {
  author: {},
  tags: []
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
    case RECEIVE_TAG:
      newState[action.photoId].tags.push(action.tag);
      return newState;
    case REMOVE_TAG:
      const index = findTag(newState[action.photoId], action.tag);
      newState[action.photoId].splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
