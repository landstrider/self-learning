import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middlewares/logger';
import history from '../history/history';
import rootReducer from '../reducers/rootReducer';
import accountReducer from '../Pages/Dashboard/reducers';
import rootRunner from '../sagas/rootSaga';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history); // fn will hold an history object

  const middlewares = [loggerMiddleware, sagaMiddleware, routeMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = () => {
    if (process.env.NODE_ENV === 'development') return composeWithDevTools(...enhancers);
    return compose(...enhancers);
  };

  const store = createStore(
    connectRouter(history)(combineReducers({
	  root: rootReducer,
	  account: accountReducer,
    })),
    preloadedState,
    composedEnhancers(),
  );

  sagaMiddleware.run(rootRunner);

  return store;
}
