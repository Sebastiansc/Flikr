import { RECEIVE_TAG_PHOTOS } from '../actions/tag_photos_actions';
import merge from 'lodash/merge';

const UserPhotosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_TAG_PHOTOS:
      return action.photos;
    default:
      return state;
  }
};

export default UserPhotosReducer;
