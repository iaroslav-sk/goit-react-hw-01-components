import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './StatisticsItem';
import style from './StatisticList.module.css';

const StatisticList = ({ titule, stats }) => (
  <section className={style.section}>
    <h2 className={style.titule}>{titule}</h2>
    <ul className={style.list}>
      {stats.map(element => (
        <li key={element.id} className={style.item}>
          <Statistics stats={element} />
        </li>
      ))}
    </ul>
  </section>
);

StatisticList.propTypes = {
  titule: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default StatisticList;
