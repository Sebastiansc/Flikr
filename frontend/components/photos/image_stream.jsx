import React from 'react';
import {Link} from 'react-router';

const ImageStream = props => {
  return (
    <div clasName='image-stream'>
      <span>Prev</span>
      {props.photos.map(photo => (
        <Link to={`home/photos/${photo.id}`}>
          <img></img>
        </Link>
      ))}
      <span>Next</span>
    </div>
  );
};

export default ImageStream;
