import React from 'react';
import { Link } from 'react-router';

const PhotoArrowNav = ({klass, arrow, root, photos, index, offset}) => {
  const nextIndex = index + offset;
  if (nextIndex > (photos.length - 1) || nextIndex < 0){
    return <span className="photo-nav-disable"></span>;
  }

  return(
    <Link className={klass}
      to={`${root}/${photos[index+offset].id}`}>
      <span>{arrow}</span>
    </Link>
  );
};

export default PhotoArrowNav;
