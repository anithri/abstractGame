import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./playerRegion.css";
import Players from "models/Players";
import Workers from 'models/Workers';
import { Subscribe } from 'unstated';
import DeckStore from 'store/deck';
import Badge from 'components/Badge';

const PlayerContainer = ({playerId, className}) => {
  const player = Players.find(playerId);

  return (
    <Subscribe to={[DeckStore]}>
      {(table) => {
        return (
          <PlayerRegion
            score={0}
            deck={table.state[playerId]}
            player={player}
            key={playerId}
            className={className} />
        );
      }}
    </Subscribe>
  );
};

class PlayerRegion extends React.Component {
  render() {
    const {className, player, score, deck} = this.props;
    const classNames = cx(styles.playerRegion, player.theme, className);

    const workerBadges = player.spheres.map(workerId => {
      const worker = Workers.find(workerId);
      return (
        <Badge key={worker.id} theme={worker.theme}>{worker.name}</Badge>
      )
    });

    return (
      <section className={classNames}>
        <header>
          <h3 className={styles.name}>{player.name}</h3>
          <h3>{score}</h3>
          {workerBadges}
        </header>
        <section>Deck Size: {deck.length}</section>
      </section>
    );
  }
}

PlayerRegion.propTypes = {
  className: PropTypes.string,
  player: Players.shape,
  deck: PropTypes.arrayOf(PropTypes.string).isRequired,
  score: PropTypes.number
};

export default PlayerContainer;
