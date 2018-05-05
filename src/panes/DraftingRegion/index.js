import cx from 'classnames';
import React from "react";
import styles from "./DraftingRegion.css";
import PropTypes from "prop-types";
import { Subscribe } from 'unstated';
import BagStore from 'store/bag';
import NumericFigure from 'components/NumericFigure';
import Workers from 'models/Workers';
import WorkerList from 'components/WorkerList';

const DraftingContainer = ({className}) => {
  return (
    <Subscribe to={[BagStore]}>
      {(bag) => {
        return (
          <DraftingRegion bag={bag} className={className} />
        );
      }}
    </Subscribe>
  );
};


class DraftingRegion extends React.Component {
  render() {
    const classNames = cx(
      styles.draftingRegion,
      this.props.className, this.props.theme
    );

    const {bar, dead, discard, draw, reserve, projects} = this.props.bag.state;
    const projectsCounts = 0;
    const details = bar; // what's showing in the details spot
    return (
      <section className={classNames}>
        <section className={styles.details}>
          <WorkerList list={details}/>
        </section>
        <NumericFigure className={styles.bar} value={bar.length} label="Bar" />
        <NumericFigure className={styles.draw} value={draw.length} label="Draw" />
        <NumericFigure className={styles.discard} value={discard.length} label="Discard" />
        <NumericFigure className={styles.reserve} value={reserve.length} label="Reserve" />
        <NumericFigure className={styles.projects} value={projectsCounts} label="Projects" />
        <NumericFigure className={styles.dead} value={dead.length} label="Dead" />
      </section>
    );
  }
}

DraftingRegion.propTypes = {
  className: PropTypes.string
};

export default DraftingContainer;
