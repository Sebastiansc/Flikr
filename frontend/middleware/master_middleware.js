import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import UserMiddleware from './user_middleware';
import CommentsMiddleware from './comments_middleware';
import TagsMiddleware from './tags_middleware';
import AlbumsMiddleware from './albums_middleware';
import FavoritesMiddleware from './favorites_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  UserMiddleware,
  CommentsMiddleware,
  TagsMiddleware,
  AlbumsMiddleware,
  FavoritesMiddleware,
  logger
);

export default RootMiddleware;
