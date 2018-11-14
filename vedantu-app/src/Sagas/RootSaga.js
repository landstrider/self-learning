import { put, call, takeLatest } from 'redux-saga/effects';
import { setUser, setRepos, fetchUserDetailsSuccess, fetchUserReposSuccess } from '../actions/actions';
import axios from 'axios';

export function *rootRunner() {
  yield takeLatest("FETCH_GLOBAL_STATE", fetchGlobalStateWorker);
}

//async function fetchUserData() {
//	const urlArray = ['https://api.github.com/users/landstrider', 'https://api.github.com/users/landstrider/repos'];
//
//  const promiseArray = urlArray.map(url => axios.get(url));
//
//  try {
//    const result = (
//  	await Promise.all(promiseArray)
//	).map(res => res.data)
//  } catch(error) {
//    console.log(error)
//  }
//}

function fetchUserData() {
  const urlArray = ['https://api.github.com/users/landstrider', 'https://api.github.com/users/landstrider/repos'];

  return axios({
	method: "get",
	url: "https://api.github.com/users/supreetsingh247"
  })

  //const promiseArray = urlArray.map(url => axios.get(url));

  //Promise.all(promiseArray)
  //.then(function* (results) {
  //  const fetchedUserData = results.map( element => element.data );
  //  yield put(setUser(fetchedUserData));
  //})
}

function fetchUserRepos() {
  return axios({
	method: "get",
	url: "https://api.github.com/users/supreetsingh247/repos"
  })
}

function organizeData(reposJSONArr) {
  let reqRepoDataArr = (function getSubset(array, keys) {
    return array.map(o => Object.assign(...keys.map(k => {
  	//if (~k.indexOf(".")) {
  	// var regExpArr = k.match(/(?<=\.).*/);
  	//return ({[k] : k[regExpArr[0]]})
  	//}
  	return {[k] : o[k]}
    })))	
  })(reposJSONArr, ['id', 'name', 'description', 'licence.name', 'updated_at', 'language', 'fork', 'archived', 'mirror_url', 'owner.followers_url', 'owner.following_url', 'stargazers_count']);
  
  console.log(reqRepoDataArr);

  let repoNameArr = (function getRepoName(array) {
    return array.map(o => o.name)
  })(reqRepoDataArr);

  return [reqRepoDataArr, repoNameArr];	
}

function *fetchGlobalStateWorker() {
  try {
	const userDetailResponse = yield call(fetchUserData);
	//yield put(setUser(userDetailResponse.data));
	const userReposResponse = yield call(fetchUserRepos);
	const repoReqDataName = yield call(organizeData, userReposResponse.data);
	//yield put(setRepos(userReposResponse.data));
	yield put(fetchUserDetailsSuccess(userDetailResponse.data));
	yield put(fetchUserReposSuccess(repoReqDataName));
  } catch(error) {
    console.log(error);
  }
}
