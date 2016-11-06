import React from 'react';
import Tags from './tags';

const ExtraPhotoDetail = ({photo, createTag}) => (
  <section className='extras-section'>
    <div className='extra-top-row'>
      <div className='taken-info'>
        <span>Taken {photo.taken} ago</span>
        <span className='copyright'>&copy;</span>
      </div>
    </div>
    <Tags tags={photo.tags} createTag={createTag}/>
  </section >
);

export default ExtraPhotoDetail;
