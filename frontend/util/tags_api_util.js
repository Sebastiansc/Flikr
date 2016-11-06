export const postTag = (photoId, tag, success) => {
  $.ajax({
    url: `api/photos/${photoId}/tags`,
    type: 'post',
    data: {tag},
    success
  });
};

export const deleteTag = (id, success) => {
  $.ajax({
    url: `api/tags/${id}`,
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
