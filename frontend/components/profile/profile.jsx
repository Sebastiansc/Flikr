import React from 'react';
import ProfileHeader from './profile_header';
import ProfileNav from './profile_nav';
import PhotoStream from './photo_stream';

// export default class Profile extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   render(){
//     return(
//
//     );
//   }
// }

const Profile = (props) => {
  return(
    <div>
      <ProfileHeader person={props.person}/>
      <ProfileNav id={props.person.id}/>
      {props.children}
    </div>
  );
};

export default Profile;
