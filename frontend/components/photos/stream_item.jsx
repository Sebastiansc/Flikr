import React from 'react';
import {withRouter} from 'react-router';

const StreamItem = ({photo, current, router}) => {
  const next = () => router.push(`home/photos/${photo.id}`);
  return(
    <div onClick={() => next()} key={photo.id} className='slider-item'
      style={{backgroundImage: `url('${photo.thumb_url}')`}}>
    </div>
  );
};

export default withRouter(StreamItem);
