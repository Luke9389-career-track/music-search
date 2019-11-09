import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SongItem({ title, artist }) {
  return (
    <Link to={`/lyrics/${artist}/${title}`}>
      <h3>{title}</h3>
    </Link>
  );
}

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

