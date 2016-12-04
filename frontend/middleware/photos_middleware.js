import { receivePhotos,
         removePhoto,
         receivePhoto,
         renewPhoto,
         REQUEST_PHOTOS,
         CREATE_PHOTO,
         DELETE_PHOTO,
         UPDATE_PHOTO} from '../actions/photo_actions';

import { fetchPhotos,
         postPhoto,
         patchPhoto,
         deletePhoto} from '../util/photos_api_util';

export default ({ getState, dispatch }) => next => action => {
  let success = photo => dispatch(receivePhoto(photo));

  switch(action.type) {
    case REQUEST_PHOTOS:
      success = photos => dispatch(receivePhotos(photos));
      fetchPhotos(action.offset, action.limit, success);
      return next(action);
    case CREATE_PHOTO:
      postPhoto(action.photo, success);
      return next(action);
    case DELETE_PHOTO:
      success = photo => dispatch(removePhoto(photo));
      deletePhoto(action.id, success);
      return next(action);
    case UPDATE_PHOTO:
      success = photo => dispatch(receivePhoto(photo));
      patchPhoto(action.photo, success);
      return next(action);
    default:
      return next(action);
  }
};
