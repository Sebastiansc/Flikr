import React from 'react';
import {Link} from 'react-router';

const StreamItem = ({photo, current}) => (
  <div key={photo.id} className='slider-item'>
    <Link to={`home/photos/${photo.id}`}>
      <img id={photo.id === current ? 'selected' : ''}
           src={photo.thumb_url}>
      </img>
    </Link>
  </div>
);

export default StreamItem;
