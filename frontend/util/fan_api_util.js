export const fetchFans = (photoId, success) => {
  $.ajax({
    url: `api/photos/${photoId}/fans`,
    success
  });
};
