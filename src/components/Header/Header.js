import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className={styles.Header}>
      <h1>Music Search</h1>
      <nav>
        <Link  to="/">Artist Search</Link>
      </nav>
    </header >
  );
};

export default Header;
