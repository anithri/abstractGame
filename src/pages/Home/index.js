import React from "react";
import styles from "./home.css";
import Workers from 'models/Workers';
import Players from 'models/Players';
import PlayerRegion from 'panes/PlayerRegion';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <PlayerRegion className={styles.playerOne} playerId='playerOne' />
      <PlayerRegion className={styles.playerTwo} playerId='playerTwo' />
      <PlayerRegion className={styles.playerThree} playerId='playerThree' />
      <PlayerRegion className={styles.playerFour} playerId='playerFour' />
      <div className={styles.drafting} />
      <div className={styles.projects} />
      <div className={styles.messages} />
    </main>
  );
};

export default HomePage;
