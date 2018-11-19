import { fromJS } from 'immutable';

const initialState = fromJS({
  globalState: {
	state: 'LOADING',
	userDetails: {},
	userRepos: {
	  reqRepoDataArr: [],
	  repoTypeArr: [],
	  repoLanguageArr: [],
	},
	isLoading: true,
  },
});

const RootReducer = (state = initialState, action) => {
  switch(action.type) {
	case 'FETCH_GLOBAL_STATE': {
	  return state.setIn(["globalState", 'state'], 'LOADING');
	}
	case 'SET_LOADING_STATE': {
	  return state.setIn(['globalState', 'isLoading'], action.payload);
	}
	case 'SET_USER': {
	  return state.setIn(["globalState", "userDetails"], fromJS(action.payload));
	}
	case 'SET_REPOS': {
	  return state.setIn(["globalState", "userRepos"], fromJS(action.payload));
	}
	case 'FETCH_USER_SUCCESS': {
	  return state.setIn(["globalState", "userDetails"], fromJS(action.payload))
	}
	case 'FETCH_USER_REPO_SUCCESS': {
	  return state.setIn(['globalState', 'userRepos', 'reqRepoDataArr'], fromJS(action.payload[0]))
				  .setIn(['globalState', 'userRepos', 'repoLanguageArr'], fromJS(action.payload[1]))
				  .setIn(['globalState', 'userRepos', 'repoTypeArr'], fromJS(action.payload[2]))
				  .setIn(["globalState", "isLoading"], false);
	}
	default:
	  return state;
  }
}

export default RootReducer;
