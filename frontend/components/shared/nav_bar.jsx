import React from 'react';
import SearchBox from './search_box';
import UserDropDown from './user_drop_down';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="nav-bar-contrast-holder">
        <div className='nav-bar-contrast'></div>
        <nav className='nav-bar'>
          <div className='nav-container'>
            <ul>
              <li><Link to='home'>Flikr</Link></li>
              <li><Link to='home/explore'>Explore</Link></li>
              <li>You</li>
          </ul>
          <div className='nav-right'>
            <SearchBox />
            <UserDropDown logout={this.props.logout} user={this.props.currentUser}/>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}
