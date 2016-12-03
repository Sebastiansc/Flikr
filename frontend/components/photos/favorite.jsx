import React from 'react';

const Favorite = ({currentUser, photo, favorite, unfavorite}) => {
  debugger;
  const included = Boolean(photo.favorites[currentUser.id]);

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
