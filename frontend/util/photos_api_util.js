export const fetchPhotos = (offset, limit, success) => {
  $.ajax({
    url: `/api/photos/${offset}/${limit}`,
    success
  });
};

export const postPhoto = (photo, success) => {
  $.ajax({
    url: '/api/photos',
    type: "post",
    data: {photo},
    success
  });
};


export const patchPhoto = (photo, success) => {
  $.ajax({
    type: "patch",
    url: `/api/photos/${photo.id}`,
    data: {photo},
    success
  });
};

export const deletePhoto = (id, success) => {
  $.ajax({
    type: "delete",
    url: `/api/photos/${id}`,
    success
  });
};

export const fetchByTag = (id, success) => {
  $.ajax({
    url: `/api/photos/tag/${id}`,
    success
  });
};
