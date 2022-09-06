import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={styles.statisticsBtn}
        onClick={() => {
          onLeaveFeedback();
        }}
      >
        {options}
      </button>
    </div>
  );
};

export default FeedbackOptions;
