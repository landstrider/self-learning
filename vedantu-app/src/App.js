import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import axios from 'axios';
import { fetchGlobalState } from './actions/actions';
import MainContent from "./AppStyles.js";
import LeftSide from './Components/LeftSide/LeftSide';
import RightSide from './Components/RightSide/RightSide';
//import WithFetchingData from './Components/AppWithFetch';


//const LeftSideWithData = WithFetchingData(LeftSide); 
//const RightSideWithData = WithFetchingData(RightSide);

class App extends Component {
  componentDidMount() {
	this.props.getGlobalState();
  }

 render() {
   const { getGlobalState } = this.props;
  return (
   <div className="App">
	 <MainContent>
	   <Col span={8} offset={2}>
		 {
		   (!this.props.isLoading) ?
		   <LeftSide userbio={this.props.userBio.toJS()} />
		   :
		   <p>Loading...</p>
		 }
	   </Col>
	   <Col span={14}>
		 {
		   (!this.props.isLoading) ?
		   <RightSide userrepos={this.props.userRepoDetails.toJS()} />
		   :
		   <p>Loading...</p>
		 }
	   </Col>
	 </MainContent>
   </div>
  );
 }
}

const mapStateToProps = state => ({
  isLoading : state.getIn(['root', 'globalState', 'isLoading']),
  userBio: state.getIn(['root', 'globalState', 'userDetails']),
  userRepoDetails: state.getIn(['root', 'globalState', 'userRepos']),
})

const mapDispatchToProps = dispatch => ({
  getGlobalState: () => dispatch(fetchGlobalState()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

