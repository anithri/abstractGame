import cx from 'classnames';
import React from "react";
import styles from "./ProjectsRegion.css";
import DeckStore from 'store/deck';
import PropTypes from "prop-types";
import { Subscribe } from 'unstated';

const ProjectsContainer = ({className}) => {

  return (
    <Subscribe to={[DeckStore]}>
      {
        (deck) => {

          return (
            <ProjectsRegion
              className={className}
              drawDeck={deck.state.draw}
              shuffled={deck.state.shuffled}
            />
          );
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
    const {drawDeck, shuffled} = this.props;

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
  shuffled: PropTypes.bool
};

export default ProjectsContainer;
