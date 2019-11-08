import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

export default function ArtistList({ artists, handlePageBackward, handlePageForward }) {

  const artistElements = artists.map(artist => (
    <li key={artist.id}>
      <Artist name={artist.name} id={artist.id} disamb={artist.disamb} />
    </li>
  ));

  return (
    <>
      <button onClick={handlePageBackward}>Back</button>
      <button onClick={handlePageForward}>Next</button>
      <ul>
        {artistElements}
      </ul>
    </>
  );
}
ArtistList.propTypes = {
  handlePageBackward: PropTypes.func.isRequired,
  handlePageForward: PropTypes.func.isRequired,
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    disamb: PropTypes.string,
  })).isRequired
};
