import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon, Form, Input, Button } from 'antd';
import LoginForm from './Components/LoginForm/LoginForm';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Login = () => (
  <Layout style={{ padding: '24px 0', background: '#fff' }}>
	<Content style={{ padding: '0 24px', minHeight: 280 }}>
	  <LoginForm />
	</Content>
  </Layout>
)

export default Login;
