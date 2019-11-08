import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lyrics.css';

export default function Lyrics({ title, artist, lyrics }) {
  return (
    <>
      <span className={styles.Lyrics}>
        <h3>{`${title} by ${artist}`}</h3>
        <p >
          <span>{lyrics}</span>
        </p>
      </span>
    </>
  );
}

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,

};
