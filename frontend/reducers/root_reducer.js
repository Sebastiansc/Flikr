import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import PersonReducer from './person_reducer';
import EditReducer from './edit_reducer';
import CommentsReducer from './comments_reducer';
import TagsReducer from './tags_reducer';

export default combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  person: PersonReducer,
  editing: EditReducer,
  tags: TagsReducer,
  comments: CommentsReducer
});
