import React from 'react';
import PropTypes from 'prop-types';

export default function Lyrics({ title, artist, lyrics }) {
  return (
    <>
      <h3>{`${title} by ${artist}`}</h3>
      <p>
        <span>{lyrics}</span>
      </p>
    </>
  );
}

Lyrics.propTypes = {
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  
};
