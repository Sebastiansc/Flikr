import { RECEIVE_FANS,
         REMOVE_FAN,
         RECEIVE_FAN} from '../actions/fan_actions';
import merge from 'lodash/merge';

const FansReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_FANS:
      return action.fans;
    case REMOVE_FAN:
      delete newState[action.fan.id];
      return newState;
    case RECEIVE_FAN:
      newState[action.fan.id] = action.fan;
      return newState;
    default:
      return state;
  }
};

export default FansReducer;
