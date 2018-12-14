import asyncInterface from '../asyncInterface';
import { take, fork, all,  takeLatest, call, put } from 'redux-saga/effects';
import { fetchAuthTokenSuccess } from '../actions/actions';
import axios from 'axios';

function *loginWatcher() {
  const loginRedirect = yield take("FETCH_AUTH_TOKEN");
  yield call(loginWorkerSaga, loginRedirect);
}

function *loginWorkerSaga(loginRedirect) {
  const authResponse = yield call(getAuthToken, loginRedirect);	
  sessionStorage.setItem('apiToken', authResponse.data.Data.AccessToken);
  let apiToken = sessionStorage.getItem('apiToken');
  yield put(fetchAuthTokenSuccess(apiToken));
  apiToken && (yield call(loginRedirect.payload.history.push, '/dashboard'));
}

function getAuthToken(loginRedirect) {
  const loginPostUrl = "http://localhost:3001/login";

  return axios({
	method: 'post',
	data: loginRedirect.loginRedirect,
	url: loginPostUrl,
  })
}

export default function* globalStateWatcher() {
  const watchers = [
	fork(loginWatcher),
  ]
  yield all(watchers)
}

