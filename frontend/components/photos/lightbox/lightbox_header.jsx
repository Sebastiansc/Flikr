import React from 'react';
import { Link } from 'react-router';

const LightBoxHeader = ({author, id}) => {
  return(
    <div className='lightbox-header'>
      <Link to={`home/profile/${author.id}`}>
        <div className='avatar'>
          <img src={`${author.image_url}`}></img>
        </div>
      </Link>
        <Link to={`home/profile/${author.id}`}>{author.username}</Link>
        <Link className='minimize' to={`home/photos/${id}`}>Resize</Link>
    </div>
  );
};

export default LightBoxHeader;
