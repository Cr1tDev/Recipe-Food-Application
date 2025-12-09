import React from 'react';
import spinnerIcon from '../assets/svg/spinnerIcon.svg';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.spinner}>
      Loading...
      <svg className={styles.spinnerIcon}>
        <img href={`${spinnerIcon}#icon-loader`} />
      </svg>
    </div>
  );
};

export default Loader;
