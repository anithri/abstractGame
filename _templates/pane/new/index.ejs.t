---
to: src/panes/<%= h.inflection.camelize(name) %>/index.js
---
import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./<%= name %>.css";

class <%= h.inflection.camelize(name) %> extends React.Component {
  render () {
    const classNames = cx(
      styles.<%= h.inflection.camelize(name, true) %>,
      this.props.className, this.props.theme
    );

    return (
      <div className={classNames} >
        <h3><%= name %></h3>
      </div>
    )
  }
}

<%= h.inflection.camelize(name) %>.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default <%= h.inflection.camelize(name) %>;
