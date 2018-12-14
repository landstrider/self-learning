export default {
  init(authBase) {
	const restCall = authBase;
	return {
	  getAccountData() {
		return restCall.details('/casa/casa');
	  }
	}
  }
}
