export const FAVORITE = 'FAVORITE';
export const UNFAVORITE = 'UNFAVORITE';

export const favorite = (photoId) => ({
  type: FAVORITE,
  photoId
});

export const unfavorite = (photoId) => ({
  type: UNFAVORITE,
  photoId
});
