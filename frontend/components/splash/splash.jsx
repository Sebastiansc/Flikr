import React from 'react';
import NavBar from './nav_bar';
import SplashImage from './splash_image';
import Footer from '../shared/footer';

class Splash extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    $('body').addClass('splash-body');
  }

  componentWillUnmount(){
    $('body').removeClass('splash-body');
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

export default Splash;
