import {GET_USER,
        CHANGE_USER_COVER,
        receiveUserInfo,
        updateUserCover} from '../actions/person_actions';
import {fetchUser, changeUserCover} from '../util/person_api_util';

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
    default:
      return next(action);
  }
};

export default PersonMiddleware;
