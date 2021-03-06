import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PhotosReducer from './photos_reducer';
import UserReducer from './user_reducer';
import EditReducer from './edit_reducer';
import CommentsReducer from './comments_reducer';
import TagsReducer from './tags_reducer';
import AlbumsReducer from './albums_reducer';
import AlbumPhotosReducer from './album_photos_reducer';
import UserPhotosReducer from './user_photos_reducer';
import TagPhotosReducer from './tag_photos_reducer';
import PhotoTagsReducer from './photo_tags_reducer';
// import FavoritePhotosReducer from './favorites_reducer';
import FansReducer from './fans_reducer';

export default combineReducers({
  session: SessionReducer,
  photos: PhotosReducer,
  user: UserReducer,
  userPhotos: UserPhotosReducer,
  editing: EditReducer,
  tags: TagsReducer,
  tagPhotos: TagPhotosReducer,
  photoTags: PhotoTagsReducer,
  fans: FansReducer,
  albums: AlbumsReducer,
  albumPhotos: AlbumPhotosReducer,
  comments: CommentsReducer
});
