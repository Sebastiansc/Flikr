import { RECEIVE_ALBUM_PHOTOS,
         RECEIVE_ALBUM_PHOTO,
         CLEAR_PHOTO} from '../actions/album_actions';
import merge from 'lodash/merge';

const AlbumPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALBUM_PHOTOS:
      return action.photos;
    case RECEIVE_ALBUM_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;
    case CLEAR_PHOTO:
      delete newState[action.photo.id];
      return newState;
     default:
      return state;
  }
};

export default AlbumPhotosReducer;
