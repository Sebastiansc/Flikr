import {RECEIVE_TAGS,
        RECEIVE_TAG,
        REMOVE_TAG} from '../actions/tag_actions';
import merge from 'lodash/merge';

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      newState[action.tag.id] = action.tag;
      return newState;
    case REMOVE_TAG:
      delete newState[action.tag.id];
      return newState;
    default:
      return state;
  }
};

export default TagsReducer;
