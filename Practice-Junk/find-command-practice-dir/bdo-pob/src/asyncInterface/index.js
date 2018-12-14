import asyncFork from './asyncFork';

let obj = {};

if (process.env.NODE_ENV === 'development') {
  obj = {
	init() {
	  return asyncFork.init({
		baseUrl: 'http://localhost:3001',
		apiToken: 'RGlnaWZpVGVzdDA0OlBAc3N3b3JkMDQ',
		//		apiToken: window.sessionStorage.getItem('apiToken'),
	  });
	},
  };
} else {
  obj = {
	init() {
	  const apiToken = process.env.deployEnv === 'staging' ? '' : '';
	  return asyncFork.init({
		baseUrl: ``,
		apiToken,
	  });
	},
  };
}

export default obj;
