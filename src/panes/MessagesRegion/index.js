import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./MessagesRegion.css";

class MessagesRegion extends React.Component {
  render () {
    const classNames = cx(
      styles.messagesRegion,
      this.props.className, this.props.theme
    );

    return (
      <div className={classNames} >
        <h3>MessagesRegion</h3>
      </div>
    )
  }
}

MessagesRegion.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default MessagesRegion;
