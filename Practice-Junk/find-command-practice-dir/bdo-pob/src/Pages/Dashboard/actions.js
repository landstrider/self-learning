export const fetchAccountData = () => ({
  type: 'FETCH_ACCOUNT_DATA',
});

export const fetchUserAccountDataSuccess = payload => ({
  type: 'FETCH_USER_ACCOUNT_DATA_SUCCESS',
  payload,
});
