export const favorite = (photoId, success) => {
  $.ajax({
    url: `/api/photos/${photoId}/favorites`,
    type: 'post',
    success
  });
};

export const unfavorite = (photoId, success) => {
  $.ajax({
    url: `/api/photos/${photoId}/favorites`,
    type: 'delete',
    success
  });
};
