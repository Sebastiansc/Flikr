import React from 'react';
import {withRouter} from 'react-router';

const StreamItem = ({photo, current, router, root}) => {
  const next = () => router.push(`${root}/${photo.id}`);
  const klass = photo.id === current ? 'stream-selected' : '';
  return(
    <div onClick={() => next()} key={photo.id}
         className={`slider-item ${klass}`}
         style={{backgroundImage: `url('${photo.thumb_url}')`}}>
    </div>
  );
};

export default withRouter(StreamItem);
