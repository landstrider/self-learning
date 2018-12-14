import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const withFetching = fetchAction => Component => {
  class WithFetching extends React.Component {
	constructor(props) {
	  super(props);
	}

	componentDidMount() {
	  this.props.requestData();
	}

	render() {
	  return <Component {...this.props} />
	}
  }

  WithFetching.propTypes = {
	requestData: PropTypes.func.isRequired
  }

  const mapDispatchToProps = dispatch => ({
	requestData: () => dispatch(fetchAction()),
  })

  return connect(null, mapDispatchToProps)(WithFetching);
}

export default withFetching;
