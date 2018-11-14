import React, { Component } from 'react';
import { AutoComplete, List, Select } from 'antd';
import RepoList from './RepoList';


class Complete extends React.Component {
  constructor() {
	super();
	this.state = {
  	  search: '',
  	}
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
	//const reqRepoArr = this.props.userrepodetails.reqRepoDataArr;
	//const repoNameArr = this.props.userrepodetails.repoNameArr;
	
	let filteredList = this.props.userrepodetails.reqRepoDataArr.filter(
	  (list) => {
		return list.name.toLowerCase().indexOf(
		  search.toLowerCase()) !== -1
	  }
	)
    return (
	  <div>
		<ul>
		  {
			filteredList.map(function(repo)  {
			  return (
				  <RepoList 
					repo={repo}
					key={repo.id}
				  /> 
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
