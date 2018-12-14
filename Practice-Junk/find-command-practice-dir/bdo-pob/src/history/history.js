import createHistory from 'history/createBrowserHistory';

function checkUrl() {
  //let baseUrl = window.location.pathname;
  let baseUrl = 'bdo-unibank-sit.apigee.net/v1';
  window.localStorage.setItem('baseUrl', baseUrl);
  return `/${baseUrl}`
}

const history = createHistory({
  basename: checkUrl(),
});

export default history;
