import React from 'react';
import ProfileHeader from './profile_header';
import ProfileNav from './profile_nav';
import PhotoStream from './photo_stream';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  underline(){
    let location = window.location.hash.split('/');
    location = location[location.length -1];
    if (location === 'cameraRoll'){
      $('.profile-nav li').removeAttr('id');
      $('.profile-nav li:first-child').attr('id', 'nav-selected');
    } else if (location === 'albums'){
      $('.profile-nav li').removeAttr('id');
      $('.profile-nav li:nth-child(3)').attr('id', 'nav-selected');
    } else if (location === 'favorites'){
      $('.profile-nav li').removeAttr('id');
      $('.profile-nav li:nth-child(4)').attr('id', 'nav-selected');
    } else {
      $('.profile-nav li').removeAttr('id');
      $('.profile-nav li:nth-child(2)').attr('id','nav-selected');
    }
  }

  componentDidMount(){
    this.underline();
  }

  componentDidUpdate(){
    this.underline();
  }

  render(){
    return(
      <div>
        <ProfileHeader photos={this.props.photos} person={this.props.person}
        currentUser={this.props.currentUser}
        changeProfilePic={this.props.changeProfilePic}/>
        <ProfileNav id={this.props.person.id}
          photos={this.props.photos} createPhoto={this.props.createPhoto}
          currentUser={this.props.currentUser}/>
        {this.props.children}
      </div>
    );
  }
}
