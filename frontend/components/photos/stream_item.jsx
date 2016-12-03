import React from 'react';
import {withRouter} from 'react-router';

const StreamItem = ({photo, current, router}) => {
  const path = router.location.pathname.split('/').slice(0,4).join('/');
  const next = () => router.push(`${path}/${photo.id}`);
  const klass = photo.id === current ? 'stream-selected' : '';
  return(
    <div onClick={() => next()} key={photo.id}
         className={`slider-item ${klass}`}
         style={{backgroundImage: `url('${photo.thumb_url}')`}}>
    </div>
  );
};

export default withRouter(StreamItem);
