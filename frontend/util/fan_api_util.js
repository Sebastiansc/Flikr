export const fetchFans = (photoId, success) => {
  $.ajax({
    url: `api/fans/photos/${photoId}`,
    success
  });
};
