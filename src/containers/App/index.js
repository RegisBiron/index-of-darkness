import React, { Component } from 'react';
import styles from './app.css';

const title = 'The Index of Darkness';

class App extends Component {
  render() {
    return (
      <div className={styles.title}>
        <p>{title}</p>
      </div>
    );
  }
}

export default App;
