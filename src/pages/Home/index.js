import React from "react";
import styles from "./home.css";
import Workers from 'models/Workers';
import Players from 'models/Players';

const HomePage = () => {
  return (
    <main className={styles.home}>
      <div className={styles.playerOne} >
        {Workers.ids.join(", ")}
      </div>
      <div className={styles.playerTwo} >
        {Players.list.map(p => p.spheres.join(', ')).join(" == ")}
      </div>
      <div className={styles.playerThree} />
      <div className={styles.playerFour} />
      <div className={styles.drafting} />
      <div className={styles.projects} />
      <div className={styles.messages} />
    </main>
  );
};

export default HomePage;
