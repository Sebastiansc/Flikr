import React from 'react';

const Favorite = ({currentUser, fans, photo, favorite, unfavorite}) => {
  const included = Boolean(fans[currentUser.id]);

  const toLikeOrNotToLike = () => {
    const perform = included ? unfavorite : favorite;
    perform(photo.id);
  };

  const klass = included ? 'favorite fa-star' : 'meh fa-star-o';
  return(
    <i className={`fa favorite-star ${klass}`} aria-hidden="true"
       onClick={() => toLikeOrNotToLike()}></i>
  );
};

export default Favorite;
