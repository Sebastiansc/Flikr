import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { fetchPhotos } from '../actions/photo_actions';
import SessionFormContainer from './session/session_form_container';
import ImageContainer from './photos/images_container';
import PhotoContainer from './photos/photo_container';
import ProfileContainer from './profile/profile_container';
import PhotoStream from './profile/photo_stream';
import CameraRoll from './profile/camera_roll';
import LightBoxContainer from './photos/lightbox/lightbox_container';
import {getUser} from '../actions/person_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser.id) replace('/home');
  };

  const _ensureLogin = (nextState, replace) => {
    const state = store.getState();
    if(!state.session.currentUser.id) replace('/');
  };

  const fetchUser = (nextState) => {
    store.dispatch(getUser(nextState.params.userId));
  };

  return(
    <Provider store={store}>

      <Router history={hashHistory}>

        <Route path='/' component={SessionFormContainer}>
          <Route path='signup' component={SessionFormContainer}/>
        </Route>

        <Route path='/home' component={App}
               onEnter={(n, r) => _ensureLogin(n ,r)}>
          <Route path='main' component={ImageContainer}/>
          <Route path='explore' component={ImageContainer}/>
          <Route path='profile/:userId' component={ProfileContainer}
                 onEnter={(n) => fetchUser(n)}>
            <IndexRoute component={PhotoStream}/>
            <Route path={'cameraRoll'} component={CameraRoll}/>
          </Route>

          <Route path='photos/:photoId' component={PhotoContainer}/>
        </Route>

        <Route path='/lightbox/:photoId' component={LightBoxContainer}/>
      </Router>

    </Provider>
  );
};

export default Root;
