import cx from 'classnames';
import React from "react";
import styles from "./ProjectsRegion.css";
import DeckStore from 'store/deck';
import PropTypes from "prop-types";
import { Subscribe } from 'unstated';
import StartGame from 'panes/StartGame';
import GameStore from 'store/game';

const ProjectsContainer = ({className}) => {

  return (
    <Subscribe to={[GameStore, DeckStore]}>
      {
        (game, deck) => {
          if (game.state.started) {
            return (
              <ProjectsRegion
                className={className}
                drawDeck={deck.state.draw}
                shuffled={deck.state.shuffled}
                shuffleDeck={deck.shuffleDeck}
              />
            );
          } else {
            return (
              <StartGame className={className} />
            )
          }
        }
      }
    </Subscribe>
  );
};

class ProjectsRegion extends React.Component {
  render() {
    const classNames = cx(
      styles.projectsRegion,
      this.props.className, this.props.theme
    );
    const {drawDeck, shuffled, shuffleDeck} = this.props;
    if (!shuffled) {
      return (
        <div className={classNames}>
          <button onClick={shuffleDeck}>Start Game</button>
        </div>
      );
    }

    return (
      <div className={classNames}>
        <h3>ProjectsRegion</h3>
        <span className={"bg-pink"}>Shuffled?{shuffled ? 'Yes' : 'No'}</span>
        <p>Deck Size: {drawDeck.length}</p>
      </div>
    );
  }
}

ProjectsRegion.propTypes = {
  className: PropTypes.string,
  drawDeck: PropTypes.arrayOf(PropTypes.string),
  shuffled: PropTypes.bool,
  shuffleDeck: PropTypes.func
};

export default ProjectsContainer;
