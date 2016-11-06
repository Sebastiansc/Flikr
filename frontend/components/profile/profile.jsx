import React from 'react';
import ProfileHeader from './profile_header';
import ProfileNav from './profile_nav';
import PhotoStream from './photo_stream';

export default class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  underline(){
    if (window.location.hash.includes('cameraRoll')){
      $('.profile-nav li:nth-child(2)').removeAttr('id');
      $('.profile-nav li:first-child').attr('id', 'nav-selected');
    } else {
      $('.profile-nav li:first-child').removeAttr('id');
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
        <ProfileHeader photos={this.props.photos} person={this.props.person}/>
        <ProfileNav id={this.props.person.id}
          photos={this.props.photos} createPhoto={this.props.createPhoto}/>
        {this.props.children}
      </div>
    );
  }
}
