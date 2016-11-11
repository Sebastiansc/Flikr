export const fetchPhotos = (success, limit = 30, offset = 0) => {
  $.ajax({
    url: `/api/photos`,
    data: {limit, offset},
    success
  });
};

export const postPhoto = (photo, success) => {
  $.ajax({
    url: '/api/photos',
    type: "post",
    data: photo,
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

export const fetchInBatch = (photoId, success) => {
  $.ajax({
    url: `/api/photos/batch/${photoId}`,
    success
  });
};
