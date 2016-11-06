import React from 'react';
import {Link} from 'react-router';

const TagItem = ({tag}) => (
  <li className='tag-item'>
    <Link to=''>{tag.name}</Link>
  </li>
);

export default TagItem;
