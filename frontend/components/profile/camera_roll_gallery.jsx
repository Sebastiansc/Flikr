import React from 'react';
import Masonry from 'react-masonry-component';
import CameraRollGalleryItem from './camera_roll_gallery_item';

const masonryOptions = {
  transitionDuration: 0
};

const CameraRollGallery = ({photos, setEditId}) => {
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
