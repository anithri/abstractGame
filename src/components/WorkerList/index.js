import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./WorkerList.css";
import Workers from "models/Workers";

const WorkerList = ({className, list}) => {
  const workers = Workers.findEach(list);
  const items = workers.map((worker, idx) => (
    <li key={`${worker.id}${idx}`} className={worker.theme}>♙</li>
  ));

  return (
    <ul className={styles.workerList}>
      {items}
    </ul>
  );
};

WorkerList.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WorkerList;
