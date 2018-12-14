import { fromJS } from 'immutable';

const initialState = fromJS({
    isLoading: false,
    userAccountData: {},
  },
);

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ACCOUNT_DATA': {
	  return state.set('isLoading', true);
    };
    case 'FETCH_USER_ACCOUNT_DATA_SUCCESS': {
	  return state.set('userAccountData', fromJS(action.payload))
				  .set('isLoading', false);
    }
    default:
	  return state;
  }
};

export default accountReducer;
