import {RECEIVE_PHOTOS,
        REMOVE_PHOTO} from '../actions/photo_actions';
import {RECEIVE_TAG, REMOVE_TAG} from '../actions/tag_actions';
import {RECEIVE_FAVORITE,
        REMOVE_FAVORITE} from '../actions/favorite_actions';
import merge from 'lodash/merge';
import {findIndex} from '../reducers/selectors';

const PhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return action.photos;
    case REMOVE_PHOTO:
      delete newState[action.photo.id];
      return newState;
    case RECEIVE_TAG:
      newState[action.photoId].tags.push(action.tag);
      return newState;
    case REMOVE_TAG:
      const index = findIndex(newState[action.photoId].tags, action.tag);
      newState[action.photoId].tags.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default PhotosReducer;
