import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import PersonMiddleware from './person_middleware';
import CommentsMiddleware from './comments_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  PersonMiddleware,
  CommentsMiddleware,
  logger
);

export default RootMiddleware;
