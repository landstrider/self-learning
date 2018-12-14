import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { fetchAccountData } from './actions';
import withFetching from '../../CommonComponents/HOC/withFetching';
import Magnifier from '../../CommonComponents/svgs/Magnifier';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Button type="primary" className="bold caps">Button</Button>
		<Magnifier />
      </div>
    );
  }
}

const DashboardWithFetching = withFetching(fetchAccountData)(Dashboard);

export default DashboardWithFetching;
