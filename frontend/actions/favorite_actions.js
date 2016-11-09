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

export const receiveFavorite = (photoId) => ({
  type: UNFAVORITE,
  photoId
});
export const removeFavorite = (photoId) => ({
  type: UNFAVORITE,
  photoId
});
