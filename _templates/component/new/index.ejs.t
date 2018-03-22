---
to: src/components/<%= h.inflection.camelize(name) %>/index.js
---
import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./<%= name %>.css";

const <%= h.inflection.camelize(name) %> = ({className, children}) => {
  return (
    <div className={cx(className, styles..<%= h.inflection.camelize(name, true) %>)}>
      <h3><%= name %></h3>
      {children}
    </div>
  );
};

<%= h.inflection.camelize(name) %>.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default <%= h.inflection.camelize(name) %>;
