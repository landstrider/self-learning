import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Login from './Pages/Login/Login';
import Routes from './routes/Routes';
import theme from './styles/theme';

class App extends Component {
  render() {
	const { authToken } = this.props;
    return (
	  <ThemeProvider theme={theme}>
		<div className="App">
		  <Routes />
		</div>
	  </ThemeProvider>
    );
  }
}

App.propTypes = {
  authToken: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  authToken: state.getIn(['globalState', 'authToken']),
})

export default withRouter(connect(null, null)(App));
