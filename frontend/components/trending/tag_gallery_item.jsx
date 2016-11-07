import React from 'react';
import {Link} from 'react-router';

const TrendingGalleryItem = ({tag}) => (
  <figure style={{backgroundImage: `url('${tag.background_url}')`}}
      className='trending-item'>
    <div className='tag-gallery-item-overlay'></div>
    <Link to={`home/trending/${tag.id}`} className='trending-link'>
      <span>{tag.name}</span>
    </Link>
  </figure>
);

export default TrendingGalleryItem;
