import axios from "axios";

export default {
  init(opts) {
	let baseUrl = "";
	let apiToken = "";
	const cancelToken = opts.CancelTokenSrc;
	if (Object.hasOwnProperty.call(opts, "baseUrl")) {
	  ({ baseUrl } = opts);
	}

	if (Object.hasOwnProperty.call(opts, "apiToken")) {
	  ({ apiToken } = opts);
	}
	return {
	  request(url, method, queryParams, data, contentType) {
		if(!url) throw new Error('Request - URL not defined');
		if(!contentType) contentType = 'application/json';
		if(!queryParams) queryParams = {};
		if(!data) data = {};

		url = baseUrl + url;

		switch(method) {
		  case 'GET':
			return this.get(url, queryParams, contentType);
		  case 'POST':
			return this.post(url, queryParams, data, contentType);
		  case 'PUT':
			return this.put(url, queryParams, data, contentType);
		  case 'DELETE':
			return this.del(url, queryParams, data, contentType);
		  default:
			throw new Error('Request method not defined');
		}
	  },
	  get(url, queryParams, contentType) {
		const config = {
		  headers: {
			'api-token': apiToken,
		  }
		}
		return axios.get(url, config)
		  .catch((error) => {
			if (axios.isCancel(error)) {
			  console.log(error.message);
			} else { throw error; }
		  });
	  },
	  post(url, queryParams, data, contentType) {
	  },
	  put(url, queryParams, data, contentType) {
	  },
	  del(url, queryParams, contentType) {
	  },
	  url() {
		return baseUrl;
	  },
	  customRequest(url, queryParams, contentType) {
	  },
	};
  },
};

