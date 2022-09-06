import React from 'react';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, postivePercentage }) => {
  return (
    <div>
      <div className={styles.statisticsCnt}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Postive feedback: {postivePercentage}%</p>
      </div>
    </div>
  );
};
export default Statistics;
