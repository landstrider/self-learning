import { CancelToken } from 'axios';
import pagesInterface from './pagesInterface';
import accounts from './pagesInterface/accounts';

export default {
  init(opts) {
	const CancelTokenSrc = CancelToken.source();
	opts.CancelTokenSrc = CancelTokenSrc.token;
	const client = pagesInterface.init(opts);
	return {
	  _cancellation: CancelTokenSrc,
	  _cancel(message) { CancelTokenSrc.cancel(message); },
	  accounts: accounts.init(client),
	};
  },
};
