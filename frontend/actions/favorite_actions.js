export const FAVORITE = 'FAVORITE';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const UNFAVORITE = 'UNFAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const favorite = (photoId) => ({
  type: FAVORITE,
  photoId
});

export const unfavorite = (photoId) => ({
  type: UNFAVORITE,
  photoId
});

export const receiveFavorite = (fav) => ({
  type: RECEIVE_FAVORITE,
  fav
});

export const removeFavorite = (fav) => ({
  type: REMOVE_FAVORITE,
  fav
});
