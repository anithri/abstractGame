import cx from 'classnames';
import React from 'react';
import styles from './badge.css';

const Badge = ({className, theme, children}) => (
  <span className={cx(className, styles.badge, theme)}>
    {children}
  </span>
);

export default Badge;