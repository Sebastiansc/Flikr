import {GET_USER, receiveUserInfo} from '../actions/person_actions';
import {fetchUser} from '../util/person_api_util';

const PersonMiddleware = ({dispatch}) => next => action => {
  const success = user => {
    dispatch(receiveUserInfo(user));
  };

  switch(action.type) {
    case GET_USER:
      fetchUser(action.id, success);
      return next(action);
    default:
      return next(action);
  }
};

export default PersonMiddleware;
