import React from 'react';

function withFilters(WrapperdComponnet, selectData, filterBy) {
  return class extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		search: ''		
	  }
	}

	handleSearch = (event) => {
	  this.setState({
		search: event.target.value.substr(0,20)	
	  })
	}

	render() {
	  const { search } = this.state;

	  let filteredList = selectData.filter(list => {
		return list.filterBy.toLowerCase().indexOf(
		  search.toLowerCase()) !== -1;
	  })

	  return <WrapperdComponnet />
	}
  )
}

