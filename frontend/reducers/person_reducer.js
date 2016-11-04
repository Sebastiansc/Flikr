import {RECEIVE_USER} from '../actions/person_actions';

const _nullPerson = {
  photos: []
};

const PersonReducer = (state = _nullPerson, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default PersonReducer;
