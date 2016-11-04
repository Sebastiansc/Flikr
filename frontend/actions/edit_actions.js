export const TOGGLE_MODAL = 'OPEN_MODAL';
export const SET_EDIT_ID = 'SET_EDIT_ID';

export const toggleModl = () => ({
  type: TOGGLE_MODAL
});

export const setEditId = id => ({
  type: SET_EDIT_ID,
  id
});
