import React from "react";
import styles from "./styles";

const Joke = ({ joke }: { joke: any }) => {
  const { category, type, setup, delivery, flags } = joke;

  return (
    <div style={styles.container}>
      <div style={styles.category}>{category}</div>
      <div style={styles.setup}>{setup}</div>
      <div style={styles.delivery}>
        <b>{delivery}</b>
      </div>
      {/* @ts-ignore */}
      <div style={styles.flags}>
        <span style={styles.flagItem}>NSFW: {flags.nsfw ? "Yes" : "No"}</span>
        <span style={styles.flagItem}>
          Religious: {flags.religious ? "Yes" : "No"}
        </span>
        <span style={styles.flagItem}>
          Political: {flags.political ? "Yes" : "No"}
        </span>
        <span style={styles.flagItem}>
          Racist: {flags.racist ? "Yes" : "No"}
        </span>
        <span style={styles.flagItem}>
          Sexist: {flags.sexist ? "Yes" : "No"}
        </span>
        <span style={styles.flagItem}>
          Explicit: {flags.explicit ? "Yes" : "No"}
        </span>
      </div>
    </div>
  );
};

export default Joke;
