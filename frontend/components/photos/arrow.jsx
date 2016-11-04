import React from 'react';
import { Link, withRouter } from 'react-router';

const PhotoArrowNav = ({klass,arrow,router,code,root,photos,index,offset}) => {
  const nextIndex = index + offset;
  if (nextIndex > (photos.length - 1) || nextIndex < 0){
    return <span className="photo-nav-disable"></span>;
  }

  // $('body').one('keydown', e => {
  //   debugger;
  //   if(e.keyCode === code) {
  //     router.push(`${root}/${photos[nextIndex].id}`);
  //   } else { return; }
  // });
  const handleKey = e => {
    if(e.keyCode === code) {
     router.push(`${root}/${photos[nextIndex].id}`);
    }
  };

  return(
    <Link className={klass}
      to={`${root}/${photos[nextIndex].id}`}>
      <span onKeyPress={e => handleKey(e)}>{arrow}</span>
    </Link>
  );
};

export default withRouter(PhotoArrowNav);
