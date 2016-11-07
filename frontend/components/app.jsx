import React from 'react';
import NavBarContainer from './shared/nav_bar_container';
import Footer from './shared/footer';
import { Link } from 'react-router';
import SubNav from './shared/sub_nav';

const App = ({ children }) => {
  let subNav;
  let location = window.location.hash;
  if (location === '#/home/explore' || location === '#home/main'
      || location === '#/home/trending') {
    subNav = <SubNav/>;
  }
  return (
    <div>
      <NavBarContainer/>
      {subNav}
      {children}
      <Footer/>
    </div>
  );
};

export default App;
