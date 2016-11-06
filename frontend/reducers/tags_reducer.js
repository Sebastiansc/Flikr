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
    default:
      return state;
  }
};

export default TagsReducer;
