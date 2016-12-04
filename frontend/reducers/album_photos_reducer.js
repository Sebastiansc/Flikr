import { RECEIVE_ALBUM_PHOTOS } from '../actions/album_actions';
import merge from 'lodash/merge';

const AlbumPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALBUM_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};

export default AlbumPhotosReducer;
