//import { take, call, put } from 'redux-saga/effects';
//import { fetchAuthTokenSuccess } from '../../actions/actions';
//import axios from 'axios';
//
//export default function *loginWatcher() {
//  const loginRedirect = yield take("FETCH_AUTH_TOKEN");
//  yield call(loginWorkerSaga, loginRedirect);
//}
//
//function *loginWorkerSaga(loginRedirect) {
//  const authResponse = yield call(getAuthToken, loginRedirect);	
//  let apiToken = sessionStorage.setItem('apiToken', authResponse.data.Data.AccessToken);
//  yield put(fetchAuthTokenSuccess(apiToken));
//  sessionStorage.getItem('apiToken') && (yield call(loginRedirect.payload.history.push, '/dashboard'));
//}
//
//function getAuthToken(loginRedirect) {
//  const loginPostUrl = "http://localhost:3001/login";
//
//  return axios({
//	method: 'post',
//	data: loginRedirect.loginRedirect,
//	url: loginPostUrl,
//  })
//}
