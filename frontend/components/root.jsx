import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { fetchByTag,
         requestPhotos,
          emptyPhotos} from '../actions/photo_actions';
import { getUser, fetchFavorites} from '../actions/person_actions';
import { requestType } from '../reducers/selectors';
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
import FavoritesContainer from
  '../components/profile/favorites/favorites_container';
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
    const request = requestType(fetchByTag, requestPhotos);
    store.dispatch(request());
    store.dispatch(fetchPhotoComments(nextState.params.photoId));

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

  const getFavorites = nextState => {
    store.dispatch(fetchFavorites(nextState.params.userId));
    savePrev(nextState);
  };

  const clearPhotos = () => {
    store.dispatch(emptyPhotos());
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
            onEnter={n => getByTag(n)}
            onLeave={() => clearPhotos()}/>

          <Route path='profile/:userId' component={ProfileContainer}
                 onEnter={(n) => fetchUser(n)}>
            <IndexRoute component={PhotoStreamContainer}
                         onLeave={() => clearPhotos()}/>
            <Route path={'cameraRoll'} component={CameraRollContainer}
              onEnter={n => fetchUser(n)}/>
            <Route path={'albums'} component={AlbumContainer}
                onEnter={n => fetchAlbums(n)}/>

              <Route path={'favorites'} component={FavoritesContainer}
                onEnter={n => getFavorites(n)}
                onLeave={() => clearPhotos()}/>
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
