import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./PlayerRegion.css";
import Players from "models/Players";

class PlayerRegion extends React.Component {

  render () {
    const player = Players.find(this.props.playerId);
    const classNames = cx(
      styles.playerRegion,
      this.props.className, this.props.theme
    );

    return (
      <div className={classNames} >
        <h3>{player.name}</h3>
      </div>
    )
  }
}

PlayerRegion.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  playerId: PropTypes.string.isRequired
};

export default PlayerRegion;
