import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './reset.css';

render(
  <App className={styles} />,
  document.getElementById('root')
);
