import React from 'react';
import {Link} from 'react-router';
import PhotoUpload from './photo_upload';

const ProfileNav = ({id, photo, createPhoto, currentUser}) => {
  const showIfOwner = id === currentUser.id ? '' : 'none';

  return(
    <div className='profile-nav sub-nav'>
      <ul>
        <li style={{display: `${showIfOwner}`}}>
          <Link to={`home/profile/${id}/cameraRoll`}>CameraRoll</Link>
        </li>
        <li><Link to={`home/profile/${id}`}>Photostream</Link></li>
        <li><Link to={`home/profile/${id}/albums`}>Albums</Link></li>
        <PhotoUpload show={showIfOwner}
          photos={photo} createPhoto={createPhoto}/>
      </ul>
    </div>
  );
};

export default ProfileNav;
