import React from 'react';
import SearchBox from './search_box';
import UserDropDown from './user_drop_down';

export default class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav className='nav-bar'>
        <ul>
          <li><img>Flikr</img></li>
          <li>You</li>
          <li>Explore</li>
        </ul>
        <SearchBox />
        <UserDropDown logout={this.props.logout} user={this.props.currentUser}/>
      </nav>
    );
  }
}
