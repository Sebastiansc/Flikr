export const fetchPhotos = (success) => {
  $.ajax({
    url: '/api/photos',
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
