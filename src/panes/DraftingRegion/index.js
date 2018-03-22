import cx from 'classnames';
import React from "react";
import styles from "./DraftingRegion.css";
import PropTypes from "prop-types";
import {Subscribe} from 'unstated';
import BagStore from 'store/bag';
import NumericFigure from 'components/NumericFigure';
const DraftingContainer = ({className}) => {
  return (
    <Subscribe to={[BagStore]}>
      {(bag) => {
        return (
          <DraftingRegion bag={bag} className={className}/>
        )
      }}
    </Subscribe>
  );
};


class DraftingRegion extends React.Component {
  render () {
    const classNames = cx(
      styles.draftingRegion,
      this.props.className, this.props.theme
    );

    const {bar = 0, dead = 0, discard = 0, draw = 0, reserve = 0, projects = 0} = {};

    return (
      <section className={classNames} >
        <section className={styles.details}>Main Section</section>
        <NumericFigure className={styles.bar} value={bar} label="Bar"/>
        <NumericFigure className={styles.draw} value={draw} label="Draw"/>
        <NumericFigure className={styles.discard} value={discard} label="Discard"/>
        <NumericFigure className={styles.reserve} value={reserve} label="Reserve"/>
        <NumericFigure className={styles.projects} value={projects} label="Projects"/>
        <NumericFigure className={styles.dead} value={dead} label="Dead"/>
      </section>
    )
  }
}

DraftingRegion.propTypes = {
  className: PropTypes.string,
};

export default DraftingRegion;
