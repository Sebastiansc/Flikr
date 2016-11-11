import React from 'react';
import { Link } from 'react-router';

const LightBoxHeader = ({author, id, path}) => {
  debugger;
  return(
    <div className='lightbox-header'>
      <Link to={`home/profile/${author.id}`}>
        <div className='avatar'>
          <img src={`${author.image_url}`}></img>
        </div>
      </Link>
        <Link to={`home/profile/${author.id}`}>{author.username}</Link>
        <Link className='minimize' to={`${path}/${id}`}>
          <i className="minimize fa fa-expand" aria-hidden="true"></i>

        </Link>
    </div>
  );
};

export default LightBoxHeader;
