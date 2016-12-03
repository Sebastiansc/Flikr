import {receiveTags,
        receiveTag,
        removeTag,
        FETCH_TAGS,
        CREATE_TAG,
        DESTROY_TAG} from '../actions/tag_actions';
import {fetchTags, postTag, deleteTag} from '../util/tags_api_util';
import { fetchByTag } from '../util/photos_api_util';
import { FETCH_BY_TAG,
         receiveTagPhotos} from '../actions/tag_photos_actions';

const TagsMiddleware = ({dispatch}) => next => action => {
  let success;
  switch (action.type) {
    case FETCH_TAGS:
      success = tags => dispatch(receiveTags(tags));
      fetchTags(success);
      return next(action);
    case CREATE_TAG:
      success = tag => dispatch(receiveTag(action.photoId, tag));
      postTag(action.photoId, action.tag, success);
      return next(action);
    case DESTROY_TAG:
      success = tag => dispatch(removeTag(action.photoId, tag));
      deleteTag(action.photoId, action.tagId, success);
      return next(action);
    case FETCH_BY_TAG:
      success = photos => dispatch(receiveTagPhotos(photos));
      fetchByTag(action.tagId, success);
      return next(action);
    default:
      return next(action);
  }
};

export default TagsMiddleware;
