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
      <nav className='nav-bar'>
        <div className='nav-container'>
          <ul>
            <li><Link to='home'>Flikr</Link></li>
            <li>You</li>
            <li><Link to='home/explore'>Explore</Link></li>
          </ul>
          <SearchBox />
          <UserDropDown logout={this.props.logout} user={this.props.currentUser}/>
        </div>
      </nav>
    );
  }
}
