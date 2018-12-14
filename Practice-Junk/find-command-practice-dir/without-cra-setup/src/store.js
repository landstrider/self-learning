import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux-immutable';
import { Iterable, Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from "./reducers/RootReducer";
import { rootRunner } from "./Sagas/RootSaga";

const initialState = Map();

const sagaMiddleware = createSagaMiddleware();

const miiddleware  = () => {
  const enhancer = compose(applyMiddleware(sagaMiddleware));
  if (process.env.NODE_ENV === 'development') {
  	return composeWithDevTools(enhancer);
  }
  return enhancer;
}

const store = createStore(
	combineReducers({
	  root: RootReducer,
	}),
	initialState,
	miiddleware(),
);

sagaMiddleware.run(rootRunner);

export default store;
