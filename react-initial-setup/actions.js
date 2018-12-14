export const fetchAuthToken = payload => ({
  type: "FETCH_AUTH_TOKEN",
  payload,
});

export const fetchAuthTokenSuccess = payload => ({
  type: "FETCH_AUTH_TOKEN_SUCCESS",
  payload,
});

