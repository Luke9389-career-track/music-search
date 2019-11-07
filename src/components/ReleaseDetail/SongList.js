import React from 'react';
import PropTypes from 'prop-types';
import SongItem from './SongItem';

export default function SongList({ songs, artist }) {
  const songElements = songs.map((song, index)=> (
    <li key={`${song}-${index}`}>
      <SongItem title={song} artist={artist} />
    </li>
  ));

  return (
    <ul>
      {songElements}
    </ul>
  );
}
SongList.propTypes = {
  songs: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired,
};
