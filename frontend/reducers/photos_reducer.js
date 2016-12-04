import { RECEIVE_PHOTOS } from '../actions/photo_actions';
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
    default:
      return state;
  }
};

export default PhotosReducer;
