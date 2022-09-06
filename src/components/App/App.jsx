import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import styles from 'components/Statistics/Statistics.module.css';

import React from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = bad + neutral + good;

  const countPositiveFeedbackPercentage = () => {
    if (total > 0) {
      return ((good / total) * 100).toFixed(0);
    }
  };
  return (
    <div className={styles.whatever}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={'good'}
          onLeaveFeedback={() => {
            setGood(good + 1);
          }}
        />
        <FeedbackOptions
          options={'neutral'}
          onLeaveFeedback={() => {
            setNeutral(neutral + 1);
          }}
        />
        <FeedbackOptions
          options={'bad'}
          onLeaveFeedback={() => {
            setBad(bad + 1);
          }}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            postivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
