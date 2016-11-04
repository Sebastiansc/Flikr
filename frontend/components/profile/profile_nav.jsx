import React from 'react';
import {Link} from 'react-router';

const ProfileNav = ({id}) => (
  <div className='profile-nav sub-nav'>
    <ul>
      <li><Link to={`home/profile/${id}/cameraRoll`}>CameraRoll</Link></li>
      <li><Link to={`home/profile/${id}`}>Photostream</Link></li>
    </ul>
  </div>
);

export default ProfileNav;
