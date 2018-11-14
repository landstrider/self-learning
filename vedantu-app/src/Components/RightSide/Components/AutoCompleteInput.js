import React, { Component } from 'react';
import { AutoComplete, List, Select } from 'antd';


class Complete extends React.Component {
  constructor() {
	super();
	this.state = {
  	  search: '',
  	}
  }

  componentDidMount() {
  }

  handleChange = (value, listRepos) => {
	console.log(value, listRepos);
  }

  handleSearch = (event) => {
    this.setState({
	  search: event.target.value.substr(0,20)
    });
  }

  render() {
    const { search } = this.state;
	const reqRepoArr = this.props.userrepodetails.reqRepoDataArr;
	//const { filterKey } = this.props.userrepodetails.reqRepoDataArr;
	const repoNameArr = this.props.userrepodetails.repoNameArr;
	
	let filteredList = reqRepoArr.filter(
	  (list) => {
		return list.toLowerCase().indexOf(
		  search.toLowerCase() !== -1
		)
	  }
	)
    return (
	  <div>
		<ul>
		  {
			filteredList.map(function(filterKey)  {
			  return (
				<div
			  	  key={filterKey}
				>
				  {repoNameArr}
				</div>
			  )
			},this)
		  }
		</ul>
		<input
		  type="text"
		  value={search}
		  onChange={this.handleSearch}
		/>
	  </div>
    );
  }
}

export default Complete;
