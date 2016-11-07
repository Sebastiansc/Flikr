import React from 'react';
import { withRouter } from 'react-router';

class UserDropDown extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate(){
    if(!this.props.user.id) this.props.router.push('/');
  }

  render(){
    return(
      <div className='user-drop-down'>
        <img src='https://res.cloudinary.com/flikr/image/upload/v1478498332/camara-lens-1_y8v7pb.svg'
          className='logout'
          onClick={() => this.props.logout()}>
        </img>
      </div>
    );
  }
}

export default withRouter(UserDropDown);
