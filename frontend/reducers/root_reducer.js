import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import PersonReducer from './person_reducer';

export default combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  person: PersonReducer
});
