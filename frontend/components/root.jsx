import React from 'react';

import { Provider } from 'react-redux';

import { isEmpty } from 'lodash';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { fetchPhotos, requestPhotos } from '../actions/photo_actions';
import { fetchFans } from '../actions/fan_actions';

import { getUser, fetchUserPhotos } from '../actions/user_actions';

import { fetchTags, fetchPhotoTags } from '../actions/tag_actions';
import { fetchByTag } from '../actions/tag_photos_actions';

import { fetchPhotoComments } from '../actions/comment_actions';

import { fetchUserAlbums,
         fetchAlbum,
         fetchAlbumPhotos } from '../actions/album_actions';

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
    if(!state.session.currentUser.id){
      replace('/');
      return;
    } else {
      store.dispatch(requestPhotos());
    }
    savePrev(nextState);
  };

  const fetchUser = nextState => {
    if(store.getState().user.id !== Number(nextState.params.userId)){
      store.dispatch(getUser(nextState.params.userId));
    }
    savePrev(nextState);
  };

  // Determines where to fetch photos from depending on pathname.
  const photoDetailFetch = nextState => {
    const slice = nextState.location.pathname.split('/')[2];
    const action = determineAction(slice, nextState.params);
    if (slice === "tagPhotos" || slice === "albumPhotos"){
      store.dispatch(action());
    } else if (isEmpty(store.getState()[slice])){
      store.dispatch(action());
    }
    store.dispatch(fetchPhotoComments(nextState.params.photoId));
    store.dispatch(fetchFans(nextState.params.photoId));
    store.dispatch(fetchPhotoTags(nextState.params.photoId));
  };

  const determineAction = (slice, params) => {
    switch (slice) {
      case "userPhotos":
        return () => fetchUserPhotos(params.userId);
      case "photos":
        return requestPhotos;
      case "tagPhotos":
      return () => fetchByTag(params.tagId);
      case "albumPhotos":
      return () => fetchAlbumPhotos(params.albumId);
    }
  };

  const savePrev = nextState => {
    window.path_history.pop();
    window.path_history.push(nextState.location.pathname);
  };

  const getTags = (nextState) => {
    store.dispatch(fetchTags());
    savePrev(nextState);
  };

  const getByTag = nextState => {
    store.dispatch(fetchByTag(nextState.params.tagId));
  };

  const fetchAlbums = nextState => {
    store.dispatch(fetchUserAlbums(nextState.params.userId));
  };

  const getAlbum = nextState => {
    store.dispatch(fetchAlbum(nextState.params.albumId));
    store.dispatch(getUser(nextState.params.userId));
    store.dispatch(fetchAlbumPhotos(nextState.params.albumId));
    savePrev(nextState);
  };

  const getPhotos = nextState => {
    const slice = nextState.location.pathname.split('/')[2];
    if (isEmpty(store.getState()[slice])){
      store.dispatch(determineAction(slice, nextState.params)());
    }
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

        <Route path='/home' component={App}>
          <IndexRoute component={ImageContainer}
                      onEnter={(n, r) => _ensureLogin(n ,r)}/>
          <Route path='main' component={ImageContainer}/>
          <Route path='trending' component={TrendingContainer}
                 onEnter={n => getTags(n)}/>
          <Route path='trending/:tagId' component={ByTagContainer}
                 onEnter={n => getByTag(n)}/>

          <Route path='profile/:userId' component={ProfileContainer}
                 onEnter={(n) => fetchUser(n)}>
            <IndexRoute component={PhotoStreamContainer}/>
            <Route path={'cameraRoll'} component={CameraRollContainer}/>
            <Route path={'albums'} component={AlbumContainer}
                   onEnter={n => fetchAlbums(n)}/>
          </Route>

          <Route path='album/:userId/:albumId' component={AlbumShowContainer}
                 onEnter={n => getAlbum(n)}/>

          <Route path='photos/:photoId' component={PhotoContainer}
                 onEnter={(n) => photoDetailFetch(n)}/>
          <Route path='userPhotos/:userId/:photoId' component={PhotoContainer}
                 onEnter={(n) => photoDetailFetch(n)}/>
          <Route path='albumPhotos/:albumId/:photoId' component={PhotoContainer}
                 onEnter={(n) => photoDetailFetch(n)}/>
          <Route path='tagPhotos/:tagId/:photoId' component={PhotoContainer}
                 onEnter={(n) => photoDetailFetch(n)}/>
        </Route>

        <Route path='/lightbox/photos/:photoId' component={LightBoxContainer}
               onEnter={n => getPhotos(n)}/>
        <Route path='/lightbox/userPhotos/:userId/:photoId'
               component={LightBoxContainer}
               onEnter={n => getPhotos(n)}/>
             <Route path='/lightbox/albumPhotos/:albumId/:photoId'
               component={LightBoxContainer}
               onEnter={n => getPhotos(n)}/>
        <Route path='/lightbox/tagPhotos/:tagId/:photoId'
               component={LightBoxContainer}
               onEnter={n => getPhotos(n)}/>
      </Router>

    </Provider>
  );
};

export default Root;
