import cx from 'classnames';
import React from "react";
import styles from "./DraftingRegion.css";
import PropTypes from "prop-types";

class DraftingRegion extends React.Component {
  render () {
    const classNames = cx(
      styles.draftingRegion,
      this.props.className, this.props.theme
    );

    return (
      <div className={classNames} >
        <h3>DraftingRegion</h3>
      </div>
    )
  }
}

DraftingRegion.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default DraftingRegion;
