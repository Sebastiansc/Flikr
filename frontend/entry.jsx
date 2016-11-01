import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { login, logout, signup } from './actions/session_actions';
import Root from './components/root.jsx';
import { createPhoto, requestPhotos } from './actions/photo_actions';

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser ) {
    store = configureStore({session : {
      currentUser: {
        username: window.currentUser.username,
        id: window.currentUser.id
      },
      errors: [],
      photos: {}
    }});
  } else {
    store = configureStore();
  }

  window.requestPhotos = requestPhotos;
  window.createPhoto = createPhoto;
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
