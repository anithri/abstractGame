import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./playerRegion.css";
import Players from "models/Players";

class PlayerRegion extends React.Component {

  render () {
    const player = Players.find(this.props.playerId);
    const game = {};
    const classNames = cx(
      styles.playerRegion,
      this.props.className, this.props.theme
    );

    return (
      <section className={classNames}>
        <header>
          <h3 className={styles.name}>{player.name}</h3>
          <h3 >{game.score || 3}</h3>
          <span>{player.spheres[0]}</span>
          <span>{player.spheres[1]}</span>
          <span>{player.spheres[2]}</span>
        </header>
        <main className={styles.main}>There will be stuff here!</main>
      </section>
   )
  }
}

PlayerRegion.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  playerId: PropTypes.string.isRequired
};

export default PlayerRegion;
