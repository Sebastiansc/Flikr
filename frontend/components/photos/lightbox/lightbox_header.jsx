import React from 'react';

const LightBoxHeader = ({user}) => {
  debugger;
  return(
    <div className='lightbox-header'>
      <div className='avatar'>
        <img src={`${user.image_url}`}></img>
        <Link to={`home/profile/${user.id}`}>{user.username}</Link>
      </div>
    </div>
  );
};

export default LightBoxHeader;
