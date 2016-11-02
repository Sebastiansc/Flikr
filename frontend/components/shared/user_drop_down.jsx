import React from 'react';
import { withRouter } from 'react-router';

class UserDropDown extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    if(!this.props.user) this.props.router.push('/');
  }

  render(){
    return(
      <div className='user-drop-down'>
        <span>Image</span>
        
        <span onClick={() => this.props.logout()}>Logout</span>
      </div>
    );
  }
}

export default withRouter(UserDropDown);
