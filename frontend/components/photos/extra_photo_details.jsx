import React from 'react';

const ExtraPhotoDetail = ({photo}) => (
  <section className='extras-section'>
    <div className='extra-top-row'>
      <div className='taken-info'>
        <span>Taken {photo.taken} ago</span>
        <span className='copyright'>&copy;</span>
      </div>
    </div>
  </section >
);

export default ExtraPhotoDetail;
