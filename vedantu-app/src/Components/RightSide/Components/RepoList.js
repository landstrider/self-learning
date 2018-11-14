import React from 'react';
import { List, Icon } from 'antd';
import LanguageCircle from './styles';

class RepoList extends React.Component {
  render() {
	const repo = this.props.repo;
	const IconText = ({ type, text }) => (
	  <span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	  </span>
	);

	return (
	  <div>
		<List
		  size="Large"
		  header={<h2>{repo.name}</h2>}
		  bordered
		  dataSource={[repo]}
		  renderItem={item => (
			<List.Item
			  key={item.id}
			  actions={[
				<div>
				  <LanguageCircle lang={item.language} />
				  <span>{item.language}</span>	  
				</div>
				,
				<IconText type="fork" text={item.forks_count} />,
				<IconText type="check-circle" text={item.license__name} />
			  ]}
			>
			  {item.description}
			</List.Item>
		  )}
		/>
	  </div>
	)
  }
}

export default RepoList;


