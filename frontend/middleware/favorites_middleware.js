import { favorite, unfavorite } from '../util/favorites_api_util';
import { receiveFan, removeFan } from '../actions/fan_actions';
import { FAVORITE, UNFAVORITE } from '../actions/favorite_actions';

const FavoritesMiddleware = ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case FAVORITE:
      success = fav => dispatch(receiveFan(fav));
      favorite(action.photoId, success);
      return next(action);
    case UNFAVORITE:
      success = fav => dispatch(removeFan(fav));
      unfavorite(action.photoId, success);
      return next(action);
    default:
      return next(action);
  }
};


export default FavoritesMiddleware;
