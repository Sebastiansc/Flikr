import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchByTag,
         requestPhotos } from '../actions/photo_actions';
import { getUser } from '../actions/person_actions';
import { fetchTags } from '../actions/tag_actions';
import { fetchPhotoComments } from '../actions/comment_actions';
import { fetchUserAlbums, fetchAlbum } from '../actions/album_actions';
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
import AlbumContainer from '../components/profile/album/album_container';
import AlbumShowContainer from
       '../components/profile/album/album_show_container';
import Splash from '../components/splash/splash';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser.id) replace('/home');
  };

  const _ensureLogin = (nextState, replace) => {
    const state = store.getState();
    if(!state.session.currentUser.id) replace('/');
    window.scrollTo(0, 0);
  };

  const fetchUser = nextState => {
    store.dispatch(getUser(nextState.params.userId));
    savePrev(nextState);
  };

  const fetchComments = nextState => {
    store.dispatch(fetchPhotoComments(nextState.params.photoId));

    let goFetch;
    if(path_history[0].includes('home/profile') || path_history[0] === 'home'){
      goFetch = requestPhotos;
    } else if (window.path_history[0].includes('trending/')){
      goFetch = () => fetchByTag(path_history[0].slice(14));
    }
    store.dispatch(goFetch());

    window.scrollTo(0, 0);
  };

  const savePrev = nextState => {
    window.path_history.pop();
    window.path_history.push(nextState.location.pathname);
  };

  const getTags = (nextState) => {
    store.dispatch(fetchTags());
  };

  const getByTag = nextState => {
    store.dispatch(fetchByTag(nextState.params.tagId));
    savePrev(nextState);
  };

  const fetchAlbums = nextState => {
    store.dispatch(fetchUserAlbums(nextState.params.userId));
    store.dispatch(getUser(nextState.params.userId));
  };

  const getAlbum = nextState => {
    store.dispatch(fetchAlbum(nextState.params.albumId));
    store.dispatch(getUser(nextState.params.userId));
    savePrev(nextState);
  };

  return(
    <Provider store={store}>

      <Router history={hashHistory}>

        <Route path='/' component={Splash}
            onEnter={(n,r) =>_redirectIfLoggedIn(n,r)}/>
        <Route path='signup' component={SessionFormContainer}
          onEnter={(n, r) => _redirectIfLoggedIn(n, r)}/>
        <Route path='signin' component={SessionFormContainer}
          onEnter={(n, r) => _redirectIfLoggedIn(n, r)}/>

        <Route path='/home' component={App}
               onEnter={(n, r) => _ensureLogin(n ,r)}>
          <IndexRoute component={ImageContainer}
            onEnter={n => savePrev(n)}/>
          <Route path='main' component={ImageContainer}/>
          <Route path='trending' component={TrendingContainer}
            onEnter={n => getTags(n)}/>
          <Route path='trending/:tagId' component={ByTagContainer}
            onEnter={n => getByTag(n)}/>

          <Route path='profile/:userId' component={ProfileContainer}
                 onEnter={(n) => fetchUser(n)}>
            <IndexRoute component={PhotoStreamContainer}/>
            <Route path={'cameraRoll'} component={CameraRollContainer}
              onEnter={n => fetchUser(n)}/>
            <Route path={'albums'} component={AlbumContainer}
                onEnter={n => fetchAlbums(n)}/>
          </Route>

          <Route path='album/:userId/:albumId' component={AlbumShowContainer}
              onEnter={n => getAlbum(n)}/>
          <Route path='photos/:photoId' component={PhotoContainer}
            onEnter={(n) => fetchComments(n)}/>
        </Route>

        <Route path='/lightbox/:photoId' component={LightBoxContainer}/>
      </Router>

    </Provider>
  );
};

export default Root;
