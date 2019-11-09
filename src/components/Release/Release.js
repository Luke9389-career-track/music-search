import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Release({ title, id, imageUrl, artist }) {
  return (
    <Link to={`/songs/${id}/${artist}`}>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
    </Link>
  
  );
}

Release.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
};
