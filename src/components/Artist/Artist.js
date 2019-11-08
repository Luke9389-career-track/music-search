import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Artist({ name, id, disamb }) {
  return (
    <Link to={`/artist/${id}/${name}`}>
      <h2>{name}{disamb ? `: ${disamb}` : null}</h2>
    </Link>
  );
}
Artist.propTypes = {
  name: PropTypes.string.isRequired,
  disamb: PropTypes.string,
  id: PropTypes.string.isRequired
};
