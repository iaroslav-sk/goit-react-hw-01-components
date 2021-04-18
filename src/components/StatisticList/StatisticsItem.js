import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ stats }) => (
  <Fragment>
    <span>{stats.label}</span>
    <span> {stats.percentage}%</span>
  </Fragment>
);

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default Statistics;
