import asyncInterface from '../../asyncInterface';
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUserAccountDataSuccess } from './actions';

function fetchAccountData() {
  const fetchData = asyncInterface.init();
  return fetchData.accounts.getAccountData();
}

function* fetchAccountDataWorker() {
  try {
    const userAccountData = yield call(fetchAccountData);
    yield put(fetchUserAccountDataSuccess(userAccountData.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* accountDataWatcher() {
  yield takeLatest('FETCH_ACCOUNT_DATA', fetchAccountDataWorker);
}
