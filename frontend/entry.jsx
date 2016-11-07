import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';
import {fetchUserAlbums,
      fetchPhotoAlbums,
      deleteAlbum,
      updateAlbum,
      createAlbum,
      addPhoto,
      createAndAddPhoto} from './actions/album_actions';
import {fetchByTag} from './actions/photo_actions';

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser ) {
    store = configureStore({session : {
        currentUser: {
          username: window.currentUser.username,
          id: window.currentUser.id,
          image_url: window.currentUser.image_url
        },
        errors: []
      },
      photos: {},
      person: {},
      comments: {},
      tags: {},
      albums: {}
    });
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  window.path_history = [];
  window.store = store;
  window.fetchUserAlbums = fetchUserAlbums;
  window.fetchPhotoAlbums = fetchPhotoAlbums;
  window.deleteAlbum = deleteAlbum;
  window.updateAlbum = updateAlbum;
  window.createAlbum = createAlbum;
  window.addPhoto = addPhoto;
  window.createAndAddPhoto = createAndAddPhoto;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
