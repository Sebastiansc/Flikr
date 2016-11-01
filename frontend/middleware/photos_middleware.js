import { receivePhotos,
         removePhoto,
         receivePhoto,
         REQUEST_PHOTOS,
         CREATE_PHOTO,
         DELETE_PHOTO,
         UPDATE_PHOTO
       } from '../actions/photo_actions';

import { fetchPhotos,
         postPhoto,
         patchPhoto,
         deletePhoto } from '../util/photos_api_util';

export default ({ getState, dispatch }) => next => action => {
  // const error = error => dispatch(receiveErrors(error.responseJSON));
  let success = photo => dispatch(receivePhoto(photo));

  switch(action.type) {
    case REQUEST_PHOTOS:
      success = photos => dispatch(receivePhotos(photos));
      fetchPhotos(null, success);
      return next(action);
    case CREATE_PHOTO:
      postPhoto(action.photo, success);
      return next(action);
    case DELETE_PHOTO:
      success = id => dispatch(removePhoto(id));
      deletePhoto(action.id, success);
      return next(action);
    case UPDATE_PHOTO:
      patchPhoto(action.photo, success);
      return next(action);
    default:
      return next(action);
  }
};
