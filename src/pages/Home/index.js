import cx from 'classnames';
import React from "react";
import styles from "./home.css";
import Players from 'models/Players';
import PropTypes from 'prop-types';
import PlayerRegion from 'panes/PlayerRegion';
import DraftingRegion from 'panes/DraftingRegion';
import MessagesRegion from 'panes/MessagesRegion';
import ProjectsRegion from 'panes/ProjectsRegion';

const HomePage = ({className, theme}) => {

  const playerRegions = Players.ids.map(pid => {
    return (
      <PlayerRegion playerId={pid} className={styles[pid]} theme={pid} />
    );
  });
  return (
    <main className={cx(styles.home, className, theme)}>
      {playerRegions}
      <DraftingRegion className={styles.drafting} />
      <ProjectsRegion className={styles.projects} />
      <MessagesRegion className={styles.messages}/>
    </main>
  );
};

HomePage.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string
};

export default HomePage;
