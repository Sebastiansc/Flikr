import React from 'react';
import ExploreGallery from './explore';
import MainGallery from './main';

const Images = props => {
  let child, gallery;
  if (window.location.hash === '#/home/main'){
    child = <MainGallery
            photos={props.photos}
            requestPhotos={props.requestPhotos}/>;
  } else {
    child = <ExploreGallery
            photos={props.photos}
            requestPhotos={props.requestPhotos}/>;
    gallery = <h1>Explore</h1>;
  }

  return (
    <div className='container'>
      {gallery}
      <div>
        {child}
      </div>
    </div>
  );
};

export default Images;
