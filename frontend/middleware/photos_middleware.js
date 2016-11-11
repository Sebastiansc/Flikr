import { receivePhotos,
         removePhoto,
         receivePhoto,
         renewPhoto,
         receiveAndReplace,
         REQUEST_PHOTOS,
         CREATE_PHOTO,
         DELETE_PHOTO,
         UPDATE_PHOTO,
         FETCH_BY_TAG,
         FETCH_IN_BATCH} from '../actions/photo_actions';

import { fetchPhotos,
         postPhoto,
         patchPhoto,
         deletePhoto,
         fetchByTag,
         fetchInBatch} from '../util/photos_api_util';

export default ({ getState, dispatch }) => next => action => {
  let success = photo => dispatch(receivePhoto(photo));

  switch(action.type) {
    case REQUEST_PHOTOS:
      success = photos => dispatch(receivePhotos(photos));
      fetchPhotos(success, action.limit, action.offset);
      return next(action);
    case FETCH_BY_TAG:
      success = photos => dispatch(receiveAndReplace(photos));
      fetchByTag(action.id, success);
      return next(action);
    case CREATE_PHOTO:
      postPhoto(action.photo, success);
      return next(action);
    case DELETE_PHOTO:
      success = photo => dispatch(removePhoto(photo));
      deletePhoto(action.id, success);
      return next(action);
    case UPDATE_PHOTO:
      success = photo => dispatch(renewPhoto(photo));
      patchPhoto(action.photo, success);
      return next(action);
    case FETCH_IN_BATCH:
      success = photos => dispatch(receivePhotos(photos));
      fetchInBatch(action.photoId, success);
      return next(action);
    default:
      return next(action);
  }
};
