import React from 'react';

class RepoTypeSelect extends React.Component {
  render() {
	return (
	  <div>
		<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
		  <Option value="jack">Jack</Option>
   		  <Option value="lucy">Lucy</Option>
	 	  <Option value="disabled" disabled>Disabled</Option>
	   	  <Option value="Yiminghe">yiminghe</Option>
		</Select>
	  </div>
	)
  }
}

export default RepoTypeSelect;
