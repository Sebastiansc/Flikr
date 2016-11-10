import {favorite, unfavorite} from '../util/favorites_api_util';
import {FAVORITE,
        UNFAVORITE,
        receiveFavorite,
        removeFavorite} from '../actions/favorite_actions';

const FavoritesMiddleware = ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case FAVORITE:
      success = photo => dispatch(receiveFavorite(photo));
      favorite(action.photoId, success);
      return next(action);
    case UNFAVORITE:
      success = photo => dispatch(removeFavorite(photo));
      unfavorite(action.photoId, success);
      return next(action);
    default:
      return next(action);
  }
};


export default FavoritesMiddleware;
