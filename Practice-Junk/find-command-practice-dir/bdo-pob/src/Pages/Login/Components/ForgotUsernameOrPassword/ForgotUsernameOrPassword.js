import React, { Component } from 'react';
import { Checkbox } from 'antd';

class ForgotUsernameOrPassword extends Component {
  constructor(props) {
	super(props);
	this.onChange = this.onChange.bind(this);
	this.state = {
	  isChecked: false,
	}
  }

  onChange(checkedValues) {
	debugger;
	console.log('checked = ', checkedValues);
  }

  render() {
	const options = [
	  { label: 'I Forgot my Password', value: 'password'},
	  { label: 'I Forgot my Username', value: 'username'}
	]
	return (
	  <div>
		<h2>Tell us what is troubling you.</h2>
		<p>Forgot your password / Username? Don’t worry. 
		  Keep your debit card or credit card for authentication.
		</p>
		{/*<Checkbox.Group
		  options={options}
		  defaultValue={['password']}
		  onChange={this.onChange}
		/>*/}
		<Checkbox onChange={this.onChange} checked={this.state.isChecked}>Checkbox</Checkbox>
		<Checkbox onChange={this.onChange} checked={this.state.isChecked}>Checkbox</Checkbox>
	  </div>
	)
  }
}

export default ForgotUsernameOrPassword;
