import {GET_USER,
        CHANGE_USER_COVER,
        CHANGE_PROFILE_PIC,
        FETCH_USER_PHOTOS,
        updateProfilePic,
        receiveUserInfo,
        updateUserCover,
        receiveUserPhotos} from '../actions/user_actions';
import {fetchUser,
        changeUserCover,
        changeProfilePic,
        fetchUserPhotos} from '../util/user_api_util';

const UserMiddleware = ({dispatch}) => next => action => {
  let success = user => {
    dispatch(receiveUserInfo(user));
  };

  switch(action.type) {
    case GET_USER:
      fetchUser(action.id, success);
      return next(action);
    case CHANGE_USER_COVER:
      success = user => dispatch(updateUserCover(user));
      changeUserCover(action.photoId, action.userId, success);
      return next(action);
    case CHANGE_PROFILE_PIC:
      success = user => dispatch(updateProfilePic(user));
      changeProfilePic(action.userId, action.url, success);
      return next(action);
    case FETCH_USER_PHOTOS:
      success = photos => dispatch(receiveUserPhotos(photos));
      fetchUserPhotos(action.userId, success);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
