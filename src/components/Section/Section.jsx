import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div style={{ display: 'flex' }}>{children}</div>
    </div>
  );
};

export default Section;
