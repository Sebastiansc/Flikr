import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './shared/nav_bar_container';
import Footer from './shared/footer';

const App = ({ children }) => (
  <div>
    <NavBarContainer/>
    {children}
    <Footer/>
  </div>
);

export default App;
