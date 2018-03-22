import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./numericFigure.css";

const NumericFigure = ({className, value, label}) => {
  return (
    <figure className={cx(className, styles.numericFigure)}>
      {value}
      <figcaption>
        {label}
      </figcaption>
    </figure>
  );
};

NumericFigure.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default NumericFigure;
