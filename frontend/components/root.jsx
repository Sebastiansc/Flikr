import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchPhotos, fetchByTag } from '../actions/photo_actions';
import { getUser } from '../actions/person_actions';
import { fetchTags } from '../actions/tag_actions';
import { fetchPhotoComments } from '../actions/comment_actions';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import ImageContainer from './photos/images_container';
import PhotoContainer from './photos/photo_container';
import ProfileContainer from './profile/profile_container';
import PhotoStreamContainer from './profile/photo_stream_container';
import CameraRollContainer from './profile/camera_roll_container';
import LightBoxContainer from './photos/lightbox/lightbox_container';
import ByTagContainer from './trending/by_tag_container';
import TrendingContainer from '../components/trending/trending_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser.id) replace('/home');
  };

  const _ensureLogin = (nextState, replace) => {
    const state = store.getState();
    if(!state.session.currentUser.id) replace('/');
  };

  const fetchUser = nextState => {
    const state = store.getState();

    store.dispatch(getUser(nextState.params.userId));
    savePrev(nextState);
  };

  const fetchComments = nextState => {
    store.dispatch(fetchPhotoComments(nextState.params.photoId));
  };

  const savePrev = nextState => {
    path_history.pop();
    path_history.push(nextState.location.pathname);
  };

  const getTags = (nextState) => {
    store.dispatch(fetchTags());
    savePrev(nextState);
  };

  const getByTag = nextState => {
    store.dispatch(fetchByTag(nextState.params.tagId));
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
          <Route path='explore' component={ImageContainer}
                 onEnter={n => savePrev(n)}/>
          <Route path='trending' component={TrendingContainer}
            onEnter={n => getTags(n)}/>
          <Route path='trending/:tagId' component={ByTagContainer}
            onEnter={n => getByTag(n)}/>

          <Route path='profile/:userId' component={ProfileContainer}
                 onEnter={(n) => fetchUser(n)}>
            <IndexRoute component={PhotoStreamContainer}/>
            <Route path={'cameraRoll'} component={CameraRollContainer}
              onEnter={n => fetchUser(n)}/>
          </Route>

          <Route path='photos/:photoId' component={PhotoContainer}
            onEnter={(n) => fetchComments(n)}/>
        </Route>

        <Route path='/lightbox/:photoId' component={LightBoxContainer}/>
      </Router>

    </Provider>
  );
};

export default Root;
