import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavBarContainer from './shared/nav_bar_container';
import Footer from './shared/footer';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <NavBarContainer/>
    <nav className="sub-nav">
      <div>
        <ul>
          <li><Link to='home'>All Activity</Link></li>
          <li><Link to='home/explore'>Explore</Link></li>
        </ul>
      </div>
    </nav>
    {children}
    <Footer/>
  </div>
);

export default App;
