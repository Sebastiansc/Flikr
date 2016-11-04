import React from 'react';
import ProfileHeader from './profile_header';
import ProfileNav from './profile_nav';
import PhotoStream from './photo_stream';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  // componentWillMount(){
  //   this.props.getUser(this.props.userId);
  // }

  render(){
    return(
      <div>
        <ProfileHeader person={this.props.person}/>
        <ProfileNav id={this.props.person.id}
          photos={this.props.photos} createPhoto={this.props.createPhoto}/>
        {this.props.children}
      </div>
    );
  }
}
