import React from 'react';
import { Link, withRouter } from 'react-router';

const PhotoArrowNav = ({load, path, klass,arrow,root,photos,index,offset}) => {
  const nextIndex = index + offset;
  if (nextIndex > (photos.length - 1) || nextIndex < 0){
    if(load) load();
    return <span className="photo-nav-disable"></span>;
  }
  const nextPhoto = photos[nextIndex] || {};
  return(
    <Link className={klass}
      to={path(nextPhoto.id)}>
      <i className={arrow} aria-hidden="true"></i>
    </Link>
  );
};

export default withRouter(PhotoArrowNav);
