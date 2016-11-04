import {TOGGLE_MODAL, SET_EDIT_ID} from '../actions/edit_actions';
import merge from 'lodash/merge';

const _defaultEdit = {
  modalOpen: false
};

const EditReducer = (state = _defaultEdit, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case TOGGLE_MODAL:
      newState.modalOpen = !state.modalOpen;
      return newState;
    case SET_EDIT_ID:
      newState.id = action.id;
      return newState;
    default:
      return state;
  }
};

export default EditReducer;
