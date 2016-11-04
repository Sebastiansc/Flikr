export const fetchUser = (id, success) => {
  $.ajax({
    url: `api/users/${id}`,
    success
  });
};
