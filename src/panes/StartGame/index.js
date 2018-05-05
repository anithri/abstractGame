import cx from 'classnames';
import React from "react";
import PropTypes from "prop-types";
import styles from "./StartGame.css";
import { Subscribe } from 'unstated';
import GameStore from "store/game";
import BagStore from "store/bag";
import DeckStore from "store/deck";

const GameContainer = ({className}) => {
  return (
    <Subscribe to={[GameStore, BagStore, DeckStore]}>
      {(game, bag, deck) => {
        return (
          <StartGame game={game} bag={bag} deck={deck} className={className} />
        );
      }}
    </Subscribe>
  );
};

class StartGame extends React.Component {
  render() {
    const classNames = cx(
      styles.startGame,
      this.props.className, this.props.theme
    );

    return (
      <div className={classNames}>
        <button>Start Game</button>
      </div>
    );
  }
}

StartGame.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default GameContainer;
