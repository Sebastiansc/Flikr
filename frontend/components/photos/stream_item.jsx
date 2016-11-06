import React from 'react';
import {Link} from 'react-router';

const StreamItem = ({photo, current}) => (
  <div key={photo.id} className='slider-item'
    style={{backgroundImage: `url('${photo.thumb_url}')`}}>
    <Link to={`home/photos/${photo.id}`}>
    </Link>
  </div>
);

export default StreamItem;
