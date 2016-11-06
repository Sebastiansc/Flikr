import React from 'react';
import { Link, withRouter } from 'react-router';

const PhotoArrowNav = ({klass,arrow,root,photos,index,offset}) => {
  const nextIndex = index + offset;
  if (nextIndex > (photos.length - 1) || nextIndex < 0){
    return <span className="photo-nav-disable"></span>;
  }
  const nextPhoto = photos[nextIndex] || {};
  return(
    <Link className={klass}
      to={`${root}/${nextPhoto.id}`}>
      <i className={arrow} aria-hidden="true"></i>
    </Link>
  );
};

export default withRouter(PhotoArrowNav);
