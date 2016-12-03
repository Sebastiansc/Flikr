export const fetchUser = (id, success) => {
  $.ajax({
    url: `api/users/${id}`,
    success
  });
};

export const changeUserCover = (photoId, userId, success) => {
  $.ajax({
    url: `api/users/${userId}/cover_photo/${photoId}`,
    type: 'post',
    success
  });
};

export const changeProfilePic = (userId, url, success) => {
  $.ajax({
    url: `api/users/${userId}/cover_photo`,
    type: 'post',
    data: {url},
    success
  });
};


export const fetchUserPhotos = (userId, success) => {
  $.ajax({
    url: `api/users/${userId}/photos`,
    type: 'get',
    success
  });
};
