import React, { Component } from 'react';
import { Row, Col } from 'antd';
import ForgotUsernameOrPassword from '../ForgotUsernameOrPassword/ForgotUsernameOrPassword';
import ForgotStepper from '../ForgotStepper/ForgotStepper';
import ForgotAccountVerificationForm from '../ForgotAccountVerificationForm/ForgotAccountVerificationForm';
import ForgotOTPForm from '../ForgotOTPForm/ForgotOTPForm';
import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';

class ForgotContainer extends Component {
  render() {
	return (
	  <div>
		<Row className="flex">
		  <Col>
			<ForgotUsernameOrPassword />
			<ForgotStepper />
		  </Col>
		  <Col>
			<ForgotAccountVerificationForm />
			<ForgotOTPForm />
			<ForgotPasswordForm />
		  </Col>
		</Row>
	  </div>
	)
  }
}

export default ForgotContainer;
