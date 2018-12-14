import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { fetchAuthToken } from '../../../../actions/actions';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
	e.preventDefault();
	this.props.form.validateFields(['userName', 'password'], (err, values) => {
	  if (!err) {
		const loginRedirect =  {
		  userCred: values, 
		  history: this.props.history 
		};
		this.props.getAuthToken(loginRedirect);
		console.log('Received values of form: ', values);
	  }
	});
  }

  render() {
	const { getFieldDecorator } = this.props.form;
	return (
	  <Form onSubmit={this.handleSubmit} className="login-form">
		<FormItem>
		  {getFieldDecorator('userName', {
			rules: [{ required: true, message: 'Please input your username!' }],
		  })(
			<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
		  )}
		</FormItem>
		<FormItem>
		  {getFieldDecorator('password', {
			rules: [{ required: true, message: 'Please input your Password!' }],
		  })(
			<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
		  )}
		</FormItem>
		<FormItem>
		  <a className="login-form-forgot" href="">Trouble logging in?</a>
		  <Button type="primary" htmlType="submit" className="login-form-button">
			Login
		  </Button>
		  Or <a href="">register now!</a>
		</FormItem>
	  </Form>
	);
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

WrappedNormalLoginForm.propTypes = {
  getAuthToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getAuthToken: loginRedirect => dispatch(fetchAuthToken(loginRedirect)),
});

export default withRouter(connect(null, mapDispatchToProps)(WrappedNormalLoginForm));
