import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const CameraRollGallery = ({photos, setEditId}) => {
  debugger;
  return(
    <Masonry className='camera-roll-gallery' options={masonryOptions}>
      {photos.map( photo => {
        return (
          <CameraRollGalleryItem
            key={photo.id} setEditId={setEditId} photo={photo}/>
        );
      })}
    </Masonry>
  );
};


export default CameraRollGallery;
