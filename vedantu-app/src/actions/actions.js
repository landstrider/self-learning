export const fetchGlobalState = () => ({
  type: 'FETCH_GLOBAL_STATE',
});

export const setUser = user => ({
  type: 'SET_USER',
  payload: user,
});

export const setRepos = repos => ({
  type: 'SET_REPOS',
  payload: repos,
});

export const fetchUserDetailsSuccess = (payload) => ({
  type: 'FETCH_USER_SUCCESS',
  payload: payload,
});

export const fetchUserReposSuccess = (payload) => ({
  type: 'FETCH_USER_REPO_SUCCESS',
  payload: payload,
});
