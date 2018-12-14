import { all, fork } from 'redux-saga/effects';
import accountDataWatcher from '../Pages/Dashboard/sagas';
import globalStateWatcher from './globalStateSaga';
//import loginWatcher from '../Pages/Login/sagas';

export default function *rootRunner() {
  yield all([
	fork(globalStateWatcher),
    fork(accountDataWatcher),
	//	fork(loginWatcher),
  ]);
}
