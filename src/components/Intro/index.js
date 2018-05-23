import React, { Component } from 'react';
import styles from './intro.css';

const title = 'The Index of Darkness';

class Intro extends Component {
  render() {
    return (
      <div className={styles.title}>
        <p>{title}</p>
      </div>
    );
  }
}

export default Intro;
