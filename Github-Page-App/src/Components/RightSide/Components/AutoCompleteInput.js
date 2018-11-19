import React, { Component } from 'react';
import { AutoComplete, List, Select } from 'antd';
import RepoList from './RepoList';

const Option = Select.Option;

class Complete extends React.Component {
  constructor() {
	super();
	this.state = {
  	  search: '',
	  searchType: 'name',
  	}
  }

  handleSearch = (event, filterType) => {
    this.setState({
	  search: event.target.value.substr(0,20),
	  searchType: filterType
    });
  }

  render() {
    const { search, searchType } = this.state;
	const reqRepoDataArr = this.props.userrepodetails.reqRepoDataArr;
	const repoLanguageArr = this.props.userrepodetails.repoLanguageArr;

	let filteredList = reqRepoDataArr.filter((list) => {
	  if (searchType === "type") {
		if(search === "sources") return !list[search]
		return list[search]
	  }
	  return list[searchType] && ~list[searchType].toLowerCase().indexOf(search.toLowerCase()) 
	  }
	)

    return (
	  <div>
		<input
		  type="text"
		  value={search}
		  onChange={e => this.handleSearch(e, 'name')}
		/>
		<select defaultValue="lucy" style={{ width: 120 }} onChange={e => this.handleSearch(e, 'language')}>
		  {
			repoLanguageArr.map((repo) => 
			  (repo && <option key={repo} value={repo}>{repo}</option>)
			)
		  }
		</select>

		<select defaultValue="All" style={{ width: 120 }} onChange={e => this.handleSearch(e, 'type')}>
		  <option value="sources">Sources</option>
		  <option value="fork">forks</option>
		  <option value="archived">archived</option>
		  <option value="mirror_url">mirrors</option>
		</select>
		<ul>
		  {
			filteredList.map(function(repo) {
			  return (
				<RepoList 
				  repo={repo}
				  key={repo.id}
				/> 
			  )
			}, this)
		  }
		</ul>
	  </div>
    );
  }
}

export default Complete;
