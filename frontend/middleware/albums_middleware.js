import {fetchUserAlbums,
        fetchPhotoAlbums,
        postAlbum,
        patchAlbum,
        fetchAlbum,
        deleteAlbum,
        addPhoto,
        createAndAddPhoto,
        dropPhoto,
        changeCoverPhoto} from '../util/albums_api_util';
import {FETCH_USER_ALBUMS,
        FETCH_PHOTO_ALBUMS,
        FETCH_ALBUM,
        CREATE_ALBUM,
        DELETE_ALBUM,
        UPDATE_ALBUM,
        ADD_PHOTO,
        DROP_PHOTO,
        CHANGE_COVER_PHOTO,
        CREATE_AND_ADD_PHOTO,
        receiveAlbums,
        receiveAlbum,
        removeAlbum,
        clearPhoto,
        updateCoverPhoto} from '../actions/album_actions';
import { receivePhoto } from '../actions/photo_actions';

const AlbumsMiddleware = ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case FETCH_USER_ALBUMS:
      success = albums => dispatch(receiveAlbums(albums));
      fetchUserAlbums(action.userId, success);
      return next(action);
    case FETCH_PHOTO_ALBUMS:
      success = albums => dispatch(receiveAlbums(albums));
      fetchPhotoAlbums(action.photoId, success);
      return next(action);
    case FETCH_ALBUM:
      success = album => dispatch(receiveAlbum(album));
      fetchAlbum(action.albumId, success);
      return next(action);
    case CREATE_ALBUM:
      success = album => dispatch(receiveAlbum(album));
      postAlbum({album: action.album, photos: action.photoIds}, success);
      return next(action);
    case UPDATE_ALBUM:
      success = album => dispatch(receiveAlbum(album));
      patchAlbum(action.album, success);
      return next(action);
    case DELETE_ALBUM:
      success = album => dispatch(removeAlbum(album));
      deleteAlbum(action.albumId, success);
      return next(action);
    case ADD_PHOTO:
      success = photo => dispatch(receivePhoto(photo));
      addPhoto(action.albumId, action.photoId, success);
      return next(action);
    case CREATE_AND_ADD_PHOTO:
      success = photo => dispatch(receivePhoto(photo));
      createAndAddPhoto(action.albumId, action.photo, success);
      return next(action);
    case DROP_PHOTO:
      success = photo => dispatch(clearPhoto(photo, action.albumId));
      dropPhoto(action.albumId, action.photoId, success);
      return next(action);
    case CHANGE_COVER_PHOTO:
      success = coverPhoto => dispatch(updateCoverPhoto(coverPhoto, action.albumId));
      changeCoverPhoto(action.albumId, action.photoId, success);
      return next(action);
    default:
      return next(action);
  }
};

export default AlbumsMiddleware;
