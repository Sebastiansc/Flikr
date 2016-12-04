export const RECEIVE_FANS = "RECEIVE_FANS";
export const FETCH_FANS = "FETCH_FANS";
export const RECEIVE_FAN = "RECEIVE_FAN";
export const REMOVE_FAN = "REMOVE_FAN";

export const fetchFans = photoId => ({
  type: FETCH_FANS,
  photoId
});

export const receiveFans = fans => ({
  type: RECEIVE_FANS,
  fans
});

export const receiveFan = fan => ({
  type: RECEIVE_FAN,
  fan
});

export const removeFan = fan => ({
  type: REMOVE_FAN,
  fan
});
