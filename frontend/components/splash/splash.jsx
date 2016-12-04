import React from 'react';
import NavBar from './nav_bar';
import SplashImage from './splash_image';
import Footer from '../shared/footer';

export default class Splash extends React.Component {
  componentWillMount(){
    $('body').attr('id', 'splash-body');
  }

  componentWillUnmount(){
    $('body').removeAttr('id', 'splash-body');
  }

  render(){
    return(
      <div>
        <NavBar/>
        <SplashImage />
        <Footer/>
      </div>
    );
  }
}
