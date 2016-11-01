import React from 'react';
import ExploreGallery from './explore';
import MainGallery from './main';

const Images = props => {
  let child;
  if (window.location.hash === '#/home/main'){
    child = <MainGallery
            photos={props.photos}
            requestPhotos={props.requestPhotos}/>;
  } else {
    child = <ExploreGallery
            photos={props.photos}
            requestPhotos={props.requestPhotos}/>;
  }

  return (
    <div>
      {child}
    </div>
  );
};

export default Images;
