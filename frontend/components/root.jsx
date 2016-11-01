import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const state = store.getState();
    if(state.session.currentUser) replace('/');
  };

  // const toLogin = (nextState, replace) => {
  //   replace('/login');
  // };

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={SessionFormContainer}>
          <Route path='signup' component={SessionFormContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
