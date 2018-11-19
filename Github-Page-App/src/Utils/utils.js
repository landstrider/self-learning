const filteredList = function(filterBy) {
  store.state.getIn(['globalState', 'userRepos', 'reqRepoDataArr']).filter = (list) => {
	return list.filterBy.toLowerCase().indexOf(
	  search.toLowerCase()) !== -1;
  }
}
export default filteredList;

