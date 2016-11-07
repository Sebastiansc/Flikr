import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  lazyLoad: true
};

const SplashImage = () => (
  <div className='splash-main-image'
    style={{backgroundImage: `url('https://res.cloudinary.com/flikr/image/upload/v1478504274/i5zceqigrcldqgktf6wj_g5asvq.jpg')`}}>
    <div className='splash-main-text'>
      <h1>The home for all your photos</h1>
      <p>Upload, access, organize and share your photos from anywhere in the world</p>
      <Link to='signup' className='photo-upload make-it-pop'>Sign Up</Link>
    </div>
  </div>
);

export default SplashImage;
