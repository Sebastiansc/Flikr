import {RECEIVE_ALBUMS,
        RECEIVE_ALBUM,
        REMOVE_ALBUM,
        CLEAR_PHOTO} from '../actions/album_actions';
import merge from 'lodash/merge';
import {findIndex} from '../reducers/selectors';

const _nullAlbum = {
  owner: {},
  cover_photo: {},
  photos: []
};

const AlbumReducer = (state = _nullAlbum, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return action.albums;
    case RECEIVE_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    case REMOVE_ALBUM:
      delete newState[action.album.id];
      return newState;
    case CLEAR_PHOTO:
      const photos = newState[action.albumId].photos;
      const index = findIndex(photos, action.photo);
      photos.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default AlbumReducer;
