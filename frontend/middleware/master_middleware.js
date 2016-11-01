import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import PhotosMiddleware from './photos_middleware';
import createLogger from 'redux-logger';

const logger = createLogger();

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  PhotosMiddleware,
  logger
);

export default RootMiddleware;
