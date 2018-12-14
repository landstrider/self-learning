import assign from 'lodash/assign';
import restAPI from './restAPI';

export default {
  init(opts) {
	const rest = restAPI.init(opts);

	return {
	  details(url, filters, contentType) {
		let queryParams = null;	
		return rest.request(url, 'GET', queryParams, null, contentType);
	  },
	};
  },
};
