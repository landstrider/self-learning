import { fromJS } from 'immutable';

const initialState = fromJS({
  globalState: {
	authToken: '',
    isLoading: false,
  },
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
	case 'FETCH_AUTH_TOKEN_SUCCESS': {
	  return state.setIn(['globalState', 'authToken'], action.payload);
	}
    default:
	  return state;
  }
};

export default rootReducer;
