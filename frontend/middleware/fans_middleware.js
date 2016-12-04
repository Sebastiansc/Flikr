import { fetchFans } from '../util/fan_api_util';
import { FETCH_FANS, receiveFans } from '../actions/fan_actions';

const FansMiddleware = ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case FETCH_FANS:
      success = fav => dispatch(receiveFans(fav));
      fetchFans(action.photoId, success);
      return next(action);
    default:
      return next(action);
  }
};


export default FansMiddleware;
