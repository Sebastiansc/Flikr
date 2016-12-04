export const postTag = (photoId, tag, success) => {
  $.ajax({
    url: `api/photos/${photoId}/tags`,
    type: 'post',
    data: {tag},
    success
  });
};

export const deleteTag = (photoId, tagId, success) => {
  $.ajax({
    url: `api/photos/${photoId}/tags/${tagId}`,
    type: 'delete',
    success
  });
};

export const fetchTags = success => {
  $.ajax({
    url: `api/tags`,
    success
  });
};

export const fetchPhotoTags = (photoId, success) => {
  $.ajax({
    url: `api/tags/photo/${photoId}`,
    success
  });
};
