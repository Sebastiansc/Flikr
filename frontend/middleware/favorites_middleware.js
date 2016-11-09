import {favorite, unfavorite} from '../util/favorites_api_util';
import {FAVORITE, UNFAVORITE} from '../actions/favorite_actions';

const FavoritesMiddleware = ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case FAVORITE:
      favorite(action.photoId, success);
      return next(action);
    case UNFAVORITE:
      unfavorite(action.photoId, success);
      return next(action);
    default:
      return next(action);
  }
};


export default FavoritesMiddleware;
