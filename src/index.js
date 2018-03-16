import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

const title = 'The Index of Darkness';

ReactDOM.render(
  <div className={styles.title}>{title}</div>,
  document.getElementById('app')
);


if (module.hot) module.hot.accept();