import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

function WithFetch(Comp) {
  return class WithFetching extends Component {
	constructor(props) {
	  super(props);
	}
	render() {
	  if(!this.props.isLoading) return (<Comp {...props} />);
	  return (<p>Loading...</p>)
	}
  }
}

const mapStateToProps = state => ({});

const composedWithFetch = compose(
  connect(mapStateToProps, null),
  WithFetch
);

export default composedWithFetch;
