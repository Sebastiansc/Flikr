import {GET_USER,
        CHANGE_USER_COVER,
        CHANGE_PROFILE_PIC,
        FETCH_FAVORITES,
        updateProfilePic,
        receiveUserInfo,
        updateUserCover} from '../actions/person_actions';
import { receiveAndReplace } from '../actions/photo_actions';
import {fetchUser,
        changeUserCover,
        changeProfilePic,
        fetchFavorites} from '../util/person_api_util';

const PersonMiddleware = ({dispatch}) => next => action => {
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
    case FETCH_FAVORITES:
      success = photos => dispatch(receiveAndReplace(photos));
      fetchFavorites(action.userId, success);
      return next(action);
    default:
      return next(action);
  }
};

export default PersonMiddleware;
