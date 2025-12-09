import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.spinner} role="status" aria-label="Loading">
      <div className={styles.spinnerIcon} aria-hidden="true"></div>
      <span className={styles.spinnerText}>Loading...</span>
    </div>
  );
};

export default Loader;
