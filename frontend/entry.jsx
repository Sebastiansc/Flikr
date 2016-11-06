import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';
import {fetchPhotoComments, createComment, deleteComment, updateComment} from './actions/comment_actions';

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
      comments: {}
    });
  } else {
    store = configureStore();
  }

  Modal.setAppElement(document.body);
  window.fetchPhotoComments = fetchPhotoComments;
  window.createComment = createComment;
  window.updateComment = updateComment;
  window.deleteComment = deleteComment;
  window.path_history = [];
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
