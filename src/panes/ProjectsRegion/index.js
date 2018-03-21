import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./ProjectsRegion.css";

class ProjectsRegion extends React.Component {
  render () {
    const classNames = cx(
      styles.projectsRegion,
      this.props.className, this.props.theme
    );

    return (
      <div className={classNames} >
        <h3>ProjectsRegion</h3>
      </div>
    )
  }
}

ProjectsRegion.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default ProjectsRegion;
