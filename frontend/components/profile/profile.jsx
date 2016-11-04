import React from 'react';
import ProfileHeader from './profile_header';
import ProfileNav from './profile_nav';
import PhotoStream from './photo_stream';

const Profile = ({person, photos, createPhoto, requestPhoto, children}) => {
  debugger;
  return(
    <div>
      <ProfileHeader person={person}/>
      <ProfileNav id={person.id} photos={photos} createPhoto={createPhoto}/>
      {children}
    </div>
  );
};

export default Profile;
