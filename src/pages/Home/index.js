import cx from 'classnames';
import React from "react";
import styles from "./home.css";
import Players from 'models/Players';
import PropTypes from 'prop-types';
import PlayerRegion from 'panes/PlayerRegion';
import DraftingRegion from 'panes/DraftingRegion';
import MessagesRegion from 'panes/MessagesRegion';
import ProjectsRegion from 'panes/ProjectsRegion';

const HomePage = ({className}) => {
  const gridName = styles.defaultGrid;
  const playerRegions = Players.ids.map(pid => (
      <PlayerRegion playerId={pid} className={styles[pid]} />
    )
  );

  return (
    <main className={cx(styles.home, gridName, className)}>
      {playerRegions}
      <DraftingRegion className={styles.drafting} />
      <ProjectsRegion className={styles.projects} />
      <MessagesRegion className={styles.messages} />
    </main>
  );
};

HomePage.propTypes = {
  className: PropTypes.string
};

export default HomePage;
