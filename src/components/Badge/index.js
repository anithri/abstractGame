import cx from 'classnames';
import React from 'react';
import styles from './badge.css';

const Badge = ({key, className, theme, children}) => (
  <span key={key} className={cx(className, styles.badge, theme)}>
    {children}
  </span>
);

export default Badge;